function Contact() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full bg-fixed bg-cover bg-bottom" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/education-day-assortment-with-copy-space_23-2148721275.jpg')" }}>
                <div className="absolute z-0 inset-0 bg-black opacity-70 dark:opacity-80"></div>
                <div className="z-10 relative max-w-screen-xl mx-auto px-4 bg-opacity-80 py-20 rounded-lg">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-4 text-white dark:text-gray-100">Contact Us</h1>
                        <p className="text-xl text-gray-200 dark:text-gray-300">Learn more about our mission, vision, and the team behind our success.</p>
                    </div>
                </div>
            </section>

            {/* Contact Information and Form Section */}
            <section className="max-w-screen-xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Contact Information */}
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Have questions or need assistance? We're here to help! Reach out to us via email, phone, or visit our office.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-sky-600 dark:text-sky-400 mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">support@tutorly.com</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-sky-600 dark:text-sky-400 mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-sky-600 dark:text-sky-400 mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">
                                    123 Tutorly Street, EduCity, EC 12345
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Send Us a Message
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;