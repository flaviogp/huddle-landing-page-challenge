import { ReactElement } from "react"


interface BackgroundContainerProps {
    children: ReactElement;
    bgTop?: string;
    bgBottom?: string;
}

const BackgroundsContainer = ({children, bgBottom, bgTop}: BackgroundContainerProps) => {
  return (
    <div>
        {
            bgTop == 'top1' &&
            <div className={`w-full h-[150px] bg-mobileBgSectionTop1 bg-contain bg-no-repeat`}></div>
        }
        {
            bgTop == 'top2' &&
            <div className={`w-full h-[150px] bg-mobileBgSectionTop2 bg-contain bg-no-repeat`}></div>
        }
        {
            bgTop == 'footer' &&
            <div className={`w-full h-[150px] bg-mobileBgFooterTop bg-contain bg-no-repeat`}></div>
        }
            {children}

        {
            bgBottom &&
            <div className={`w-full h-[150px] ${bgBottom == 'bottom1' ? 'bg-mobileBgSectionBottom1' : bgBottom == 'bottom2' && 'bg-mobileBgSectionBottom2'} bg-contain bg-no-repeat`}></div>
        }
    </div>
  )
}

export default BackgroundsContainer