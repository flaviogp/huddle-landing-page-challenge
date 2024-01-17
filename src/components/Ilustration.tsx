import ImageContainer from './ImageContainer'

interface IlustrationProps{
    image: string
    title: string
    text: string
    bg?: boolean
    reverse?: boolean
}

const Ilustration = ({image, title, text, bg, reverse}: IlustrationProps) => {

  return (
    <div className={`container p-7 ${bg && `bg-tBackgroundPink`} mt-[-20px] flex flex-wrap ${reverse && 'md:flex-row-reverse'} items-center justify-between`}>
      <ImageContainer image={image}/>
      <div className='container  mt-10 text-center flex flex-col gap-7 md:max-w-[40%]'>
        <h2 className='text-2xl capitalize'>{title}</h2>
        <p className='font-semibold'>{text}</p>
      </div>
    </div>
  )
}

export default Ilustration