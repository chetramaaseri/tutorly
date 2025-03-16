const About = () => {

    return (
        <>
            <div className="bg-blue-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl">Learn more about our mission, vision, and the team behind our success.</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Our mission is to provide innovative solutions that empower businesses and individuals to achieve their goals.
                        We are committed to delivering high-quality products and services that make a difference in the world.
                    </p>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                                <h3 className="text-xl font-semibold">John Doe</h3>
                                <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        <div className="text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                                <h3 className="text-xl font-semibold">Jane Smith</h3>
                                <p className="text-gray-600">CTO</p>
                        </div>
                        <div className="text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                                <h3 className="text-xl font-semibold">Mike Johnson</h3>
                                <p className="text-gray-600">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

};

export default About;