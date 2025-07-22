import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Features from "./components/Features"
import Operations from "./components/Operations"
import Labs from "./components/Labs"
import Challenges from "./components/Challenges"
import Footer from "./components/FooterAlt.tsx"


const App = () => {
  return (
    <div className="cursor-default">
      <Navbar />
      <HeroSection />
      <Features />
      <Operations/>
      <Labs/>
      <Challenges/>
      <Footer/>
    </div>
  )
}

export default App