import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContainer from "./components/MainContainer"

function App() {

  return (
    <div className="flex flex-col max-w-[1440px] items-center">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  )
}

export default App
