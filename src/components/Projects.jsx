import React from 'react'
import {
  FolderGit2,
  ExternalLink,
  Code2,
  ArrowUpRight,
  Database
} from 'lucide-react'
import { Github } from './Icons'

export default function Projects({ projects, githubUrl }) {
  return (
    <section id="projects" className="py-24 relative bg-[#06080e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-950/50 border border-purple-500/30 text-purple-300 mb-3 font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>PORTFOLIO CODE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
            Real projects and implementations developed through academic coursework, internship training, and practical problem-solving.
          </p>
        </div>

        {/* Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between group border border-zinc-800 hover:border-purple-500/40 transition-all duration-300"
            >
              <div>
                {/* Header Tag & GitHub icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-950/70 text-purple-300 border border-purple-800/40">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                    title="View on GitHub"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5">
                  {project.title}
                </h3>

                <p className="text-xs text-indigo-400 font-mono mb-3">
                  {project.organization}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Banner Callout */}
        <div className="mt-14 card-glass rounded-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-purple-950/60 text-purple-400 border border-purple-800/50 shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Find All Source Code on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Explore algorithmic solutions, data analysis scripts, and active repositories at @chetanak21.
              </p>
            </div>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 transition-all shrink-0"
          >
            <span>Visit @chetanak21</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  )
}
