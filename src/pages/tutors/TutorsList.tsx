// import { motion } from 'framer-motion';
import { Link } from 'react-router';

type TutorsListProps = {
  tutorType: string;
};
const TutorsList = ({ tutorType }: TutorsListProps) => {

  const tutors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const locations = [ "Online", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]

  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 40, scale: 0.99 },
  //   visible: { opacity: 1, y: 0, scale: 1 },
  // };

  return (
    <>
      <section className="relative md:h-[calc(100vh-70px)] bg-[url('https://res.cloudinary.com/liaison-inc/image/upload/c_fit,f_auto,q_auto,w_1200/services/tutors/backgrounds/math.jpg')] bg-cover bg-center">
        <div className="absolute z-0 inset-0 bg-black opacity-30"></div>
        <div className="z-10 md:h-full relative p-5 max-w-screen-lg mx-auto">
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
                    <Link to="/all-tutors" className={`dark:hover:text-black cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium ${tutorType === 'all' ? 'bg-amber-300 dark:text-black' : 'bg-gray-100 dark:bg-gray-600 hover:bg-amber-300'}`}>All Tutors</Link>
                    <Link to={'/all-online-tutors'} className={`dark:hover:text-black cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium ${tutorType === 'online' ? 'bg-amber-300 dark:text-black' : 'bg-gray-100 dark:bg-gray-600 hover:bg-amber-300'}`}>Online Tutors</Link>
                    <Link to={'/all-home-tutors'} className={`dark:hover:text-black cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium ${tutorType === 'home' ? 'bg-amber-300 dark:text-black' : 'bg-gray-100 dark:bg-gray-600 hover:bg-amber-300'}`}>Home Tutors</Link>
                    <Link to={'/all-assignment-tutors'} className={`dark:hover:text-black cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium ${tutorType === 'assignment' ? 'bg-amber-300 dark:text-black' : 'bg-gray-100 dark:bg-gray-600 hover:bg-amber-300'}`}>Assignment Tutors</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-10">
            <div className="w-full md:w-4/5">
              <div className="flex flex-col">
                {
                  tutors.map((index) => (
                    <Link key={"tutor"+index} to={"/"} className="flex flex-col space-y-2 px-3 py-5 border-b border-gray-300 hover:bg-neutral-50 dark:hover:bg-gray-800 transition duration-100">
                      <h2 className='font-medium text-2xl'>Cheeku Aaseri</h2>
                      <div className="flex gap-2 flex-wrap">
                        <button className="bg-gray-100 dark:bg-gray-600 hover:bg-amber-300 dark:hover:text-black cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium">Math</button>
                        <button className="bg-gray-100 dark:bg-gray-600 hover:bg-amber-300 dark:hover:text-black cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium">Math</button>
                        <button className="bg-gray-100 dark:bg-gray-600 hover:bg-amber-300 dark:hover:text-black cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium">Math</button>
                      </div>
                      <h3 className='text-xl'>Web Developer | WEB3 NodeJs React PHP JavaScript Java</h3>
                      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum accusantium illum vel consequuntur magnam dicta natus, magni aliquid, alias voluptatibus quo doloremque? Earum suscipit quos porro architecto accusantium rem quae aperiam nostrum nemo vitae repudiandae ratione soluta dicta quaerat eveniet expedita eos explicabo, eligendi ipsam modi. Quos, rem quisquam.</p>
                      <div className="flex items-center justify-start my-2 gap-4">
                        <div className="flex items-center justify-start gap-1">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                          </svg>
                          <span className="text-sm">15 miles away</span>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                          </svg>
                          <span className="text-sm">15-30/Month</span>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className="w-full md:w-1/5">
              <div className="flex flex-wrap md:flex-col space-y-2">
                {
                  locations.map((location,index) => (
                    <a key={"location"+index} className='w-1/2 md:w-1/3 lg:w-full text-blue-600 dark:text-blue-500 cursor-pointer hover:underline hover:underline-offset-5 hover:text-blue-900 hover: hover:dark:text-white transition duration-300 ease-in-out' href="">{location}</a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default TutorsList;