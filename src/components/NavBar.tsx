import { useState } from "react";

function NavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <nav className="z-11 bg-white border-gray-200 dark:bg-gray-900 shadow-sm sticky top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tutorly</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-1 rtl:space-x-reverse">
                    <button type="button" className="cursor-pointer text-black dark:text-white font-medium rounded-lg text-sm px-4 py-2 text-center">Become an Instructor</button>
                    <div className="border-l my-1 border-gray-200 hidden sm:block"></div>
                    <button type="button" className="cursor-pointer text-black dark:text-white font-medium rounded-lg text-sm px-4 py-2 text-center hidden sm:block">Log In</button>
                    <button type="button" className="cursor-pointer text-sky-600 bg-sky-100 hover:bg-sky-200 font-medium rounded-lg text-sm px-4 py-2 text-center hidden sm:block">Sign Up</button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col md:flex-row md:space-x-1">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-700 dark:text-white">Home</a>
                        </li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <button onClick={toggleDropdown} className="flex items-center py-2 px-3 text-gray-900  text-sm font-medium hover:text-blue-600 dark:text-white">
                                Company
                                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-700 dark:text-white">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-700 dark:text-white">Resources</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-700 dark:text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            {isDropdownOpen && (
                <div className="mt-1 border-gray-200 shadow-xs bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div className="font-semibold">Online Stores</div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div className="font-semibold">Segmentation</div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Analyze data with AI-driven insights.</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
