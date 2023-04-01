"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { RiArrowDownLine } from 'react-icons/ri'

function HeroSection() {
    return (
        <section id='home'>
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image className="rounded-full shadow-2xl" src="/IMG_9754.jpg" alt="" width={300} height={300} />
                </div>
                <div className='md:m-2 md:w-3/5'>
                    <h1 className="font-bold text-4xl mt-6 md:text-4xl md:mt-0">Hi, I&#39;m Scheva Pratama</h1>
                    <p className="text-lg mt-4 mb-6">
                        I&#39;m a {" "}
                        <span className="font-semibold text-cyan-500">
                            Software Developer {" "}
                        </span>
                        based in Banyuwangi, Indonesia. Passionate in creating software that serves a purpose and benefits others.
                    </p>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-cyan-400 rounded shadow hover:bg-cyan-500"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Projects
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <RiArrowDownLine size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    )
}

export default HeroSection