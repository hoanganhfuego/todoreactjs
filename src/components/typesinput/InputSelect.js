export default function InputSelect(props){
    const { register } = props

    return (
        <select name="status" id="status" {...register("status")} className="outline-none shadow-none min-w-[200px] text-center bg-[transparent] hover:cursor-pointer">
            <option value="todo">todo</option>
            <option value="in progress">in progress</option>
            <option value="done">done</option>
        </select>
    )
}