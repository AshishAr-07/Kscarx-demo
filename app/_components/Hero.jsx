import React from 'react'
import Wrapper from './Wrapper'
import { FaInstagram } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'

export default function Hero() {
  return (
    <section id="hero" className='mt-8 md:mt-16'>
      <Wrapper>
         <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-px bg-(--color)" />
    <span className="text-(--color) text-xs uppercase tracking-widest">About Me</span>
  </div>

        <h2 className="font-bold text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          Every frame Tells a Story
        </h2>

        <p className=" text-muted text-base leading-loose mb-4">
          I’m Noah, the editor behind kscarx. I specialize in creating clean, engaging video edits that transform raw footage into polished, story-driven content. From gaming highlights to cinematic and promotional projects, my focus is always on strong visuals, seamless pacing, and a professional finish. Let’s work together to bring your vision to life.
        </p>

        <p className=" text-muted text-base leading-loose">
          Whether it's a 15-second reel or a 30-minute documentary, I treat every frame as an
          opportunity to create something unforgettable.
        </p>

          <h2 className="font-bold text-cream text-xl md:text-2xl  leading-tight mt-6">
         Education :
        </h2>
        <p className=" text-muted text-base leading-loose">
          Sessions College Multimedia Arts Professional Certificate
        </p>


  <div className="border-t border-white/20 pt-4 mt-6">
                                  
                                    <div className="flex gap-4">
                                        <a href="https://www.instagram.com/edits_by_kscarx" className="bg-(--color)/10 hover:bg-(--color) hover:text-white p-3 rounded-lg transition-colors">
                                            <FaInstagram size={20} />
                                        </a>                                       
                                        <a href="https://x.com/noahkscarx" className="bg-(--color)/10 hover:bg-(--color) hover:text-white p-3 rounded-lg transition-colors">
                                            <RiTwitterXLine  size={20} />
                                        </a>
                                    </div>
                                </div>
      </Wrapper>
    </section>
  )
}

