import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputDeadline from "../typesinput/InputDeadline";
import InputSelect from "../typesinput/InputSelect";
import InputText from "../typesinput/InputText";
import { updateTodo, chooseSearch  } from "../../redux/listState";
import { useEffect } from "react";


export default function InputEdit(){
    const dispatch = useDispatch()
    const editChoose = useSelector(state => state.listTodo.isEditChoose)
    const searchChoose = useSelector(state => state.listTodo.search.correct)
    const onSubmit = data => {
        dispatch(updateTodo(data))
        reset({title: '', status: 'todo', deadline:''})
    }
    const {register, handleSubmit, reset, formState: { errors } } = useForm()
    useEffect(()=>{
        if(editChoose.correct && !searchChoose){
            reset(editChoose.value)
            return
        }
        if(editChoose.correct) {
            reset(editChoose.value)
            return
        }
    },[editChoose.value])
    return (
        <form className=' p-2 create-section flex flex-row items-center justify-around w-[840px] h-[80px] rounded-xl relative' onSubmit={handleSubmit(onSubmit)}>
            <InputText register={register}/>
            <div className=" max-w-[135px] text-center flex flex-col">
                <InputDeadline register={register}/>
            </div>
            <InputSelect register={register}/>
            <button className="max-w-[135px] text-center border-2 rounded-xl hover:bg-white">update</button>
            <div className="search-bar rounded-lg border-2 bg-color2 h-[100%] w-[60px] flex items-center justify-center absolute cursor-pointer right-[-80px]" onClick={()=>{dispatch(chooseSearch()); reset({title: '', status: 'todo', deadline:'', deadline2:''})}}><i className="fa-solid fa-magnifying-glass text-lg"></i></div>
        </form>
    )
}