export default function InputText(props){
    const { register } = props

    return (
        <input {...register("title")} type='text' placeholder="title" className="outline-none title w-[120px] text-center bg-[transparent] "></input>
    )
}