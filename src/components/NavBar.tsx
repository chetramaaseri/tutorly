import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

function NavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setShowNav(false); // Hide on scroll down
            } else {
                setShowNav(true); // Show on scroll up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.nav
            className="z-50 bg-white border-gray-200 dark:bg-gray-900 shadow-sm sticky top-0"
            initial={{ y: 0 }}
            animate={{ y: showNav ? 0 : -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tutorly</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-1 rtl:space-x-reverse">
                    <button className="relative cursor-pointer text-black dark:text-white font-medium rounded-lg text-sm mx-4 py-2 text-center after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 hover:after:w-full dark:after:bg-white">Become an Instructor</button>
                    <div className="border-l my-1 border-gray-200 hidden sm:block"></div>
                    <Link to={'/auth/sign-in'} className="cursor-pointer text-black dark:text-white font-medium rounded-lg text-sm px-4 py-2 text-center hidden sm:block">Sign In</Link>
                    <Link to={'/auth/sign-up'} className="cursor-pointer text-sky-600 bg-sky-100 hover:bg-sky-200 font-medium rounded-lg text-sm px-4 py-2 text-center hidden sm:block">Sign Up</Link>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1">
                    <ul className="flex flex-col md:flex-row md:space-x-1">
                        <li><Link to={'/'} className="block py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-700 dark:text-white">Home</Link></li>
                        <li>
                            <button onClick={toggleDropdown} className="cursor-pointer flex items-center py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-600 dark:text-white">
                                Company
                                <svg className="w-2.5 h-2.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-700 dark:text-white">Marketplace</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-700 dark:text-white">Resources</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 text-sm font-medium hover:text-blue-700 dark:text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="relative">
                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-0 w-full border-gray-200 shadow-xs bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
                        >
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default NavBar;
