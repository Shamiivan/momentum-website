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
import JobDetail from './careers/JobDetail.tsx'
import { AuthProvider } from './editor/AuthContext.tsx'
import { ProtectedRoute } from './editor/ProtectedRoute.tsx'
import { LoginPage } from './editor/LoginPage.tsx'
import { AdminDashboard } from './editor/AdminDashboard.tsx'
import { EditorPage } from './editor/EditorPage.tsx'
import { FEATURE_FLAGS } from './config/featureFlags.ts'

// Conditionally initialize i18n
if (FEATURE_FLAGS.ENABLE_I18N) {
  await import('./i18n/config.ts');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:jobSlug" element={<JobDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services/partnerships" element={<Partnerships />} />
          <Route path="/services/staff-training" element={<StaffTraining />} />
          <Route path="/services/executive-coaching" element={<ExecutiveCoaching />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/editor/:pageId"
            element={
              <ProtectedRoute>
                <EditorPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
