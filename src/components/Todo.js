import { useDispatch } from "react-redux"
import { deleteTodo, editTodo } from "../redux/listState"

export default function Todo({todo}){
    const {title, deadline, status, id} = todo
    const dispatch = useDispatch()

    function backgroundColor(){
        const today = new Date()
        if(status === 'in progress') {
            if(today < new Date(deadline)) return 'bg-[#FF8C00]'
            return 'bg-[#f44336]'
        }
        if(status === 'done') return 'bg-[#52b640]'
        return 'bg-zinc-900/50'
    }

    return (
        <div className={`w-[100%] flex items-center justify-around h-10 rounded-xl mt-4 ${backgroundColor()}`} id='list'>
            <p className="min-w-[200px] text-center">{title}</p>
            <p className="min-w-[200px] text-center">{deadline}</p>
            <p className="min-w-[200px] text-center">{status}</p>
            <div className="min-w-[200px] flex justify-around">
                <button className="border-2 rounded-lg min-w-[60px] hover:bg-black text-center" onClick={()=>dispatch(editTodo(todo))}>edit</button>
                <button className="border-2 rounded-lg min-w-[60px] hover:bg-black text-center" onClick={()=>dispatch(deleteTodo(id))}>delete</button>
            </div>
        </div>
    )
}