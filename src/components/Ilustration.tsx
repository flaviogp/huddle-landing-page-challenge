import React from 'react'
import ImageContainer from './ImageContainer'

interface IlustrationProps{
    image: string
    title: string
    text: string
}

const Ilustration = ({image, title, text}: IlustrationProps) => {
  return (
    <div className='container w-full'>
        <ImageContainer image={image}/>
        <div className='container  mt-10 text-center flex flex-col gap-7'>
            <h2 className='text-2xl'>{title}</h2>
            <p className='font-semibold'>{text}</p>
        </div>
    </div>
  )
}

export default Ilustration