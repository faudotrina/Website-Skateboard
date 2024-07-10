import React from 'react'
import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-white">
            <div className="flex h-18 items-center gap-8 px-1 lg:px-1 mr-5">
                <a className="block text-black" href="/home">
                    <span className="sr-only">Home</span>
                    <Image
                        src="/img/logo.jpg"
                        alt=""
                        width={50}
                        height={50}
                        priority={false}

                    />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-lg font-bold">
                            <li>
                                <a className="text-black transition hover:text-gray-500/75" href="/about"> About </a>
                            </li>

                            <li>
                                <a className="text-black transition hover:text-gray-500/75" href="/apparel"> Apparel </a>
                            </li>

                            <li>
                                <a className="text-black transition hover:text-gray-500/75" href="/sale"> Sale </a>
                            </li>

                            <li>
                                <a className="text-black transition hover:text-gray-500/75" href="/accessories"> Accessories </a>
                            </li>

                            <li>
                                <a className="block rounded-md bg-cyan-600 font-bold px-5 py-2.5 text-sm text-white transition hover:bg-gray-400 hover:text-black" href="/sale"> New Arrival </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            
                            <a
                                className="block rounded-md bg-cyan-600 px-5 py-2.5 text-sm text-white transition hover:bg-gray-400 hover:text-black font-bold"
                                href="/login"
                            >
                                Login
                            </a>

                            <a
                                className="block rounded-md bg-cyan-600 px-5 py-2.5 text-sm text-white transition hover:bg-gray-400 hover:text-black font-bold"
                                href="/register"
                            >
                                Register
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
