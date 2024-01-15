import { ReactElement } from "react"


interface BackgroundContainerProps {
    children: ReactElement;
    bgTop?: string;
    bgBottom?: string;
}

const BackgroundsContainer = ({children, bgBottom, bgTop}: BackgroundContainerProps) => {
  return (
    <div className="container">
        {
            bgTop == 'top1' &&
            <div className={`w-full h-[150px] bg-mobileBgSectionTop1 sm:bg-desktopBgSectionTop1 bg-cover bg-no-repeat`}></div>
        }
        {
            bgTop == 'top2' &&
            <div className={`w-full h-[150px] bg-mobileBgSectionTop2 sm:bg-desktopBgSectionTop2 bg-cover bg-no-repeat`}></div>
        }
        {
            bgTop == 'footer' &&
            <div className={`w-full h-[150px] bg-mobileBgFooterTop sm:bg-desktopBgFooterTop bg-cover bg-no-repeat`}></div>
        }
            {children}

        {
            bgBottom &&
            <div className={`w-full h-[150px] ${bgBottom == 'bottom1' ? 'bg-mobileBgSectionBottom1 sm:bg-desktopBgSectionBottom1' : bgBottom == 'bottom2' && 'bg-mobileBgSectionBottom2 sm:bg-desktopBgSectionBottom2'} bg-cover bg-no-repeat`}></div>
        }
    </div>
  )
}

export default BackgroundsContainer