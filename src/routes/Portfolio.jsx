import React, { useState, useEffect, useMemo } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import rhythmixLogo from "../assets/rhythmixLogo.png"
import rhythmix1 from "../assets/rhythmix1.gif";
import rhythmix2 from "../assets/rhythmix2.gif";
import rhythmix3 from "../assets/rhythmix3.gif"
import statefarmLogo from "../assets/statefarmLogo.png"
import Statefarm from "../assets/Statefarm.png";
import Kitchen from "../assets/kitchen.png"
import Livingroom from "../assets/livingroom.png"
import PortfolioWebsite from "../assets/portfolioWebsite.jpg"
import vgdoWebsite from "../assets/VGDOwebsite.png"
import redPandaBash from "../assets/redPandaBash.png"
import battleRPB from "../assets/battleRPB.gif"
import battleRPB2 from "../assets/battleRPB2.gif"
import musicChanges from "../assets/musicChanges.png"
import musicJourney from "../assets/musicJourney.png"
import musicProm from "../assets/musicProm.png"
import snatched from "../assets/snatched.png"
import snatched1 from "../assets/snatched1.gif"
import snatched2 from "../assets/snatched2.gif"
import snatched3 from "../assets/snatched3.gif"
import snatched4 from "../assets/snatched4.gif"
import snatched5 from "../assets/snatched5.gif"
import portfolioThreeJS from "../assets/portfolioThreeJS.gif"
import portfolioThreeJS1 from "../assets/portfolioThreeJS1.gif"
import portfolioThreeJS2 from "../assets/portfolioThreeJS2.gif"
import portfolioThreeJS3 from "../assets/portfolioThreeJS3.gif"


