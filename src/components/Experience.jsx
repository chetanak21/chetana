import React from 'react'
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  ExternalLink,
  FolderGit2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react'
import { Github } from './Icons'

export default function Experience({ internships }) {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-950/50 border border-purple-500/30 text-purple-300 mb-3 font-mono">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>PRACTICAL TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
            Hands-on technical internships combining data analytics, predictive modeling, and collaborative project execution.
          </p>
        </div>

        {/* Internships Timeline List */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {internships.map((internship) => {
            const isBharatCares = internship.id === 'bharatcares' || internship.organization === 'BharatCares'
            return (
              <div
                key={internship.role}
                className={`card-glass rounded-3xl p-6 sm:p-9 relative overflow-hidden transition-all duration-300 ${
                  isBharatCares
                    ? 'border-purple-500/40 shadow-xl shadow-purple-950/20'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Glow accent for current role */}
                {isBharatCares && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                )}

                {/* Top Row: Title, Org, Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {internship.role}
                      </h3>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          isBharatCares
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                            : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                        }`}
                      >
                        {internship.badge}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-purple-300 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-purple-400" />
                        {internship.organization}
                      </span>
                      {internship.collaboration && (
                        <>
                          <span className="text-zinc-600 hidden sm:inline">•</span>
                          <span className="text-zinc-400 text-xs sm:text-sm">
                            {internship.collaboration}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-col sm:items-end text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {internship.period}
                    </span>
                    <span className="flex items-center gap-1.5 mt-0.5 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {internship.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 my-5 text-xs sm:text-sm text-zinc-300">
                  {internship.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Specific Internship Project Showcase for BharatCares */}
                {internship.projectShowcase && (
                  <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#090b14]/90 border border-purple-500/30 space-y-3 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-purple-900/40 text-purple-300 border border-purple-700/50">
                          <FolderGit2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block font-semibold">
                            FEATURED INTERNSHIP PROJECT
                          </span>
                          <h4 className="text-base font-bold text-white">
                            {internship.projectShowcase.title}
                          </h4>
                        </div>
                      </div>

                      {/* Direct Clickable Button to GitHub Repository */}
                      <a
                        href={internship.projectShowcase.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/25 transition-all transform hover:-translate-y-0.5 shrink-0"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Project on GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {internship.projectShowcase.description}
                    </p>
                  </div>
                )}

                {/* Technologies Pills */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-1">Technologies:</span>
                  {internship.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
