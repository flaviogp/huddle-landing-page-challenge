import { ReactElement } from "react"


interface BackgroundContainerProps {
    children: ReactElement;
    bgTop: string;
    bgBottom: string;
}

const BackgroundsContainer = ({children, bgBottom, bgTop}: BackgroundContainerProps) => {
  return (
    <div>
       <div className={`w-full h-[150px] ${bgTop == 'top1' ? 'bg-mobileBgSectionTop1' : bgTop == 'top2' && 'bg-mobileBgSectionTop2'} bg-contain bg-no-repeat`}></div>
        {children}
       <div className={`w-full h-[150px] ${bgBottom == 'bottom1' ? 'bg-mobileBgSectionBottom1' : bgBottom == 'bottom2' && 'bg-mobileBgSectionBottom2'} bg-contain bg-no-repeat`}></div>
    </div>
  )
}

export default BackgroundsContainer