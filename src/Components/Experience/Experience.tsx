"use client";
import React, { useState } from 'react';

function Experience() {
    const [selectedCompany, setSelectedCompany] = useState(0);

    const experiences = [
        {
            title: "Founding Engineer",
            company: "Sheshya Ai",
            location: "Jul 2024 – Jun 2025",
            description: [
                // Android (Flutter)
                "Android (Flutter)",
                "Developed real-time, cross-platform mobile agents in Flutter, dynamically adapting UIs based on user role (e.g., teacher/student), simulating multi-agent interactions.",
                "Engineered real-time communication pipelines using WebSocket and REST, enabling low-latency, self-updating agent interfaces.",
                "Integrated multi-modal features including speech-to-text (voice input), document understanding (PDF parsing), and location-based context to simulate intelligent assistants.",
                "Designed scalable APIs for intelligent data flows across agents, reducing latency and improving autonomous agent sync capabilities. Used url launcher.",
                // Frontend
                "Frontend",
                "Created intuitive front-end components utilizing the latest capabilities of React.js on over 50 distinct web pages, leading to improved navigation efficiency and better accessibility.",
                "Integrated backend APIs with Flutter frontend, enabling real-time data synchronization and optimized performance across all user roles.",
                // Backend
                "Backend",
                "Designed and optimized 100+ RESTful APIs to enhance communication between server and client applications, achieving a 30% reduction in data response time.",
                "Ensured seamless integration between the backend and frontend, achieving a 20% increase in application efficiency and real-time data synchronization.",
                "Leveraged Docker to containerize 10+ applications, streamlining deployment processes and ensuring 100% consistency across development, testing, and production environments.",
                "Deployed applications using Azure Cloud Services and GCP, scaling resources to handle 50% growth in user traffic while maintaining optimal performance."
            ]
        }
    ];

    return (
        <div className=" mx-auto px-6 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-16 text-gray-200">
            <div className="expi">02. I&apos;ve worked with</div>
            <div className="experience-layout mt-10">
                <div className="w-full sm:w-1/3 md:w-1/4 min-w-[140px] mb-8 sm:mb-0">
                    <ul className="li-desc">
                        {experiences.map((experience, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => setSelectedCompany(index)}
                                    className={`transition-colors duration-200 text-left font-medium pl-4 border-l-4 w-full py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 ${selectedCompany === index
                                            ? 'companies border-teal-400 bg-[#1a222c] shadow-md'
                                            : 'list-items border-transparent hover:bg-[#232b36] hover:border-teal-400'
                                        }`}
                                    aria-pressed={selectedCompany === index}>
                                    {experience.company}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-grow px-0 sm:px-8">
                    {experiences[selectedCompany].title ? (
                        <>
                            <div className="text-2xl font-bold companies mb-2">
                                {experiences[selectedCompany].title}
                            </div>
                            {/* <div className="text-lg font-semibold text-teal-300 mb-1">
                                {experiences[selectedCompany].company}
                            </div> */}
                            <div className="text-md mb-4 description">
                                {experiences[selectedCompany].location}
                            </div>
                            <ul className="li-comp description">
                                {/* Render sections with bolded titles */}
                                {(() => {
                                    const desc = experiences[selectedCompany].description;
                                    const sections = [
                                        { title: "Android (Flutter)", color: "text-blue-300" },
                                        { title: "Frontend", color: "text-pink-300" },
                                        { title: "Backend", color: "text-green-300" }
                                    ];
                                    const items: React.ReactNode[] = [];
                                    desc.forEach((point, idx) => {
                                        const section = sections.find(s => s.title === point);
                                        if (section) {
                                            items.push(
                                                <li key={point} className={`mt-4 mb-2 font-bold ${section.color} text-lg`}>{point}</li>
                                            );
                                        } else {
                                            items.push(
                                                <li key={idx} className="text-base mb-2 ml-4 list-disc list-inside">{point}</li>
                                            );
                                        }
                                    });
                                    return items;
                                })()}
                            </ul>
                        </>
                    ) : (
                        <p className="text-gray-500 text-lg">
                            No experience details available for this company.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
