export default function InputDeadlineEnd(props){
    const { register } = props

    return (
        <input type='date' {...register("deadlineEnd")} className='deadline bg-[transparent] w-[120px] text-white hover:cursor-pointer'></input>
    )
}