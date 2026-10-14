import React from 'react'
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2
} from 'lucide-react'
import { Github, Linkedin } from './Icons'
import chetanaPhoto from '../assets/chetana-photo.jpg'

export default function ResumeModal({ isOpen, onClose, data }) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0f111a] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#141824] border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <span className="text-sm font-bold text-white tracking-wide">
              Resume Preview — {data.personal.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-200 bg-[#0c0e15] text-xs sm:text-sm">
          
          {/* Resume Header with Photo */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-zinc-800 text-center sm:text-left">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-xl shrink-0">
              <img
                src={chetanaPhoto}
                alt={data.personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase mb-1">
                {data.personal.name}
              </h1>
              <p className="text-purple-300 font-medium text-xs sm:text-sm mb-3">
                {data.personal.degree} | AI & DS Undergrad @ RCPIT
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-purple-400" />
                  {data.personal.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-emerald-400" />
                  {data.personal.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-indigo-400" />
                  {data.personal.email}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2 text-xs text-purple-400">
                <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Linkedin className="w-3 h-3" />
                  {data.personal.linkedinDisplay}
                </a>
                <a href={data.personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Github className="w-3 h-3" />
                  {data.personal.githubDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2 pb-1 border-b border-zinc-800">
              CAREER OBJECTIVE
            </h2>
            <p className="text-zinc-300 leading-relaxed text-justify">
              {data.personal.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 pb-1 border-b border-zinc-800">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {data.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-zinc-400">{edu.institution}, {edu.location}</p>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 sm:text-right shrink-0">
                    <span>{edu.period}</span>
                    {edu.score && <span className="text-purple-300 font-semibold block">Percentage: {edu.score}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 pb-1 border-b border-zinc-800">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-semibold text-white mr-2">• Programming Languages:</span>
                <span className="text-zinc-300">Python, C, Java</span>
              </div>
              <div>
                <span className="font-semibold text-white mr-2">• Web Technologies & Tools:</span>
                <span className="text-zinc-300">HTML, CSS, MS Excel, MS Word, GitHub, VS Code</span>
              </div>
              <div>
                <span className="font-semibold text-white mr-2">• Data & Analytics:</span>
                <span className="text-zinc-300">Data Analysis, Predictive Modeling, Machine Learning (foundational)</span>
              </div>
              <div>
                <span className="font-semibold text-white mr-2">• Data Structures & Algorithms:</span>
                <span className="text-zinc-300">DSA, Algorithms, Data Structures</span>
              </div>
              <div>
                <span className="font-semibold text-white mr-2">• Core Focus:</span>
                <span className="text-zinc-300">Logic Building, Data Analytics, Problem Solving</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 pb-1 border-b border-zinc-800">
              INTERNSHIP EXPERIENCE
            </h2>
            <div className="space-y-4">
              {data.internships.map((intern, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white">
                        {intern.role} — <span className="text-purple-300">{intern.organization}</span>
                      </h3>
                      {intern.collaboration && (
                        <p className="text-zinc-400 text-xs italic">{intern.collaboration}</p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      {intern.period} | {intern.location}
                    </span>
                  </div>

                  <ul className="space-y-1 pl-4 text-xs text-zinc-300 list-disc">
                    {intern.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2 pb-1 border-b border-zinc-800">
              CERTIFICATIONS
            </h2>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {data.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                  <span className="font-semibold text-white">{cert.title}</span>
                  <span className="text-zinc-400">— {cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2 pb-1 border-b border-zinc-800">
              SOFT SKILLS
            </h2>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
              {data.skills.softSkills.map((s, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Declaration */}
          <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400">
            <h3 className="font-mono uppercase text-zinc-300 font-semibold mb-1">DECLARATION</h3>
            <p className="italic mb-3">
              I hereby declare that the above information is true to the best of my knowledge.
            </p>
            <div className="flex items-center justify-between text-zinc-300">
              <span>Place: {data.personal.location}</span>
              <span className="font-semibold text-white">Signature: {data.personal.name}</span>
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3.5 bg-[#141824] border-t border-zinc-800 flex items-center justify-between shrink-0 text-xs text-zinc-400">
          <span>Formatted directly from original curriculum vitae</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  )
}
