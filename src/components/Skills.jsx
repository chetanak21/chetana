import React from 'react'
import {
  Code2,
  Cpu,
  Coffee,
  BarChart3,
  LineChart,
  Brain,
  GitFork,
  Lightbulb,
  Layout,
  GitBranch,
  Terminal,
  FileSpreadsheet,
  FileText,
  CheckCircle2,
  Sparkles
} from 'lucide-react'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 relative bg-[#06080e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-950/50 border border-purple-500/30 text-purple-300 mb-3 font-mono">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
            Verified competencies in programming, data analytics, predictive modeling, and developer tooling.
          </p>
        </div>

        {/* 3 Main Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Programming Languages */}
          <div className="card-glass rounded-3xl p-6 sm:p-7 border border-zinc-800 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-purple-900/30 text-purple-400 border border-purple-700/40">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Programming</h3>
                    <span className="text-[11px] text-zinc-500 font-mono">Core Languages</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                  3 Languages
                </span>
              </div>

              <div className="space-y-3">
                {skills.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between group hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-zinc-800 text-purple-300">
                        {lang === 'Python' ? <Code2 className="w-4 h-4" /> : lang === 'Java' ? <Coffee className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                      </div>
                      <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {lang}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700">
                      Core Logic
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Certified in DSA (C) & Java Programming</span>
            </div>
          </div>

          {/* 2. Data & Analytics / Machine Learning */}
          <div className="card-glass rounded-3xl p-6 sm:p-7 border border-zinc-800 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-indigo-900/30 text-indigo-400 border border-indigo-700/40">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Data & Analytics</h3>
                    <span className="text-[11px] text-zinc-500 font-mono">Specialization</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                  Applied AI
                </span>
              </div>

              <div className="space-y-2.5">
                {skills.dataAndAI.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between group hover:border-indigo-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <BarChart3 className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>IBM SkillsBuild & AICTE Trained</span>
            </div>
          </div>

          {/* 3. Web Technologies & Developer Tools */}
          <div className="card-glass rounded-3xl p-6 sm:p-7 border border-zinc-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-cyan-900/30 text-cyan-400 border border-cyan-700/40">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Tools & Web</h3>
                    <span className="text-[11px] text-zinc-500 font-mono">Workflow & Utilities</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Workflow
                </span>
              </div>

              <div className="space-y-2.5">
                {skills.toolsAndWeb.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between group hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      {tool.includes('Git') ? <GitBranch className="w-4 h-4 text-cyan-400" /> : tool.includes('VS') ? <Terminal className="w-4 h-4 text-cyan-400" /> : tool.includes('Excel') ? <FileSpreadsheet className="w-4 h-4 text-cyan-400" /> : <Layout className="w-4 h-4 text-cyan-400" />}
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                        {tool}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Certified in Git Version Control</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
