'use client'

import React from "react"

import { useState } from 'react'
import Wrapper from "./Wrapper"
import { FaInstagram, FaMailBulk } from "react-icons/fa"
import { RiTwitterXLine } from "react-icons/ri"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to a backend
        console.log(formData)
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', subject: '', message: '' })
        }, 3000)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact">
            <Wrapper>

                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-(--color)" />
                        <span className="font-sans text-(--color) text-xs uppercase tracking-widest">Get in Touch</span>
                    </div>
                    <h2 className="font-serif font-bold text-cream text-4xl md:text-5xl leading-tight mb-6">
                        Let's make something<br /><em className="italic">extraordinary.</em>
                    </h2>
                    <p className="font-sans font-light text-muted text-base leading-loose mb-10">
                        Have a project in mind? Whether it's a brand campaign, YouTube series, or a short film —
                        I'd love to hear about it. Let's build something your audience will never forget.
                    </p>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="border border-white/20 p-8 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <div>
                                <label className="block text-sm tracking-wider font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:border-(--color) transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm tracking-wider font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:border-(--color) transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm tracking-wider font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:border-(--color) transition-colors"
                                    placeholder="Project type or inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm tracking-wider font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:border-(--color) transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-(--color) text-white py-2 rounded-lg font-semibold cursor-pointer"
                            >
                                {submitted ? 'Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-card border border-white/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <FaMailBulk className="text-(--color) mt-1 shrink-0" size={24} />
                                    <div>
                                        <p className="font-semibold text-foreground">Email</p>
                                        <a href="mailto:kscarx@videoeditor.com" className="text-(--color) hover:underline">
                                            kscarx@videoeditor.com
                                        </a>
                                    </div>
                                </div>

                                <div className="border-t border-white/20 pt-6">
                                    <p className="font-semibold text-foreground mb-4">Follow Me</p>
                                    <div className="flex gap-4">
                                        <a href="https://www.instagram.com/edits_by_kscarx" className="bg-(--color)/10 hover:bg-(--color) hover:text-white p-3 rounded-lg transition-colors">
                                            <FaInstagram size={20} />
                                        </a>
                                        <a href="https://x.com/noahkscarx" className="bg-(--color)/10 hover:bg-(--color) hover:text-white p-3 rounded-lg transition-colors">
                                            <RiTwitterXLine size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="border-t border-white/20 pt-6">
                                    <p className="text-sm text-muted-foreground">
                                        Available for freelance projects worldwide. Response time typically 24-48 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Wrapper>
        </section>
    )
}