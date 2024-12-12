import Head from 'next/head';
import Image from 'next/image';
import { skillsData } from '../../utils/data/skill';
import { skillsImage } from '../../utils/data/skill-image';
import Marquee from "react-fast-marquee";

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Roboto', fontWeight: 400 }}>
      <section id="home" className="h-screen bg-white font-sans">
        <>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <div>

            <div className="grid grid-cols-2 gap-4 place-items-center h-screen ...">
              <div>
                <Image
                  src="/profilepic.png" // Path relative to the public folder
                  alt="Description of the image"
                  width={500} // Set width
                  height={500} // Set height
                />
              </div>
              <div>
                <div className="">
                  {/* Introduction */}
                  <h1 className="text-lg text-gray-500">Hello, I'm</h1>
                  <h2 className="text-4xl font-bold mt-2">Muthu Kumar M</h2>
                  <h3 className="text-2xl text-gray-600 mt-1">Full Stack developer</h3>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-6">
                    <a
                      href="/resume.pdf" // Change to your resume's path
                      download
                      className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
                    >
                      Download Resume
                    </a>
                    <a
                      href="#contact" // Change to the appropriate link
                      className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                    >
                      Contact Me
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-8">
                    <a
                      href="https://www.linkedin.com" // Replace with your LinkedIn profile
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0" clipRule="evenodd" /></svg>
                    </a>
                    <a
                      href="mailto:example@example.com" // Replace with your email address
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 11.96q.125 0 .234-.038q.108-.038.214-.093l7.229-4.733q.142-.086.185-.235t-.016-.297q-.038-.193-.252-.28q-.213-.086-.413.035L12 11L4.82 6.32q-.2-.122-.404-.052t-.262.276q-.058.154-.015.313t.184.24l7.229 4.732q.106.055.214.093q.109.037.234.037" /></svg>
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </>
      </section>

      <section id="about" className="">

        <div>
          <div className="container bg-gray-200 mx-auto w-full h-full">
            <div className='flex flex-col items-center justify-center bg-gray-50 px-6 py-16"'>
              {/* Title */}
              <h3 className="text-lg text-gray-500">Get To Know More</h3>
              <h1 className="text-4xl font-bold mt-2">About Me</h1>
            </div>
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }} ></div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  {/* Card */}
                  <div className="mt-8 bg-black text-white rounded-lg p-6 w-80 sm:w-96 shadow-lg">
                    <h2 className="text-yellow-400 text-lg font-semibold">Education</h2>
                    <p className="mt-2 text-white text-xl font-medium">Bachelor of Science</p>
                    <p className="mt-1 text-gray-300">VIT University, Vellore</p>
                    <p className="mt-4 text-gray-500 text-sm text-right">2020 - 2023</p>
                  </div>

                </div>
              </div>


              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <div className="bg-black text-white rounded-lg p-6 w-80 sm:w-96 shadow-lg">
                    <h2 className="text-yellow-400 text-lg font-semibold">Education</h2>
                    <p className="mt-2 text-white text-xl font-medium">Bachelor of Science</p>
                    <p className="mt-1 text-gray-300">VIT University, Vellore</p>
                    <p className="mt-4 text-gray-500 text-sm text-right">2020 - 2023</p>
                  </div>

                </div>
              </div>


              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h2 className="text-yellow-400 text-lg font-semibold">Work Experience</h2>
                  <p className="mt-2 text-white text-xl font-medium">Data Analyst</p>
                  <p className="mt-1 text-gray-300">ABC Company</p>
                  <p className="mt-4 text-gray-500 text-sm text-right">2023 - Present</p>
                </div>
              </div>


              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                </div>
                <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h2 className="text-yellow-400 text-lg font-semibold">Work Experience</h2>
                  <p className="mt-2 text-white text-xl font-medium">Data Analyst</p>
                  <p className="mt-1 text-gray-300">ABC Company</p>
                  <p className="mt-4 text-gray-500 text-sm text-right">2023 - Present</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="about" className="h-screen bg-red-500">
        <h2>About Section</h2>


      </section> */}

      <section id="skills" className="h-screen bg-yellow-500">
        <h2>Skills Section</h2>
        <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
          <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
            </div>
          </div>

          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                Skills
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="w-full my-12">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skillsData.map((skill, id) => (
                <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                  key={id}>
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-8 sm:h-10">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-lg">
                        {skill}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section id="experience" className="h-screen bg-purple-500">
        <h2>experience Section</h2>
        <div>
          <div className="container bg-gray-200 mx-auto w-full h-full">
            <div className='flex flex-col items-center justify-center bg-gray-50 px-6 py-16"'>
              {/* Title */}
              <h3 className="text-lg text-gray-500">Get To Know More</h3>
              <h1 className="text-4xl font-bold mt-2">About Me</h1>
            </div>
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }} ></div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  {/* Card */}
                  <div className="mt-8 bg-black text-white rounded-lg p-6 w-80 sm:w-96 shadow-lg">
                    <h2 className="text-yellow-400 text-lg font-semibold">Education</h2>
                    <p className="mt-2 text-white text-xl font-medium">Bachelor of Science</p>
                    <p className="mt-1 text-gray-300">VIT University, Vellore</p>
                    <p className="mt-4 text-gray-500 text-sm text-right">2020 - 2023</p>
                  </div>

                </div>
              </div>


              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <div className="bg-black text-white rounded-lg p-6 w-80 sm:w-96 shadow-lg">
                    <h2 className="text-yellow-400 text-lg font-semibold">Education</h2>
                    <p className="mt-2 text-white text-xl font-medium">Bachelor of Science</p>
                    <p className="mt-1 text-gray-300">VIT University, Vellore</p>
                    <p className="mt-4 text-gray-500 text-sm text-right">2020 - 2023</p>
                  </div>

                </div>
              </div>


              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h2 className="text-yellow-400 text-lg font-semibold">Work Experience</h2>
                  <p className="mt-2 text-white text-xl font-medium">Data Analyst</p>
                  <p className="mt-1 text-gray-300">ABC Company</p>
                  <p className="mt-4 text-gray-500 text-sm text-right">2023 - Present</p>
                </div>
              </div>


              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                </div>
                <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h2 className="text-yellow-400 text-lg font-semibold">Work Experience</h2>
                  <p className="mt-2 text-white text-xl font-medium">Data Analyst</p>
                  <p className="mt-1 text-gray-300">ABC Company</p>
                  <p className="mt-4 text-gray-500 text-sm text-right">2023 - Present</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="h-screen bg-teal-500">
        <h2>Education Section</h2>

        <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-center text-4xl font-bold text-purple-400 mb-8">
              Educations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side: Illustration */}
              <div className="flex justify-center">
                <img
                  src="/illustration.png"
                  alt="Education Illustration"
                  className="max-w-sm md:max-w-md"
                />
              </div>

              {/* Right Side: Education Details */}
              <div className="space-y-6">
                {/* Single Education Item */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-purple-400 font-bold text-lg">2020 - Present</p>
                  <h3 className="text-xl font-bold mt-2">Bachelor Degree</h3>
                  <p className="text-gray-300">
                    National University of Bangladesh
                  </p>
                </div>
                {/* Single Education Item */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-purple-400 font-bold text-lg">2018 - 2020</p>
                  <h3 className="text-xl font-bold mt-2">
                    Higher Secondary Certificate
                  </h3>
                  <p className="text-gray-300">
                    Noakhali Islamia Kamil Madrasah
                  </p>
                </div>
                {/* Single Education Item */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-purple-400 font-bold text-lg">2008 - 2018</p>
                  <h3 className="text-xl font-bold mt-2">
                    Secondary School Certificate
                  </h3>
                  <p className="text-gray-300">Baitus Saif Islamia Madrasah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="h-screen bg-gray-500">
        <h2>Experience Section</h2>

        <div className='flex min-h-screen items-center justify-center'>

          <div>
            <div className=" bg-white">
              <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-6 py-12">
                  <h2 className="text-center text-4xl font-bold text-green-400 mb-6">
                    CONTACT WITH ME
                  </h2>
                  <p className="text-center text-gray-300 mb-8">
                    If you have any questions or concerns, please don’t hesitate to contact me.
                    I am open to any work opportunities that align with my skills and interests.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <form
                      action="#"
                      method="POST"
                      className="bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                      <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-green-400"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-green-400"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 font-medium">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-green-400"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition"
                      >
                        Send Message
                      </button>
                    </form>

                    {/* Contact Details */}
                    <div className="flex flex-col justify-center items-start bg-gray-800 p-8 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-green-400 text-xl font-bold mr-4">📧</span>
                        <p>abusaid7388@gmail.com</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-green-400 text-xl font-bold mr-4">📞</span>
                        <p>+8801608797655</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-green-400 text-xl font-bold mr-4">📍</span>
                        <p>Middle Badda, Dhaka, Bangladesh - 1212</p>
                      </div>
                      <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-300 hover:text-green-400">
                          GitHub
                        </a>
                        <a href="#" className="text-gray-300 hover:text-green-400">
                          LinkedIn
                        </a>
                        <a href="#" className="text-gray-300 hover:text-green-400">
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </div>
  );
}
