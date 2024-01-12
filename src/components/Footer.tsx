import BackgroundsContainer from "./BackgroundsContainer"
import Contacts from "./Contacts"
import Newsletter from "./Newsletter"

const Footer = () => {
  return (
    <BackgroundsContainer bgTop="footer">
        <footer className="bg-tVeryDarkCyan container flex flex-col items center gap-10">
            <Newsletter />
            <Contacts />
        </footer>
    </BackgroundsContainer>
  )
}

export default Footer