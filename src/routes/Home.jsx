// Display components
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import Statefarm from "../assets/Statefarm.png"
import myImage from "../assets/myColoredImage.jpg"

//import "../css/homeStyle.css"

export default function Home() {
    return (
        <>
            <NavBar />
            <section className="bg-primary px-5 text-[#181818] pb-40">
                <div className="flex items-center justify-center flex-col text-center">
                    <h1 className="text-7xl font-bold mb-4 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">
                        VINCENT NGUYEN
                    </h1>
                    <p className="text-2xl font-bold">Software Engineer, Web Developer & Game Designer</p>
                </div>
                <Background />
                <div className="relative inset-0 flex justify-center items-center">
                    <img src={myImage} alt="..." className="w-64 h-auto rounded-full object-cover -mt-20 border-4 border-black" />

                </div>
                <div className="relative">
                    <div className="flex items-center justify-center flex-col text-center pt-7 pb-6 max-w-xl mx-auto">
                        <h1 className="text-3xl font-bold mb-4 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">About Me</h1>
                        <p className="text-1xl mb-1 md:mb-3 font-bold">
                            I am a recent Software Engineering graduate from the University of Texas at Arlington
                            with a strong passion for Web Development, Game Design, and AI. I enjoy building
                            creative and user-focused projects, from interactive web apps to experimental games, and
                            am always eager to learn new technologies that push my skills further.
                        </p>
                        <br></br>
                        <p className="text-1xl mb-1 md:mb-3 font-bold">
                            What drives me most is the ability to turn ideas into real-world experiences that
                            people can engage with. Whether it is crafting clean interfaces or experimenting with
                            machine learning models, I am excited to contribute to impactful software that blends
                            creativity and functionality.
                        </p>
                        <br></br>
                        <p className="text-1xl mb-1 md:mb-3 font-bold">
                            I am open to new opportunities and collaborations with others who share a love 
                            for web development, game design, or AI. Feel free to reach out through the contact form 
                            or connect with me on LinkedIn.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

//export default Home;