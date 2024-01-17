import ScreenMockups from '../assets/images/screen-mockups.svg'
import GetStarted from './GetStarted'
import IlustrationSection from './IlustrationSection'
import ImageContainer from './ImageContainer'
import Ready from './Ready'
import StatisticsSection from './StatisticsSection'

const MainContainer = () => {
  return (
    <main className='container flex flex-col items-center'>
      <GetStarted />
      <ImageContainer image={ScreenMockups}/>
      <StatisticsSection />
      <IlustrationSection />
      <Ready />
    </main>
  )
}

export default MainContainer