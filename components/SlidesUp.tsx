"use client" // this is a client component

import React, { useEffect, useRef, ReactNode, useState } from "react"
interface Props {
    offpos?: string
    children?: ReactNode
    // any props that come into the component
}

export default function SlideUp({ children, offpos = '0px 0px 0px 0px' }: Props) {
    const ref = useRef(null)

    const [rootMargin, setRootMargin] = useState('0px')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0")
                        entry.target.classList.add("animate-slideUpCubiBezier")
                    }
                })
            },
            { rootMargin: '0px' }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        if (ref.current) {
            observer.observe(ref.current)
        }
    }, [rootMargin, ref])

    useEffect(() => {
        setRootMargin(offpos)
    }, [offpos])

    return (
        <div ref={ref} className="relative opacity-0">
            {children}
        </div>
    )
}