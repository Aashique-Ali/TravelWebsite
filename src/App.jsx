import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactPage from "./pages/ContactPage"
import Services from "./pages/Services"
import About from "./pages/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
