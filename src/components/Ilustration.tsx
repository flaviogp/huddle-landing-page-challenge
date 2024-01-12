import ImageContainer from './ImageContainer'

interface IlustrationProps{
    image: string
    title: string
    text: string
    bg?: boolean
}

const Ilustration = ({image, title, text, bg}: IlustrationProps) => {

  return (
    <div className='flex flex-col justify-center gap-0'>
            <div className={`container w-full p-7 ${bg && `bg-tBackgroundPink`} mt-[-20px]`}>
                <ImageContainer image={image}/>
                <div className='container  mt-10 text-center flex flex-col gap-7'>
                    <h2 className='text-2xl capitalize'>{title}</h2>
                    <p className='font-semibold'>{text}</p>
                </div>
            </div>
    </div>
  )
}

export default Ilustration