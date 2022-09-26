import { configureStore } from '@reduxjs/toolkit'
import listReducer from './listState'

export const store = configureStore({
    reducer: {
        listTodo: listReducer,
    },
})