import Head from 'next/head';




export default function HomePage() {
    return (
        <div  style={{ fontFamily: 'Roboto', fontWeight: 400 }}>
            <section id="home" className="h-screen bg-blue-500 font-sans">
                <>
                    <Head>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                            rel="stylesheet"
                        />
                    </Head>
                    <div>
                        <h1 className='text-2xl font-semibold'>Welcome to my Next.js portfolio!</h1>
                        <div className='place-content-center'>
                            <div className='flex justify-center'>
                                <div>
                                     muthu
                                </div>
                                <div>
                                     kumar
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </section>


            <section id="hero" className="h-screen bg-green-500">
                <h2>Hero Section</h2>
            </section>

            <section id="about" className="h-screen bg-red-500">
                <h2>About Section</h2>
            </section>

            <section id="skills" className="h-screen bg-yellow-500">
                <h2>Skills Section</h2>
            </section>

            <section id="projects" className="h-screen bg-purple-500">
                <h2>Projects Section</h2>
            </section>

            <section id="education" className="h-screen bg-teal-500">
                <h2>Education Section</h2>
            </section>

            <section id="experience" className="h-screen bg-gray-500">
                <h2>Experience Section</h2>
                

            </section>
        </div>
    );
}
