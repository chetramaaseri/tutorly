const Home = () => {
  const process = [
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/2732/2732589.png",
      "text": "Post Your Requirement"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/10049/10049235.png",
      "text": "Tutor Will Contact You"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/10321/10321602.png",
      "text": "Get Your Work Done"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/2058/2058414.png",
      "text": "Pay Through Secure Channels"
    },
  ];

  const statics = [
    {
      "title" : "50,000+",
      "text" : "Experienced tutors"
    },
    {
      "title" : "100,000+",
      "text" : "5-Star Tutor Reviews"
    },
    {
      "title" : "120+",
      "text" : "Subjects taught"
    },
    {
      "title" : "100+",
      "text" : "Tutor nationalities"
    },
    {
      "title" : "120,000+",
      "text" : "Students Served"
    },
  ];

  const trendingSearches = [
    "Python",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Economics",
    "Computer Science",
  ];

  const popularSubjects = [
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/919/919853.png",
      "text": "Python"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/919/919825.png",
      "text": "JavaScript"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/226/226777.png",
      "text": "Java"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/3135/3135695.png",
      "text": "Mathematics"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/1048/1048943.png",
      "text": "Physics"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/1177/1177568.png",
      "text": "Chemistry"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/1943/1943007.png",
      "text": "Biology"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/3039/3039436.png",
      "text": "English"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/2285/2285730.png",
      "text": "Economics"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/3522/3522780.png",
      "text": "Web Development"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/3262/3262857.png",
      "text": "Data Science"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/2011/2011636.png",
      "text": "Machine Learning"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/1822/1822920.png",
      "text": "Cybersecurity"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
      "text": "Graphic Design"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/3077/3077565.png",
      "text": "Business Studies"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/2830/2830273.png",
      "text": "Artificial Intelligence"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gray-200">
        <div className="max-w-screen-xl mx-auto px-10">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-2/3 flex items-center">
              <div className="w-full md:w-2/3">
                <div className="space-y-8 py-16">
                  <p className="text-md font-semibold text-sky-600 mb-3">4,000+ Expert Tutors in 250+ Subjects</p>
                  <h2 className="text-4xl font-bold text-gray-900">Tutoring That Improves Student Outcomes</h2>
                  <p className="text-gray-600">Unlock your full potential with expert tutoring designed to help you succeed. Our dedicated tutors provide personalized support across 250+ subjects, ensuring you build confidence and master challenging concepts. Whether you're preparing for exams or need help with coursework, we’re here to guide you every step of the way.</p>
                  <a href="#section-top-banners" className="inline-block cursor-pointer text-white bg-blue-500 hover:bg-amber-300 hover:text-black font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Find your tutor
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="w-full pt-10">
                <img src="https://edumall-4437.kxcdn.com/main/wp-content/uploads/sites/2/2021/03/course-hub-hero-image.png" alt="Course Hub" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="w-full bg-blue-900">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap">
          {
            process.map((item, index) => {
              return (
                <div key={"process" + index} className="w-full sm:w-1/2 md:w-1/4">
                  <div className="w-full flex space-x-3 justify-center items-center py-8">
                    <div className="flex-shrink-0">
                      <img className="invert brightness-200" width={48} height={48} src={item.icon} alt="" />
                    </div>
                    <p className="text-white text-md font-medium">{item.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className="w-full py-10 md:py-20">
        <div className="max-w-screen-md mx-auto px-4 flex flex-wrap">
          <div className="relative px-8 py-10 w-full bg-gray-200">
            <div className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] transform bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center">
              <img height={32} width={32} className="rotate-30 invert brightness-200" src="https://cdn-icons-png.flaticon.com/128/7002/7002167.png" alt="" />
            </div>
            <p className="text-md mb-1 font-semibold text-sky-600">Find Your Tutor</p>
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Skills" required />
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required />
              <button className="cursor-pointer text-white bg-blue-500 hover:bg-amber-300 hover:text-black font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                Search
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-10 mx-auto">
              <div className="flex justify-center gap-2">
                <p className="text-md font-semibold">Trending: </p>
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {
                    trendingSearches.map((item, index) => {
                      return (
                        <button key={"trendingSearches"+index} className="bg-gray-100 hover:bg-amber-300 cursor-pointer transform duration-300 ease-in-out rounded-full px-3 py-1 text-xs font-medium">{item}</button>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto px-4 flex flex-wrap gap-4 sm:gap-0">
          {
            statics.map((item, index) => {
              return (
                <div key={"statics" + index} className="w-full md:w-1/5">
                  <div className="flex flex-col items-center justify-center">
                    <h5 className="text-2xl font-bold">{item.title}</h5>
                    <p className="text-md font-medium">{item.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className="relative w-full my-10 bg-fixed bg-cover bg-bottom" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/education-day-assortment-with-copy-space_23-2148721275.jpg')" }} >
        <div className="absolute z-0 inset-0 bg-black opacity-70"></div>
        <div className="z-10 relative max-w-screen-xl mx-auto px-4 bg-opacity-80 py-10 rounded-lg">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h3 className="text-white text-center text-2xl font-bold my-5">
                Teachers
              </h3>
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-5">
                  <button className="w-full text-white hover:text-black hover:border-amber-300 border border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Teachers
                  </button>
                </div>
                <div className="w-1/2 px-5">
                  <button className="w-full text-white hover:text-black hover:border-amber-300 border border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Online Teachers
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-5">
                  <button className="w-full text-white hover:text-black hover:border-amber-300 border border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Home Teachers
                  </button>
                </div>
                <div className="w-1/2 px-5">
                  <button className="w-full text-white hover:text-black hover:border-amber-300 border border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Assignment Help
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-white text-center text-2xl font-bold my-5">
                Teaching Jobs
              </h3>
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-5">
                  <button className="text-white hover:text-black hover:border-amber-300 w-full border border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Teaching Jobs
                  </button>
                </div>
                <div className="w-1/2 px-5">
                  <button className="text-white hover:text-black hover:border-amber-300 w-full border border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Online Teaching
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-5">
                  <button className="text-white hover:text-black hover:border-amber-300 w-full border border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Home Teaching
                  </button>
                </div>
                <div className="w-1/2 px-5">
                  <button className="text-white hover:text-black hover:border-amber-300 w-full border border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Assignment Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="max-w-screen-xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 my-4">Popular Subjets</h3>
          <div className="flex flex-wrap items-center justify-start">
            {
              popularSubjects.map((item, index) => {
                return (
                  <div key={"process" + index} className="w-full sm:w-1/2 md:w-1/4 pe-3 pb-3">
                    <div className="flex gap-4 items-center p-3 bg-gray-200 rounded-md">
                      <div className="flex-shrink-0">
                        <img className="" width={32} height={32} src={item.icon} alt="" />
                      </div>
                      <p className="text-md font-medium">{item.text}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="w-full my-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap gap-10 sm:gap-0">
            <div className="w-full md:w-1/2 px-3">
              <div className="bg-amber-200 rounded-md p-5">
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-3/4 flex items-center">
                    <div className="w-full">
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-gray-900">Lorem ipsum dolor sit.</h4>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id placeat laborum, quibusdam dolor hic?</p>
                        <a href="#section-top-banners" className="inline-block cursor-pointer text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                          Find Courses
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/4">
                    <div className="w-full pt-10">
                      <img src="https://edumall-4437.kxcdn.com/main/wp-content/uploads/sites/2/2020/08/banner-image-group-teachers.png" alt="Course Hub" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="bg-sky-100 rounded-md p-5">
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-3/4 flex items-center">
                    <div className="w-full">
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-gray-900">Lorem ipsum dolor sit amet</h4>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id placeat laborum, quibusdam dolor hic?</p>
                        <a href="#section-top-banners" className="inline-block cursor-pointer text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                          Find Courses
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/4">
                    <div className="w-full pt-10">
                      <img src="http://edumall-4437.kxcdn.com/main/wp-content/uploads/sites/2/2020/08/banner-image-laptop.png" alt="Course Hub" className="w-full h-auto" />
                    </div>
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

export default Home;