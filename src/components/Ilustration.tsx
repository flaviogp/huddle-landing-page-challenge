import React, { useEffect, useState } from 'react'
import ImageContainer from './ImageContainer'

interface IlustrationProps{
    image: string
    title: string
    text: string
    bg: string
}

const Ilustration = ({image, title, text, bg}: IlustrationProps) => {
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        
    const renderingBg =(bg: string) => {
        let background = ''
        switch(bg){
            case 'mobileTop1':
                background = 'bg-mobileBgSectionTop1'
                break;
            case 'mobileTop2':
                background = 'bg-mobileBgSectionTop1'
                break;
            case 'mobileBottom1':
                background = 'bg-mobileBgSectionBotton1'
                break;
            case 'mobileBottom2':
                background = 'bg-mobileBgSectionBotton2'
                break;
            case 'desktopTop1':
                background = 'bg-desktopBgSectionTop1'
                break;
            case 'desktopTop2':
                background = 'bg-desktopBgSectionTop2'
                break;
            case 'desktopBottom1':
                background = 'bg-desktopBgSectionBotton1'
                break;
            case 'desktopBottom2':
                background = 'bg-desktopBgSectionBotton2'
                break;

        }

        return setBgImage(background)
    }

    renderingBg(bg)

    }, [bg])

  return (
    <div className={`container w-full p-7`}>
        <ImageContainer image={image}/>
        <div className='container  mt-10 text-center flex flex-col gap-7'>
            <h2 className='text-2xl capitalize'>{title}</h2>
            <p className='font-semibold'>{text}</p>
        </div>
    </div>
  )
}

export default Ilustration