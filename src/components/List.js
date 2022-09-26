import { useSelector } from "react-redux"
import Todo from "./Todo"

export default function List(){
    const todoList = useSelector(state => state.listTodo.todolist)
    const searchList = useSelector(state => state.listTodo.search.value)
    const searchChoose = useSelector(state => state.listTodo.search.correct)
    function render(){
        if(searchChoose) {
            return searchList.map((todo, index)=>{
                return <Todo todo={todo} key={index}/>
            })
        }
        return todoList.map((todo, index)=>{
            return <Todo todo={todo} key={index}/>
        })
    }
    return (
        <div className='p-2 list h-[600px] w-[840px] rounded-xl text-white overflow-scroll'>
            {render()}
        </div>
    )
}