import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import InputDeadline from "../typesinput/InputDeadline";
import InputDeadlineEnd from "../typesinput/InputDeadlineEnd";
import InputSelect from "../typesinput/InputSelect";
import InputText from "../typesinput/InputText";
import { searchTodo, chooseSearch } from "../../redux/listState";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function InputSearch(){
    const dispatch = useDispatch()
    const editChoose = useSelector(state => state.listTodo.isEditChoose)
    const onSubmit = data => {
        dispatch(searchTodo(data))
        reset({title: '', status: 'todo', deadline:'', deadline2:''});
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    return (
        <form className=' p-2 create-section flex flex-row items-center justify-around w-[840px] h-[80px] rounded-xl relative' onSubmit={handleSubmit(onSubmit)}>
            <InputText register={register}/>
            <div className=" max-w-[125px] text-center flex flex-col">
                <InputDeadline register={register}/>
                <InputDeadlineEnd register={register}/>
            </div>
            <InputSelect register={register}/>
            <button className="max-w-[125px] text-center border-2 rounded-xl hover:bg-white">search</button>
            <div className="search-bar rounded-lg border-2 bg-color2 h-[100%] w-[60px] flex items-center justify-center absolute cursor-pointer right-[-80px]" onClick={()=>{dispatch(chooseSearch()); reset({title: '', status: 'todo', deadline:'', deadline2:''})}}><i className="fa-solid fa-magnifying-glass text-lg"></i></div>
        </form>
    )
}