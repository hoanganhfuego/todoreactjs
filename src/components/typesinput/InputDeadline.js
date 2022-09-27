export default function InputDeadline(props){
    const { register } = props

    return (
        <input type='date' {...register("deadline")} className='deadline bg-[transparent] text-white hover:cursor-pointer'></input>
    )
}