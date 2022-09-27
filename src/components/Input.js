import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, searchTodo, chooseSearch } from "../redux/listState";
import { useEffect } from "react";

// tạo 3 component: Add.js , Update.js , SearchTodo.js

export default function Input(){
    const {register, handleSubmit, reset, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const editChoose = useSelector(state => state.listTodo.isEditChoose)
    const searchChoose = useSelector(state => state.listTodo.search.correct)
    const onSubmit = data => {
        if(searchChoose){
            dispatch(searchTodo(data))
            reset({title: '', status: 'todo', deadline:'', deadline2:''});
            return
        }
        if(editChoose.correct){
            dispatch(updateTodo(data))
            reset({title: '', status: 'todo', deadline:''})
        }
        else{
            const id = new Date().toISOString()
            dispatch(addTodo({...data, id: id}))
            reset()
        }
    };

    function switchBtn(){
        if(editChoose.correct)return <button className="min-w-[200px] text-center border-2 rounded-xl hover:bg-white">update</button>
        if(searchChoose) return <button className="min-w-[200px] text-center border-2 rounded-xl hover:bg-white">search</button>
        return <button className="min-w-[200px] text-center border-2 rounded-xl hover:bg-white">submit</button>
    }

    useEffect(()=>{
        if(editChoose.correct) {
            reset(editChoose.value)
        }
    }, [editChoose.value])

    return(
        <div className='form h-[15%] flex flex-col justify-around relative'>
            <form className=' p-2 create-section flex flex-row items-center justify-around w-[840px] h-[80px] rounded-xl' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} type='text' placeholder="title" className="outline-none title min-w-[200px] text-center bg-[transparent] "></input>
                <div className=" min-w-[200px] text-center flex flex-col">
                    <input type='date' {...register("deadline")} className='deadline bg-[transparent] text-white hover:cursor-pointer'></input>
                    {searchChoose && <input type='date' {...register("deadline2")} className='deadline bg-[transparent] text-white hover:cursor-pointer'></input>}
                </div>
                <select name="status" id="status" {...register("status")} className="outline-none shadow-none min-w-[200px] text-center bg-[transparent] hover:cursor-pointer">
                    <option value="todo">todo</option>
                    <option value="in progress">in progress</option>
                    <option value="done">done</option>
                </select>
                {switchBtn()}
            </form>
            <div className="search-bar rounded-lg border-2 bg-color2 h-[100%] w-[60px] flex items-center justify-center absolute cursor-pointer" onClick={()=>{dispatch(chooseSearch()); reset({title: '', status: 'todo', deadline:'', deadline2:''})}}><i className="fa-solid fa-magnifying-glass text-lg"></i></div>
        </div>
    )
}