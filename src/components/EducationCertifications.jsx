import React, { useState } from 'react'
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  School,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react'

export default function EducationCertifications({ education, certifications }) {
  const [expandedCert, setExpandedCert] = useState(null)

  const toggleCert = (idx) => {
    setExpandedCert(expandedCert === idx ? null : idx)
  }

  return (
    <section id="education" className="py-24 relative bg-[#06080e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-purple-950/60 border border-purple-500/40 text-purple-300 mb-3 font-mono shadow-md">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          
          <p className="mt-3.5 text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Verified academic credentials and technical certifications spanning data analytics, machine learning, and core computer science.
          </p>
        </div>

        {/* 2-Column Split: Education Timeline on Left, Certifications Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Education Vertical Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-purple-900/40 text-purple-400 border border-purple-700/50">
                <School className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Academic Journey</h3>
                <span className="text-xs text-zinc-500 font-mono">Formal Engineering Degrees</span>
              </div>
            </div>

            {/* Glowing Vertical Line Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-900/60 space-y-6 ml-3">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="card-glass rounded-2xl p-6 border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 relative group"
                >
                  {/* Glowing Node on the line */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-purple-600 border-2 border-black ring-4 ring-purple-950/80 group-hover:ring-cyan-400/50 transition-all" />

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                        {edu.badge}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-zinc-300 font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    {edu.score && (
                      <span className="px-3 py-1 rounded-xl text-xs font-bold font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 shrink-0 shadow-sm">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed my-3">
                    {edu.details}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 font-mono pt-3 border-t border-zinc-850">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Interactive List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-900/40 text-cyan-400 border border-cyan-700/50">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
                <span className="text-xs text-zinc-500 font-mono">Industry Credentials & Courses</span>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => {
                const isExpanded = expandedCert === idx
                return (
                  <div
                    key={idx}
                    className={`card-glass rounded-2xl p-5 sm:p-6 border transition-all duration-300 cursor-pointer ${
                      isExpanded
                        ? 'border-cyan-500/50 shadow-xl shadow-cyan-950/30'
                        : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                    onClick={() => toggleCert(idx)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-400 border border-purple-800/50 shrink-0 mt-0.5">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-cyan-300 font-mono mt-0.5">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 shrink-0 hidden sm:inline">
                          {cert.badge}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-zinc-500" />
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed mt-3 pl-11">
                      {cert.description}
                    </p>

                    {/* Expandable Credential Details */}
                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-zinc-800/80 pl-11 space-y-2 animate-in fade-in duration-200 text-xs">
                        <div className="flex items-center justify-between text-zinc-400 font-mono">
                          <span>Verification Status:</span>
                          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Completed & Verified
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-400 font-mono">
                          <span>Curriculum Focus:</span>
                          <span className="text-purple-300">
                            Practical Exercises & Assessments
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mt-4 pt-3 border-t border-zinc-850 pl-11">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Official Certificate
                      </span>
                      <span>Year: {cert.date}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
