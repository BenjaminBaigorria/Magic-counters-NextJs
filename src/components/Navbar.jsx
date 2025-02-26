"use client"

import Link from "next/link";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
            <hr></hr>
            <div className="login">
                <ul>
                    <li>Login</li>
                    <li>Logout</li>
                </ul>
            </div>
            <nav className="navbar">
                <Link href={"./"}>
                    <h1 className="title">
                        Magic Counters
                    </h1>
                </Link>

                <ul>
                    <li>
                        <button className="px-6 py-3 active:outline active:outline-1 text-white bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-xl transition-all duration-300 hover:shadow-blue-700/50 hover:scale-110">
                            <h2>Cards</h2>
                        </button>
                    </li>
                    <li>
                        <button className="px-6 py-3 active:outline active:outline-1 text-white bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-xl transition-all duration-300 hover:shadow-blue-700/50 hover:scale-110">
                            <h2  >Decks</h2>
                        </button>

                    </li>
                    <li>
                        <button className="px-6 py-3 active:outline active:outline-1 text-white bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-xl transition-all duration-300 hover:shadow-blue-700/50 hover:scale-110">
                            <h2  >Create Deck</h2>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}