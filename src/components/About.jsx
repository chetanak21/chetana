import React from 'react'
import {
  User,
  GraduationCap,
  Brain,
  Target,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  BookOpen
} from 'lucide-react'

export default function About({ personal, softSkills }) {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Data Science Focus',
      description:
        'Specializing in analytical modeling, data-driven decision systems, and foundational machine learning architectures at RCPIT.',
      color: 'from-purple-500/20 to-purple-700/10 border-purple-500/30 text-purple-400',
    },
    {
      icon: Target,
      title: 'Hands-on Analytics Internship',
      description:
        'Currently building real-world solutions aligned with UN SDGs in an active virtual internship with BharatCares, IBM SkillsBuild, and AICTE.',
      color: 'from-indigo-500/20 to-indigo-700/10 border-indigo-500/30 text-indigo-400',
    },
    {
      icon: BookOpen,
      title: 'Algorithmic Foundations',
      description:
        'Solid grounding in Data Structures and Algorithms with verified certifications in C and Java, emphasizing optimal logic.',
      color: 'from-cyan-500/20 to-cyan-700/10 border-cyan-500/30 text-cyan-400',
    },
    {
      icon: Sparkles,
      title: 'Creative & Digital Acumen',
      description:
        'Prior marketing internship experience at Aaditya COEP, bringing strong communication, visual design, and team collaboration skills.',
      color: 'from-pink-500/20 to-pink-700/10 border-pink-500/30 text-pink-400',
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-950/50 border border-purple-500/30 text-purple-300 mb-3 font-mono">
            <User className="w-3.5 h-3.5 text-purple-400" />
            <span>KNOW MORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
            Get an inside look at my engineering journey, technical passions, and what drives my work.
          </p>
        </div>

        {/* Career Objective Banner */}
        <div className="card-glass rounded-2xl p-6 sm:p-8 mb-12 border-l-4 border-l-purple-500">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex p-3 rounded-xl bg-purple-900/30 text-purple-400 border border-purple-800/40 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold mb-2">
                Career Objective & Vision
              </h3>
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                "{personal.careerObjective}"
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="card-glass rounded-xl p-5 border flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br border ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Details Split Grid: Quick Facts & Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quick Facts */}
          <div className="lg:col-span-7 card-glass rounded-2xl p-6 sm:p-7">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              Academic & Personal Overview
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-500 text-xs block mb-0.5 font-mono">NAME</span>
                <span className="text-zinc-200 font-medium">{personal.name}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-500 text-xs block mb-0.5 font-mono">CURRENT EDUCATION</span>
                <span className="text-zinc-200 font-medium">{personal.degree}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-500 text-xs block mb-0.5 font-mono">INSTITUTE</span>
                <span className="text-zinc-200 font-medium">RCPIT, Shirpur</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-500 text-xs block mb-0.5 font-mono">LOCATION</span>
                <span className="text-zinc-200 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {personal.location}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-500 text-xs block mb-0.5 font-mono">CODECHEF PROFILE</span>
                <a
                  href={personal.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-medium flex items-center justify-between"
                >
                  <span>1★ (Rating: 799 • 888 Solved)</span>
                  <span className="text-[10px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">Rank: 11,905</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-500 text-xs block mb-0.5 font-mono">EMAIL</span>
                <span className="text-zinc-200 font-medium flex items-center gap-1 truncate">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <a href={`mailto:${personal.email}`} className="hover:text-purple-300 truncate">
                    {personal.email}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Core Strengths & Soft Skills */}
          <div className="lg:col-span-5 card-glass rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Interpersonal & Work Strengths
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                Skills developed through academic project teams, community initiatives, and marketing outreach.
              </p>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-300 hover:border-purple-500/40 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800/80">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Languages Spoken:</span>
                <span className="text-zinc-200 font-medium">English, Hindi, Marathi</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
