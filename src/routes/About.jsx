import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import Bubbles from "../components/Bubbles.jsx"


export default function About() {
    return (
        <>
            <NavBar />
            <section className="bg-primary px-5 text-[#181818]">
                <div className="relative flex justify-center items-center m-10 flex-wrap text-left">
                    <h1 className="text-4xl font-bold mb-4 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">
                        ABOUT ME
                    </h1>
                    <div className="strong:">
                        <p>I am a highly motivated and aspiring student at the <strong>University of Texas at Arlington</strong>.
                            I am seeking to learn, improve, and experience the work-life and coding aspects in
                            the field of <strong>Software Engineering</strong>, <strong>Web Development</strong>,
                            and <strong>Game Design</strong>. I am passionate about creating projects and I get creative
                            when coming up with new ideas. What drives my interest in coding is that I am able to share
                            creations with everyone around the world and deliver them a great user experience.
                        </p>
                    </div>
                </div>
                <Background />
            </section>
            <Footer />
        </>
    );
}