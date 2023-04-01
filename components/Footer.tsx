import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from "react-icons/ai"

function Footer() {
    return (
        <footer className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl ">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
            <div className="flex flex-col p-4 mx-auto text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
                    © {new Date().getFullYear()} Scheva Pratama<a href="/" className="hover:underline"></a>
                </div>
                <div className="flex flex-row items-center justify-center mb-1 space-x-2">
                    <a href="https://github.com/hqasmei" rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                            className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    <a
                        href="https://twitter.com/hqasmei"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineInstagram
                            className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/hosnaqasmei/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineLinkedin
                            className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer