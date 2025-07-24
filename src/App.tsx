import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

        {/* Protected Admin Routes */}
        <Route
          path="/loginmessages"
          element={
            <div className="min-h-screen bg-black">
              <Login />
            </div>
          }
        />

        <Route
          path="/messages"
          element={
            <div className="min-h-screen bg-black">
              <Messages />
            </div>
          }
        />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
