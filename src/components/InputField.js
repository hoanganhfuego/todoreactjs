import InputSubmit from './inputs/InputSubmit';
import InputEdit from './inputs/InputEdit';
import InputSearch from './inputs/InputSearch';
import { useSelector } from "react-redux";


export default function InputField(){
    const editChoose = useSelector(state => state.listTodo.isEditChoose.correct)
    const searchChoose = useSelector(state => state.listTodo.search.correct)

    function switchInput(){
        if(searchChoose && editChoose) return < InputEdit />
        if(searchChoose) return < InputSearch />
        if(editChoose) return < InputEdit />
        return <InputSubmit />
    }

    return (
        <div className='form h-[15%] flex flex-col justify-around relative'>
            {switchInput()}
        </div>
    )
}