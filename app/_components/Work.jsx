'use client'

import { useState } from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'

const drivelinks = [
    {
        id: 1,
        title: 'My Short Film ',
        category: 'Film',
        description: 'It was a horror story with a surprise comedic twist.',
        videoUrl: 'https://drive.google.com/file/d/15MTiPXIn3-UDdcLHUCVfONL1QQ_tNfYl/preview',
    },
    {
        id: 2,
        title: 'Comedy Skit',
        category: 'Comedy',
        description: 'A comical take on everyday situations, guaranteed to make you laugh',
        videoUrl: 'https://drive.google.com/file/d/1hvh9nhk9qfLvZbZEPnRWvdb7iZ7hwKE8/preview',
    },
    {
        id: 3,
        title: 'Gaming',
        category: 'Gaming',
        description: 'Epic gameplay moments and walkthroughs with a cinematic touch',
        videoUrl: 'https://drive.google.com/file/d/1KtU6bM0aByjdgrhhLq9OxFjFRXg4nJL0/preview',
    },
    {
        id: 4,
        title: 'Vlog',
        category: 'Vlogging',
        description: 'A day in the life of a person, sharing real experiences and emotions',
        videoUrl: 'https://drive.google.com/file/d/1U7GNV_Z14J4FiPdxizSNGcHp-7KGjbzB/preview',
    },
    {
        id: 5,
        title: 'Logo Animation',
        category: 'BTS',
        description: 'Get rid of “and filming techniques” ',
        videoUrl: 'https://drive.google.com/file/d/148u8bA7ZcxaRhiS7L7VFqnkGKnyhsjVQ/preview',
    }
]

export default function Portfolio() {
    const [hoveredId, setHoveredId] = useState(null)
    const [hoveredYoutubeId, setHoveredYoutubeId] = useState(null)

    return (
        <section id="work" >
            <Wrapper>

                {/* YouTube Videos Section */}
                <section id='youtube'>
                   <div className='mb-12'>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-(--color)" />
                        <span className="font-sans text-(--color) text-xs uppercase tracking-widest">Edits I have Done</span>
                    </div>
                    <h2 className="font-serif font-bold text-cream text-4xl md:text-5xl leading-tight mb-6">
                        Editing Projects that hit differently.
                    </h2>


                </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {drivelinks.map((link) => (
                            <div
                                key={link.id}
                                className="group cursor-pointer"
                                onMouseEnter={() => setHoveredId(link.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                              <Link href={link.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
                                <div className="relative overflow-hidden rounded-xl bg-card border border-white/20 aspect-video mb-4">
                                    <iframe
                                        src={link.videoUrl}
                                        title={link.title}
                                        className="w-full h-full border-0"
                                        allow="autoplay; fullscreen"
                                    />


                                    {/* Overlay */}
                                    {/* <div className="absolute inset-0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                                        <button className="bg-(--color) text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                                            <Play size={24} fill="currentColor" />
                                        </button>
                                    </div> */}

                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3 bg-(--color) text-white px-3 py-1 rounded text-xs font-semibold">
                                        {link.category}
                                    </div>

                                    {/* Views Badge */}
                                    {/* <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                                        {link.views} views
                                    </div> */}
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold group-hover:text-(--color) transition-colors line-clamp-2">
                                        {link.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {link.description}
                                    </p>
                                  
                                </div></Link>
                            </div>
                        ))}
                    </div>
                </section>
            </Wrapper>
        </section>
    )
}