import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo, chooseSearch  } from "../../redux/listState";
import InputDeadline from "../typesinput/InputDeadline";
import InputSelect from "../typesinput/InputSelect";
import InputText from "../typesinput/InputText";
import { useEffect } from "react";

export default function InputSubmit(){
    const dispatch = useDispatch()
    const onSubmit = data => {
        const id = new Date().toISOString()
        dispatch(addTodo({...data, id: id}))
        reset()
    }
    const {register, handleSubmit, reset, formState: { errors } } = useForm()
    useEffect(()=>{
        console.log('step 1')
        return ()=>{console.log('step 2')}
      },[])

    return (
        <form className=' p-2 create-section flex flex-row items-center justify-around w-[540px] lg:w-[860px] h-[80px] rounded-xl relative' onSubmit={handleSubmit(onSubmit)}>
            <InputText register={register}/>
            <div className=" w-[120px] text-center flex flex-col">
                <InputDeadline register={register}/>
            </div>
            <InputSelect register={register}/>
            <button className="w-[120px] text-center border-2 rounded-xl hover:bg-white">submit</button>
            <div className="search-bar rounded-lg border-2 bg-color2 h-[100%] w-[60px] flex items-center justify-center absolute cursor-pointer right-[-80px]" onClick={()=>{dispatch(chooseSearch()); reset({title: '', status: 'todo', deadline:'', deadline2:''})}}><i className="fa-solid fa-magnifying-glass text-lg"></i></div>
        </form>
    )
}