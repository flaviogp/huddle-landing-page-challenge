import Logo from '../assets/images/logo.svg'


const Header = () => {
  return (
    <header className='flex justify-between w-full h-16 items-center p-5 py-10'>
        <img src={Logo} alt="huddle logo" className='w-[150px] h-6' />
        <button className='px-5 py-2 border-2 font-semibold text-tPink rounded-full'>Try it free</button>
    </header>
  )
}

export default Header