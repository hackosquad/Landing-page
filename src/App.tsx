import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Operations from "./components/Operations";
import Labs from "./components/Labs";
import Challenges from "./components/Challenges";
import Contact from "./components/Contact";
import Footer from "./components/FooterAlt";

import { Login } from "./admin/Login";
import Messages from "./admin/Messages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="cursor-default">
              <Navbar />
              <HeroSection />
              <Features />
              <Operations />
              <Labs />
              <Challenges />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Login Page */}
        <Route path="/loginmessages" element={<Login />} />

        {/* Messages Page (after login) */}
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
