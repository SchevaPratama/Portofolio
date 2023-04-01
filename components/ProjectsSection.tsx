import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlidesUp'

const projects = [
    {
        name: "Tulung",
        description: "Designed to connect people in need with those willing to provide assistance. Our platform allows users to request help for a variety of situations, including punctures, accidents, running out of fuel, and more.",
        image: "/tulung.jpg",
        link: "https://play.google.com/store/apps/details?id=com.pixeldev.tulung&hl=en_US&gl=US"
    },
    {
        name: "Dooring",
        description: "Our shipment app simplifies the shipping process for PT. Washeng Keke Mandiri and its customers. Users can easily create and track shipments, view real-time updates, and manage delivery schedules.",
        image: '/washeng.jpg',
        link: "https://play.google.com/store/apps/details?id=com.washeng.transporter_dev&hl=en_US&gl=US"
    },
    {
        name: "Enisan",
        description: "Enisan is an online platform that enables users to save and treasure memories of their loved ones who have passed away. It serves as a place to celebrate, honor, and remember the lives of the departed, offering a secure and safe space to store and share cherished memories.",
        image: "/enisan.png",
        link: "https://enisan.id/"
    },
]

function ProjectsSection() {
    return (
        <section id="projects">
            <h1 className="text-4xl font-bold text-center">Projects</h1>
            <hr className='w-10 h-1 mx-auto my-4 border-0 rounded bg-cyan-400'></hr>
            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offpos="-300px 0px -300px 0x">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className="mt-11 md:w-1/2">
                                        <Link href={project.link} target="_blank">
                                            <Image src={project.image} alt="" width={1000} height={1000} className="shadow-xl rounded-xl hover:opacity-70" />
                                        </Link>
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                                        <p className="mb-6 leading-7 text-md text-neutral-600 dark:text-neutral-400">{project.description}</p>
                                        <Link
                                            href={project.link}
                                            className="px-6 py-3 space-x-4 font-semibold align-bottom rounded shadow text-neutral-100 bg-cyan-400 hover:bg-cyan-500"
                                        >
                                            Visit
                                        </Link>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

export default ProjectsSection