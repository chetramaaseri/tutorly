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

  const popularSubjects = [
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      "text": "Node Js"
    },
    
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gray-200">
        <div className="max-w-screen-xl mx-auto px-10">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-2/3 flex items-center">
              <div className="w-full md:w-2/3">
                <div className="space-y-4 py-16">
                  <p className="text-md font-semibold text-sky-600">Keep Learning</p>
                  <h2 className="text-4xl font-bold text-gray-900">
                    Connect With Our Experts
                  </h2>
                  <p className="text-gray-600">
                    Acquire global knowledge and build<br /> your professional skills
                  </p>
                  <a href="#section-top-banners" className="inline-block cursor-pointer text-white bg-blue-500 hover:bg-amber-300 hover:text-black font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Find Courses
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
      <section className="w-full bg-blue-700">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap">
          {
            process.map((item, index) => {
              return (
                <div key={"process" + index} className="w-full sm:w-1/2 md:w-1/4">
                  <div className="w-full flex space-x-3 items-center py-8">
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
      <section className="w-full py-20">
        <div className="max-w-screen-lg mx-auto px-4 flex flex-wrap">
          <div className="relative px-8 py-10 w-full bg-gray-200">
            <div className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] transform bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center">
              <img height={32} width={32} className="rotate-30 invert brightness-200" src="https://cdn-icons-png.flaticon.com/128/7002/7002167.png" alt="" />
            </div>
            <p className="text-md mb-1 font-semibold text-sky-600">Find Your Tutor</p>
            <div className="flex space-x-5">
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Skills" required />
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required />
              <button className="cursor-pointer text-white bg-blue-500 hover:bg-amber-300 hover:text-black font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                Search
              </button>
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
                  <div key={"process" + index} className="w-1/2 md:w-1/4 pe-3 pb-3">
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
          <div className="flex">
            <div className="w-1/2">
              <h3 className="text-center text-2xl font-bold text-gray-900 my-5">Teachers</h3>
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-5">
                  <button className="w-full border-1 border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                      Teachers
                  </button>
                </div>
                <div className="w-1/2 px-5">
                  <button className="w-full border-1 border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                      Online Teachers
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-5">
                  <button className="w-full border-1 border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                      Home Teachers
                  </button>
                </div>
                <div className="w-1/2 px-5">
                  <button className="w-full border-1 border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                    Assignment Help
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-center text-2xl font-bold text-gray-900 my-5">Teaching Jobs</h3>
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-5">
                  <button className="w-full border-1 border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                      Teaching Jobs
                  </button>
                </div>
                <div className="w-1/2 px-5">
                  <button className="w-full border-1 border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                      Online Teaching
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-5">
                  <button className="w-full border-1 border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                      Home Teaching
                  </button>
                </div>
                <div className="w-1/2 px-5">
                  <button className="w-full border-1 border-gray-300 cursor-pointer hover:bg-amber-300 font-medium rounded-sm text-sm px-8 py-3 text-center transition duration-300">
                      Assignment Jobs
                  </button>
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