export default function InputDeadline(props){
    const { register } = props

    return (
        <input type='date' {...register("deadline")} className='max-w-[120px] deadline bg-[transparent] text-white hover:cursor-pointer'></input>
    )
}