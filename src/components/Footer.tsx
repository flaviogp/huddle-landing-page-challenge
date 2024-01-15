import BackgroundsContainer from "./BackgroundsContainer"
import Contacts from "./Contacts"
import Newsletter from "./Newsletter"

const Footer = () => {
  return (
    <BackgroundsContainer bgTop="footer">
        <footer className="container bg-tVeryDarkCyan flex flex-col items-center lg:flex-row-reverse lg:items-start lg:justify-around gap-10 p-7">
            <Newsletter />
            <Contacts />
        </footer>
    </BackgroundsContainer>
  )
}

export default Footer