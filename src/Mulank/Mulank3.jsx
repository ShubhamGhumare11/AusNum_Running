import React from "react";
import Chatbot from "../Components/Chatbot";

const Mulank3 = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-serif">
            <Chatbot />

            {/* Hero Section with Video */}
            <div className="flex flex-col md:flex-row items-center mt-8 px-4 md:px-10 lg:px-16 space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-1 mb-4 md:mb-0">
                    <div className="relative w-full max-w-xl mx-auto border-4 border-yellow-600 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <a
                            href="https://www.youtube.com/watch?v=UM6E54VIbPM&list=PL1YttRNjTS7OCEVjsP-2Iy724UqAEUxO-&index=8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                        >
                            <div className="relative w-full h-60 md:h-72 lg:h-80 bg-gray-300 rounded-lg overflow-hidden">
                                <iframe
                                    className="w-full h-full object-cover"
                                    src="https://www.youtube.com/embed/UM6E54VIbPM"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center h-full mt-6"> {/* Flex container for centering */}
                <a href='https://www.youtube.com/@AuspiciousNumerology' target='_blank'>
                    <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center justify-center">
                        <svg
                            className="w-6 h-6 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-4.214A2.021 2.021 0 0016.61 12H7.39a2.021 2.021 0 00-1.985 1.786L4 17h5m6 0V5a3 3 0 10-6 0v12m6 0a2 2 0 01-2 2 2 2 0 01-2-2m4 0H9"
                            ></path>
                        </svg>
                        Subscribe Now
                    </button>
                </a>
            </div>

            <div className="relative flex flex-col items-center px-6 md:px-12 lg:px-20 py-12 bg-white  rounded-lg mt-8 mx-4 md:mx-0">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-600 text-center mb-4">
                    Mulank 3 / Birth No. 3 / Numerology - BEST EVER Description
                </h1>
                <div className="text-gray-700 text-center md:text-left space-y-4">
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        People born on the 3rd of any month are ruled by Jupiter, the planet of wisdom, growth, and expansion. Mulank 3 individuals are natural-born leaders with a strong sense of responsibility and a desire to achieve great things in life. They possess a sharp intellect and are often excellent communicators, making them effective teachers, mentors, and influencers. Their optimism and enthusiasm inspire others, and they tend to thrive in social settings where their charisma can shine.
                    </p>
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        While Mulank 3 people are driven and goal-oriented, they may sometimes struggle with maintaining discipline or focusing on one task at a time. Their ambition can lead them to take on too many responsibilities, resulting in stress or burnout. Learning to balance their desire for success with patience and perseverance is key to their personal and professional growth. With proper focus, they can achieve remarkable accomplishments in life.
                    </p>
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        In relationships, Mulank 3 individuals are warm, generous, and supportive. They value intellectual conversations and often seek partners who can match their curiosity and zest for life. Although they can be authoritative at times, their natural charm and caring nature help them maintain strong, lasting bonds with others.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mulank3;
