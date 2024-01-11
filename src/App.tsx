import GetStarted from "./components/GetStarted"
import Header from "./components/Header"
import ImageContainer from "./components/ImageContainer"
import IlustrationSection from "./components/IlustrationSection"

import ScreenMockups from './assets/images/screen-mockups.svg'
import StatisticsSection from "./components/StatisticsSection"

function App() {

  return (
    <div className="flex flex-col max-w-[1440px]">
      <Header />
      <GetStarted />
      <ImageContainer image={ScreenMockups}/>
      <StatisticsSection />
      <IlustrationSection />
    </div>
  )
}

export default App
