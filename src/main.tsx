import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Contact from './Contact.tsx'
import About from './About.tsx'
import Careers from './Careers.tsx'
import CaseStudies from './CaseStudies.tsx'
import Partnerships from './services/Partnerships.tsx'
import StaffTraining from './services/StaffTraining.tsx'
import ExecutiveCoaching from './services/ExecutiveCoaching.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/services/partnerships" element={<Partnerships />} />
        <Route path="/services/staff-training" element={<StaffTraining />} />
        <Route path="/services/executive-coaching" element={<ExecutiveCoaching />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
