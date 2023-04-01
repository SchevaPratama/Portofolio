"use client"
import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    },
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [navbar, setNavbar] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full px-4 mx-auto bg-white shadow sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="md:py-5 md:block">
                            <Link to="home">
                                <h2 className="text-2xl font-bold">Scheva Pratama</h2>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setNavbar(!navbar)}> {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />} </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className={
                                            "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                                        }
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                            {currentTheme === "light" ? (
                                <button onClick={() => setTheme("dark")}
                                    className="p-2 bg-slate-100 rounded-xl">
                                    <RiMoonFill size={20} />
                                </button>
                            ) : (
                                <button onClick={() => setTheme("light")}
                                    className="p-2 bg-slate-100 rounded-xl">
                                    <RiSunLine size={20} color="black" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar