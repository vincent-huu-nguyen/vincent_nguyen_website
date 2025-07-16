// Display components
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
//import Statefarm from "../assets/Statefarm.png"
import myImage from "../assets/myColoredImage.jpg"
import myResume from "../assets/Vincent_Nguyen_ResumeW.pdf"

//import "../css/homeStyle.css"

export default function Home() {
    return (
        <>
            <NavBar />
            <section className="bg-primary px-5 text-[#f7f8f8] pb-40">
                <div className="flex items-center justify-center flex-col text-center">
                    <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text hover:scale-110 duration-200">
                        VINCENT NGUYEN
                    </h1>
                    <p className="text-2xl font-bold">Software Engineer, Web Developer & Game Designer</p>
                    <div className="flex flex-wrap items-center text-center justify-center mt-2 gap-2">
                        <a href="https://www.linkedin.com/in/vincent-huu-nguyen/"
                            target="_blank"
                            className="bg-[#f0f0f0] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:scale-110 duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a
                            href="https://github.com/vincent-huu-nguyen"
                            target="_blank"
                            className="bg-[#f0f0f0] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:scale-110 duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a
                            href={myResume}
                            target="_blank"
                            className="bg-[#f0f0f0] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:scale-110 duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z" /></svg>
                        </a>
                    </div>
                    <Background />
                    <div className="relative inset-0 flex justify-center items-center">
                        <img src={myImage} alt="..." className="w-64 h-auto rounded-full object-cover -mt-20 border-4 border-black" />

                    </div>
                    <div className="relative">
                        <div className="flex items-center justify-center flex-col text-center pt-7 max-w-xl mx-auto">
                            <h1 className="text-3xl font-bold mb-4 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">About Me</h1>
                            <p className="text-lg mb-1 md:mb-3 font-bold">
                                I am a recent Software Engineering graduate from the University of Texas at Arlington
                                with a strong passion for Web Development, Game Design, and AI. I enjoy building
                                creative and user-focused projects, from interactive web apps to experimental games, and
                                am always eager to learn new technologies that push my skills further.
                            </p>
                            <br></br>
                            <p className="text-lg mb-1 md:mb-3 font-bold">
                                What drives me most is the ability to turn ideas into real-world experiences that
                                people can engage with. Whether it is crafting clean interfaces or experimenting with
                                machine learning models, I am excited to contribute to impactful software that blends
                                creativity and functionality.
                            </p>
                            <br></br>
                            <p className="text-lg mb-1 md:mb-3 font-bold">
                                I am open to new opportunities and collaborations. Feel free to reach out through the contact form
                                or connect with me on LinkedIn.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

//export default Home;