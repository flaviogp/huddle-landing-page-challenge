
interface ImageContainerProps{
  image: string;
}

const ImageContainer = ({image}: ImageContainerProps) => {
  return (
    <div className=' container p-7 mt-10 md:max-w-[50%]'>
      <img src={image} alt="ilustration image" className='w-[100%]' />
    </div>
  )
}

export default ImageContainer