import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react'
import { Github, Linkedin } from './Icons'

export default function Contact({ personal }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open email client with pre-filled details
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formState.subject || `Portfolio Message from ${formState.name}`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`

    window.open(mailtoUrl, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 relative bg-[#07080d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-950/50 border border-purple-500/30 text-purple-300 mb-3 font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
            Have an internship opportunity, a project idea, or just want to chat about AI & Data Science? Feel free to reach out!
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-glass rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Contact Details
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Direct channels to get in touch with me quickly.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-800/40 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-zinc-500 font-mono uppercase block">Email Address</span>
                      <a href={`mailto:${personal.email}`} className="text-zinc-200 hover:text-purple-300 font-medium truncate block">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 font-mono uppercase block">Phone / WhatsApp</span>
                      <a href={`tel:${personal.phone}`} className="text-zinc-200 hover:text-emerald-300 font-medium block">
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-950/60 text-purple-400 border border-purple-800/40 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase block">Current Location</span>
                    <span className="text-zinc-200 font-medium block">
                      {personal.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-500 block mb-3">Online Profiles</span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/40 text-zinc-300 hover:text-white flex items-center justify-between text-xs transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-sky-400" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/40 text-zinc-300 hover:text-white flex items-center justify-between text-xs transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-purple-400" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-glass rounded-2xl p-6 sm:p-8 border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-1">Send a Direct Message</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in the form below to reach out regarding internships or questions.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/50 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Message Prepared!</h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto mb-4">
                    Your default email client has been opened to dispatch this note directly to {personal.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="text-xs text-purple-400 hover:text-purple-300 underline font-mono cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-purple-500 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-purple-500 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Internship Opportunity / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-purple-500 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Chetana, I came across your portfolio and would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-purple-500 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Chetana</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
