import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Features from "./components/Features"
import ConclusionAlt from "./components/ConclusionAlt.tsx"
import Footer from "./components/FooterAlt.tsx"
import FAQs from "./components/FAQs"
import Operations from "./components/Operations"



const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Operations/>
      <ConclusionAlt/>
      <FAQs/>    
      <Footer/>
    </div>
  )
}

export default App