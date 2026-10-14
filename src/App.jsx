import React, { useState } from 'react'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import EducationCertifications from './components/EducationCertifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-purple-600/30 selection:text-purple-200 relative overflow-x-hidden ambient-glow">
      {/* Navigation */}
      <Navbar
        personal={portfolioData.personal}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* 100vh Front Page with Sound Effects */}
        <Hero
          personal={portfolioData.personal}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* About Section */}
        <About
          personal={portfolioData.personal}
          softSkills={portfolioData.skills.softSkills}
        />

        {/* Skills Section */}
        <Skills
          skills={portfolioData.skills}
        />

        {/* Experience Section (Featuring BharatCares & Project Link) */}
        <Experience
          internships={portfolioData.internships}
        />

        {/* Projects Section */}
        <Projects
          projects={portfolioData.projects}
          githubUrl={portfolioData.personal.github}
        />

        {/* Education & Certifications Timeline */}
        <EducationCertifications
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />

        {/* Contact Hub */}
        <Contact
          personal={portfolioData.personal}
        />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={portfolioData}
      />
    </div>
  )
}
