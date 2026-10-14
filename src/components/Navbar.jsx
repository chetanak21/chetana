import React, { useState, useEffect } from 'react'
import { Menu, X, FileText, Send } from 'lucide-react'
import chetanaPhoto from '../assets/chetana-photo.jpg'
import { soundManager } from '../utils/soundEffects'

export default function Navbar({ personal, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href) => {
    soundManager.playClick()
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand with Photo Avatar */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              soundManager.playClick()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform group-hover:scale-105 shadow-md shadow-purple-500/20 overflow-hidden">
              <img
                src={chetanaPhoto}
                alt={personal.shortName}
                className="w-full h-full object-cover object-top rounded-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-purple-300 transition-colors">
                {personal.shortName}
              </span>
              <span className="text-[11px] text-zinc-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AI & DS Undergrad @ RCPIT
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-zinc-800/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          {/* Actions: Resume & Contact */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => {
                soundManager.playClick()
                onOpenResume()
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800/70 hover:bg-zinc-700/80 hover:text-white border border-zinc-700/60 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-md shadow-purple-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundManager.playClick()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            className="md:hidden p-2 text-zinc-400 hover:text-white bg-zinc-900/80 rounded-xl border border-zinc-800 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f19]/98 border-b border-zinc-800 px-4 pt-3 pb-5 mt-3 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  soundManager.playClick()
                  onOpenResume()
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-zinc-200 bg-zinc-800 rounded-xl border border-zinc-700/60 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                View Resume
              </button>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
