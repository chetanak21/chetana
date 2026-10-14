import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  FileText,
  MapPin,
  Mail,
  GraduationCap,
  Sparkles,
  Terminal,
  User,
  ChevronDown,
  Volume2,
  VolumeX,
  Check,
  Copy,
  Award,
  Code2
} from 'lucide-react'
import { Github, Linkedin, CodeChef } from './Icons'
import chetanaPhoto from '../assets/chetana-photo.jpg'
import { soundManager } from '../utils/soundEffects'

export default function Hero({ personal, onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [activeTab, setActiveTab] = useState('portrait')
  const [soundEnabled, setSoundEnabled] = useState(true)

  // Name letter-by-letter reveal animation (Only "Chetana Kolhe")
  const nameLetters = Array.from(personal.name)

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const handleCopyEmail = () => {
    soundManager.playClick()
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const toggleSound = () => {
    const nextState = soundManager.toggle()
    setSoundEnabled(nextState)
    if (nextState) {
      soundManager.playChime()
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Front Page Sound Toggle */}
      <div className="absolute top-24 right-6 sm:right-12 z-20">
        <button
          onClick={toggleSound}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-xs font-mono text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer shadow-md"
          title="Toggle Front Page Sound Effects"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sound On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
              <span>Sound Muted</span>
            </>
          )}
        </button>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[300px] bg-cyan-500/08 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Headline & Front Page Overview */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-purple-950/50 border border-purple-500/30 text-purple-300 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI & Data Science Internships</span>
            </motion.div>

            {/* Letter-by-Letter Animated Name ("Chetana Kolhe") */}
            <div>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">
                Engineering Portfolio
              </p>
              
              <motion.h1
                variants={letterContainerVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]"
              >
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className={`inline-block ${
                      index >= 8
                        ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent'
                        : 'text-white'
                    }`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Tagline */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-lg sm:text-2xl font-semibold text-zinc-200 mt-4 tracking-tight"
              >
                AI & Data Science Student @{' '}
                <span className="text-purple-400 font-bold">RCPIT Shirpur</span>
              </motion.h2>
            </div>

            {/* Clean summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              Building hands-on experience in{' '}
              <span className="text-zinc-200 font-medium">data analytics</span>,{' '}
              <span className="text-zinc-200 font-medium">predictive modeling</span>, and{' '}
              <span className="text-zinc-200 font-medium">machine learning</span> through an active virtual internship at{' '}
              <span className="text-purple-300 font-medium">BharatCares (AICTE & IBM SkillsBuild)</span>. Dedicated to algorithmic logic and clean problem solving in Python, C, and Java.
            </motion.p>

            {/* Location & CodeChef Quick Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400 font-mono"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                {personal.location}
              </span>
              <span>•</span>
              <a
                href={personal.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                <CodeChef className="w-3.5 h-3.5" />
                <span>CodeChef: {personal.codechefRating} (Rank: 11,905)</span>
              </a>
              <span>•</span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors cursor-pointer group bg-zinc-900/60 px-2 py-0.5 rounded-lg border border-zinc-800"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300" />
                )}
              </button>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  soundManager.playClick()
                  onOpenResume()
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 transition-all hover:text-white cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View Resume</span>
              </button>
            </motion.div>

            {/* Social Links including CodeChef */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex items-center gap-3 pt-3 border-t border-zinc-800/80 w-full sm:w-auto"
            >
              <span className="text-xs text-zinc-500 font-mono">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.codechef}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-amber-400 hover:text-amber-300 border border-zinc-800 transition-colors"
                title="CodeChef: chetana_kolhe (1★ 799)"
                aria-label="CodeChef Profile"
              >
                <CodeChef className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                onClick={() => soundManager.playClick()}
                className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right: Portrait & Python Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="card-clean rounded-3xl overflow-hidden shadow-2xl relative border border-zinc-800">
              
              {/* Card Titlebar */}
              <div className="bg-[#0e121d] px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-zinc-400 ml-1.5">
                    {activeTab === 'portrait' ? 'chetana_profile.view' : 'profile.py'}
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-xs">
                  <button
                    onClick={() => {
                      soundManager.playClick()
                      setActiveTab('portrait')
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium text-[11px] ${
                      activeTab === 'portrait'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <User className="w-3 h-3" />
                    <span>Portrait</span>
                  </button>

                  <button
                    onClick={() => {
                      soundManager.playClick()
                      setActiveTab('code')
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer font-mono text-[11px] ${
                      activeTab === 'code'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Python</span>
                  </button>
                </div>
              </div>

              {/* View 1: Portrait Photo */}
              {activeTab === 'portrait' ? (
                <div className="p-4 bg-[#090d16] relative">
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 group shadow-lg">
                    <img
                      src={chetanaPhoto}
                      alt={personal.name}
                      className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-black/20 pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0e121d]/90 backdrop-blur-md border border-zinc-700/60 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-white tracking-wide">
                            {personal.name}
                          </h3>
                          <p className="text-[11px] text-purple-300 flex items-center gap-1">
                            <GraduationCap className="w-3 h-3 text-purple-400" />
                            B.Tech AI & DS • RCPIT
                          </p>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60">
                          Class of '29
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between px-1 text-xs text-zinc-400 font-mono">
                    <span className="text-zinc-300">BharatCares Virtual Intern</span>
                    <span className="text-amber-400 font-semibold">CodeChef 1★ 799</span>
                  </div>
                </div>
              ) : (
                /* View 2: Clean Python code */
                <div className="p-5 font-mono text-xs text-zinc-300 leading-relaxed bg-[#090d16] overflow-x-auto min-h-[380px]">
                  <p className="text-zinc-500"># Engineering Profile & Current Focus</p>
                  <p>
                    <span className="text-purple-400">class</span> <span className="text-cyan-300">AIEngineer</span>:
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">name</span> = <span className="text-amber-300">"{personal.name}"</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">branch</span> = <span className="text-emerald-300">"Artificial Intelligence & Data Science"</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">institute</span> = <span className="text-emerald-300">"RCPIT, Shirpur"</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">codechef</span> = <span className="text-amber-300">"chetana_kolhe (1★ Rating: 799)"</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">languages</span> = [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"C"</span>, <span className="text-amber-300">"Java"</span>]
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">core_skills</span> = [
                  </p>
                  <p className="pl-8 text-amber-200">"Data Analytics", "Predictive Modeling",</p>
                  <p className="pl-8 text-amber-200">"Machine Learning", "Data Structures"</p>
                  <p className="pl-4">]</p>
                  <p className="pl-4">
                    <span className="text-indigo-300">internship</span> = <span className="text-purple-300">"BharatCares (IBM SkillsBuild & AICTE)"</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">status</span> = <span className="text-emerald-400">"Open for internships"</span>
                  </p>
                </div>
              )}

              {/* Verified stats including CodeChef */}
              <div className="bg-[#0e121d] p-3 border-t border-zinc-800 grid grid-cols-4 gap-1.5 text-center">
                <div className="p-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="text-sm sm:text-base font-bold text-white">2029</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase">Batch</div>
                </div>
                <div className="p-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="text-sm sm:text-base font-bold text-amber-400">799</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase">CodeChef</div>
                </div>
                <div className="p-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="text-sm sm:text-base font-bold text-purple-400">888</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase">Solved</div>
                </div>
                <div className="p-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="text-sm sm:text-base font-bold text-cyan-400">2</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase">Internships</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-8 text-center text-xs font-mono text-zinc-500 flex flex-col items-center gap-1.5 animate-bounce">
        <span>Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-purple-400" />
      </div>
    </section>
  )
}