const Portfolio = () => {
    const portfolio = useMemo(() => [
        {
            img: portfolioThreeJS,
            title: "Interactive 3D Portfolio Website",
            desc: "A 3D portfolio website using React, Three.js, and modern front-end technologies, blending web application interactivity with a clean UI.",
            live: "https://vincentnguyen.vercel.app/",
            git: "https://github.com/vincent-huu-nguyen/portfolio_threejs",
            slideshowImages: [portfolioThreeJS1, portfolioThreeJS2, portfolioThreeJS3, portfolioThreeJS],
        },
        {
            img: musicChanges,
            title: "Cents Music Player",
            desc: " A fully functional web-based music player featuring a curated collection of original tracks produced by me. Stream and explore my music directly from your browser.",
            live: "https://vincent-huu-nguyen.github.io/Cents_Music_Player/",
            git: "https://github.com/vincent-huu-nguyen/Cents_Music_Player",
            hoverClass: "hover:bg-gradient-to-t from-[#7382ad] via-[#f7f7f9] to-[#f9f9f9]",
            slideshowImages: [musicJourney, musicProm, musicChanges],
        },
        {
            img: redPandaBash,
            title: "Red Panda Bash",
            desc: " A platformer arcade-esque game built in the Godot Engine. Play as a skilled red panda, using your agility and precision to dodge and throw bamboos with pinpoint accuracy. Challenge other red pandas in fast-paced, action-packed duels. Every match is a test of your speed and strategy.",
            live: "https://cents808.itch.io/red-panda-bash",
            git: "https://github.com/vincent-huu-nguyen/platform_game",
            hoverClass: "hover:bg-gradient-to-t from-[#7382ad] via-[#f7f7f9] to-[#f9f9f9]",
            slideshowImages: [battleRPB, battleRPB2],
        },
        {
            img: snatched,
            title: "Snatched",
            desc: ' An action RPG horror game built in the Unity Engine. Play as a detective searching for his missing daughter in a forgotten town and an eerie orphanage, The Happy Place. Battle twisted enemies and uncover the dark truth buried in its past.',
            live: "https://salslinger.itch.io/snatched",
            git: "https://github.com/Salslinger/CSE-4304-Team-Project",
            hoverClass: "hover:bg-gradient-to-t from-[#7382ad] via-[#f7f7f9] to-[#f9f9f9]",
            slideshowImages: [snatched1, snatched2, snatched3, snatched4, snatched5],
        },
        {
            img: PortfolioWebsite,
            title: "Portfolio Website",
            desc: " My personal portfolio website showcasing projects in software engineering, web and game development.",
            live: "https://vincent-nguyen.vercel.app/",
            git: "https://github.com/vincent-huu-nguyen/vincent_nguyen_website",
            hoverClass: "hover:bg-gradient-to-t from-[#7382ad] via-[#f7f7f9] to-[#f9f9f9]",
            slideshowImages: [PortfolioWebsite],
        },
        {
            img: vgdoWebsite,
            title: "VGDO Website",
            desc: " The official website for the VGDO (Video Game Developers Organization) at UTA. It is a central hub for club updates, event details, jam submissions, and resources for students interested in game development.",
            live: "https://uta-vgdo.github.io/website/",
            git: "https://github.com/uta-vgdo/website",
            hoverClass: "hover:bg-gradient-to-t from-[#7382ad] via-[#f7f7f9] to-[#f9f9f9]",
            slideshowImages: [vgdoWebsite],
        },
        {
            img: rhythmixLogo,
            title: "Rhythmix",
            desc: " A rhythm game built in Unity where players tap keys in sync with the music to score points. Features multiple difficulty levels to test your timing, precision, and rhythm.",
            live: "https://salslinger.itch.io/rhythmix",
            git: "https://github.com/Salslinger/Rhythmix",
            hoverClass: "hover:bg-gradient-to-t from-[#F6CC78] via-[#EC736A] to-[#5C199A]",
            slideshowImages: [rhythmix1, rhythmix2, rhythmix3],
        },
        {
            img: statefarmLogo,
            title: "Statefarm Interactive Hazard Game",
            desc: " An interactive game using the Godot Engine. Created in HackUTA 2023. The game brings awareness to the player about hazards in homes.",
            live: "https://salslinger.itch.io/statefarm-interactive-hazard-game",
            git: "https://github.com/KehniWind/Statefarm-Game",
            hoverClass: "hover:bg-gradient-to-t from-[#f9f9f9] via-red-600 to-[#D33D33]",
            slideshowImages: [Statefarm, Kitchen, Livingroom],
        },
    ], []);


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        let intervalId;
        if (hoveredIndex !== null) {
            intervalId = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % portfolio[hoveredIndex].slideshowImages.length); //allows however many images to rotate
            }, 2000);
        }
        return () => clearInterval(intervalId);
    }, [hoveredIndex, portfolio]);


    return (
        <>
            <NavBar />
            <section className="bg-primary px-5 text-[#181818] pb-56">
                <div className="container mx-auto">
                    <div className="relative flex justify-center items-center m-10 flex-wrap text-left">
                        <h1 className="text-4xl text-[#f7f8f8] font-bold mb-4 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">
                            PORTFOLIO
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolio.map((item, index) => (
                            <a
                                key={index}
                                href={item.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => {
                                    setHoveredIndex(null);
                                    setCurrentImageIndex(0);
                                }}
                            >
                                <div className="rounded-md bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 p-1 hover:p-0.5 duration-200">
                                    <div className={`bg-[#0a0a0a] p-4 rounded-md shadow-md h-[500px] flex flex-col justify-between`}>
                                        <img
                                            src={hoveredIndex === index ? item.slideshowImages[currentImageIndex] : item.img}
                                            alt={item.title}
                                            className="w-full object-contain rounded-md mb-4 max-h-64"
                                        />

                                        <p className="text-lg text-[#f7f8f8] font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                        <div className="mt-4 flex justify-center">
                                            <a
                                                href={item.git}
                                                target="_blank"
                                                className="w-8 h-8 bg-[#f0f0f0] text-white font-semibold rounded-full flex items-center justify-center hover:scale-110 duration-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};


export default Portfolio;



/* ${item.hoverClass} put this in div class above img for color change during hover*/