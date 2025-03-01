"use client"

import Link from "next/link";
import "./Navbar.css"
import NewModal from "./Modal";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <div className="bg-gray-900/80 backdrop-blur-lg shadow-lg text-white z-50">
            {/* Login */}
            <div className="flex justify-end px-6 py-2 bg-gray-800/90 text-sm">
                <ul className="flex space-x-6">
                    <li className="hover:text-blue-400 cursor-pointer transition duration-300" onClick={() => setOpen(true)}>Login</li>
                    <li className="hover:text-red-400 cursor-pointer transition duration-300">Logout</li>
                </ul>
            </div>
            <NewModal open={open} setOpen={() => setOpen(false)}>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center rounded-lg dark:border-gray-700">
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-8 h-12 mr-4" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/MTG_%28PW%29.svg" alt="logo" />
                             Magic Counters
                        </a>
                        <div className=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-500 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">Sign in</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </NewModal>
            {/* Navbar Principal */}
            <nav className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="./" className="text-3xl font-extrabold tracking-wide text-darkblue hover:text-purple-700 transition mr-16">
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