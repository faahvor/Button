
import Button from './Button'

const Form = () => {
  return (
    <div className='flex flex-col  text-black  mx-auto items-center  text-center rounded-2xl bg-white/30 py-[7rem] w-[39rem] '>
        <form className='' action="">
        <h1 className='text-[2rem] font-bold '>Dont want to miss anything</h1>
        <p className=' px-[4rem] text-center'>get weekly updates on the newest design stories, case studies and tips right in your mailbox </p>
        <Button/>
        </form>
    </div>
  )
}

export default Form