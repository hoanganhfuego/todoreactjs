import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('todoList')) || []

function search(state, action){
    const {title, deadline, deadline2, status} = action.payload
    let searchValue = [...state.todolist]
    if(title) {
        searchValue = searchValue.filter(todo => {
            return todo.title.includes(title)
        })
    }
    if(deadline && deadline2) {
        let minDate = new Date(deadline)
        let maxDate = new Date(deadline2)
        searchValue = searchValue.filter(todo => {
            return (minDate < new Date(todo.deadline) && new Date(todo.deadline) < maxDate)
        })
    }
    if(status) {
        searchValue = searchValue.filter(todo => todo.status === status)
    }
    state.search.value = [...searchValue]
}

export const ListStore = createSlice({
    name: 'ListStore',
    initialState: {
        todolist: initialState,
        isEditChoose: {
            correct: false,
            value: {}
        },
        search: {
            correct: false,
            value: []
        }
    },
    reducers: {
        addTodo: (state, action)=> {
            console.log(action.payload)
            state.todolist.unshift(action.payload)
            localStorage.setItem('todoList', JSON.stringify(state.todolist))
        },
        deleteTodo: (state, action) => {
            let index = state.todolist.findIndex(todo => todo.id === action.payload)
            state.todolist.splice(index,1)
            if(state.search.value.length){
                let indexSearch = state.search.value.findIndex(todo => todo.id === action.payload)
                state.search.value.splice(indexSearch,1)
            }
            localStorage.setItem('todoList', JSON.stringify(state.todolist))
        },
        editTodo: (state, action) => {
            state.isEditChoose.correct = true
            state.isEditChoose.value = action.payload
            state.search.correct = false
        },
        updateTodo: (state, action) => {
            state.todolist.forEach((todo, index)=>{
                if(todo.id === action.payload.id){
                    state.todolist.splice(index, 1, action.payload)
                    state.isEditChoose.correct = false
                    state.isEditChoose.value = {}
                }
            })
            localStorage.setItem('todoList', JSON.stringify(state.todolist))
        },
        searchTodo: search,
        chooseSearch: (state, action) =>{
            state.search.correct = !state.search.correct
            state.search.value = []
        }
    },
})

export const {addTodo, deleteTodo, editTodo, updateTodo, searchTodo, chooseSearch} = ListStore.actions

export default ListStore.reducer