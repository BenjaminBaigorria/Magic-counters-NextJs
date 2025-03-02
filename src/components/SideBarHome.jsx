export default function SideBarHome() {

    return (
        <div className="w-80 h-screen bg-gray-900 rounded-md">
            <div className="px-6 pt-8">
                <div className="flex items-center justify-between"></div>

            </div>
            <div className="px-6 pt-4">
                <input type="text" placeholder="search" className="w-full rounded px-4 py-3 text-sm font-light bg-gray-800 text-gray-300 placeholder-gray-500" />
            </div>
            <div className="px-6 pt-4">
                <hr className="border-gray-700" />
            </div>
            <div className="px-6 pt-4">
                <ul className="flex flex-col space-y-2">
                    <li className="relative text-gray-500 hover:text-white">
                        <a className="inline-block w-full px-4 py-3 hover:bg-gray-800 text-xs rounded" href="/">Dashboard</a>
                    </li>
                    <li>
                        <div className="relative text-gray-500 hover:text-white flex justify-between">
                            <div className="flex items-center w-full">
                                <a className="inline-block w-full px-4 py-3 hover:bg-gray-800 text-xs rounded" href="/">Card type</a>
                            </div>
                            <button className="absolute right-0 p-1 flex items-center">|</button>
                        </div>
                        <div className="pt-2 pl-4">
                            <ul className=" flex flex-col pl-2 text-gray-500 border-l border-gray-700">
                                <li>
                                    <a className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800  hover:text-white" href="/">Artifact</a>
                                </li>
                                <li>
                                    <a className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white " href="/">Land</a>
                                </li>
                                <li>
                                    <a className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white" href="/">Enchantment</a>
                                </li>
                                <li>
                                    <a className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white" href="/">Sorcery</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="relative text-gray-500 hover:text-white">
                        <a className="inline-block w-full px-4 py-3 hover:bg-gray-800 text-xs rounded" href="/">Color</a>
                    </li>
                    <li className="relative text-gray-500 hover:text-white">
                        <a className="inline-block w-full px-4 py-3 hover:bg-gray-800 text-xs rounded" href="/">Format</a>
                    </li>
                    <li className="relative text-gray-500 hover:text-white">
                        <a className="inline-block w-full px-4 py-3 hover:bg-gray-800 text-xs rounded" href="/">Order</a>
                    </li>
                </ul>
            </div>
            <div className="px-6 pt-8">
                <hr className="border-gray-700"/>
            </div>
        </div>
    )

}