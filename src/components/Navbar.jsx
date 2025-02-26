"use client"

import Link from "next/link";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-lg shadow-lg text-white z-50">
            {/* Login */}
            <div className="flex justify-end px-6 py-2 bg-gray-800/90 text-sm">
                <ul className="flex space-x-6">
                    <li className="hover:text-blue-400 cursor-pointer transition duration-300">Login</li>
                    <li className="hover:text-red-400 cursor-pointer transition duration-300">Logout</li>
                </ul>
            </div>

            {/* Navbar Principal */}
            <nav className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="./" className="text-3xl font-extrabold tracking-wide text-white hover:text-blue-400 transition mr-16">
                    Magic Counters
                </Link>

                {/* Menú */}
                <ul className="flex space-x-8">
                    <li>
                        <button className="active:outline active:outline-1 active:outline-white px-3 py-3 text-white bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/70 hover:scale-105 hover:bg-opacity-90">
                            <h2>Cards</h2>
                        </button>
                    </li>
                    <li>
                        <button className="active:outline active:outline-1 active:outline-white px-3 py-3 text-white bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/70 hover:scale-105 hover:bg-opacity-90">
                            <h2>Decks</h2>
                        </button>
                    </li>
                    <li>
                        <button className="active:outline active:outline-1 active:outline-white px-3 py-3 text-white bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/70 hover:scale-105 hover:bg-opacity-90">
                            <h2>Create Deck</h2>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}