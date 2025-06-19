import React, { useState, useEffect, useMemo } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Background from "../components/Background.jsx";
import Rhythmix from "../assets/Rhythmix.png";
import Songselect from "../assets/songselect.png";
import LevelR from "../assets/levelR.png"
import Statefarm from "../assets/Statefarm.png";
import Kitchen from "../assets/kitchen.png"
import Livingroom from "../assets/livingroom.png"
import PortfolioWebsite from "../assets/portfolioWebsite.jpg"


const Portfolio = () => {
    const portfolio = useMemo(() => [
        {
            img: PortfolioWebsite,
            title: "Portfolio Website",
            desc: " A portfolio website to showcase my projects.",
            live: "https://vincent-nguyen.vercel.app/",
            hoverClass: "hover:bg-gradient-to-t from-[#7382ad] via-[#f7f7f9] to-[#f9f9f9]",
            slideshowImages: [PortfolioWebsite],
        },
        {
            img: Rhythmix,
            title: "Rhythmix",
            desc: " Rhythm Game created using the Unity Engine.",
            live: "https://salslinger.itch.io/rhythmix",
            hoverClass: "hover:bg-gradient-to-t from-[#F6CC78] via-[#EC736A] to-[#5C199A]",
            slideshowImages: [Rhythmix, Songselect, LevelR],
        },
        {
            img: Statefarm,
            title: "Statefarm Interactive Hazard Game",
            desc: " An interactive game using the Godot Engine. The game brings awareness to the player about hazards in homes.",
            live: "https://salslinger.itch.io/statefarm-interactive-hazard-game",
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
            <section className="bg-primary px-5 text-[#181818] pb-10">
                <div className="container mx-auto">
                    <div className="relative flex justify-center items-center m-10 flex-wrap text-left">
                        <h1 className="text-4xl font-bold mb-4 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">
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
                                <div className={`bg-[#F3F4F6] ${item.hoverClass} p-4 rounded-md shadow-md`}>
                                    <img
                                        src={hoveredIndex === index ? item.slideshowImages[currentImageIndex] : item.img}
                                        alt={item.title}
                                        className="w-full object-contain rounded-md mb-4 max-h-64"
                                    />

                                    <p className="text-lg font-semibold">{item.title}</p>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
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



