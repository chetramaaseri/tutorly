// import { motion } from 'framer-motion';
import { Link } from 'react-router';

type TutorsListProps = {
  tutorType: string;
};
const TutorsList = ({ tutorType }: TutorsListProps) => {

  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 40, scale: 0.99 },
  //   visible: { opacity: 1, y: 0, scale: 1 },
  // };

  return (
    <>
      <section className="relative h-[calc(100vh-70px)] bg-[url('https://res.cloudinary.com/liaison-inc/image/upload/c_fit,f_auto,q_auto,w_1200/services/tutors/backgrounds/math.jpg')] bg-cover bg-center">
        <div className="absolute z-0 inset-0 bg-black opacity-30"></div>
        <div className="z-10 h-full relative max-w-screen-lg mx-auto">
          <div className="h-full flex justify-start items-center">
            <div className="flex flex-col max-w-lg p-6 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 xl:p-8 dark:bg-gray-800 dark:text-white space-y-4">
              <h1 className="mb-3 text-3xl font-bold">Find Tutors near me</h1>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Share a few details and we'll show you the best Korean lessons near you.</p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Skill</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                  </div>
                </div>
                <button className="inline-block w-full cursor-pointer text-white bg-blue-500 hover:bg-amber-400 hover:text-black font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                  Search for Tutors
                </button>
              </form>
              <div className="w-full mx-auto">
                <div className="flex justify-center gap-2">
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <Link to="/all-tutors" className={`cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium ${tutorType === 'all' ? 'bg-amber-300': 'bg-gray-100 dark:bg-gray-600 hover:bg-amber-300'}`}>All Tutors</Link>
                    <Link to={'/all-online-tutors'} className={`cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium ${tutorType === 'online' ? 'bg-amber-300': 'bg-gray-100 dark:bg-gray-600 hover:bg-amber-300'}`}>Online Tutors</Link>
                    <Link to={'/all-home-tutors'} className={`cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium ${tutorType === 'home' ? 'bg-amber-300': 'bg-gray-100 dark:bg-gray-600 hover:bg-amber-300'}`}>Home Tutors</Link>
                    <Link to={'/all-assignment-tutors'} className={`cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium ${tutorType === 'assignment' ? 'bg-amber-300': 'bg-gray-100 dark:bg-gray-600 hover:bg-amber-300'}`}>Assignment Tutors</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default TutorsList;