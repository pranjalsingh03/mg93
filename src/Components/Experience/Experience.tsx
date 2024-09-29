import React, { useState } from 'react';

function Experience() {
    const [selectedCompany, setSelectedCompany] = useState(0);

    const experiences = [
        {
            title: "Backend Developer Intern",
            company: "Sheshya",
            location: "July 2024 - Continue..",
            description: [
                "Built and maintained the backend architecture using the MERN stack, optimized for performance and scalability, and collaborated closely with the front-end team for seamless integration.",
                "Developed RESTful APIs, managed MongoDB operations, and containerized backend services using Docker for efficient deployment and scalability.",
                "Deployed and managed the backend on Azure Cloud, ensuring security through JWT authentication and implemented CI/CD pipelines for continuous integration and delivery."
            ]
        }
    ];

    return (
        <div className="container mx-auto p-16 py-12 text-gray-200">
            <div className="expi">02. I&apos;ve worked with</div>
            <div className="flex mt-10">
                
                <div className="w-1/4">
                    <ul className="li-desc">
                        {experiences.map((experience, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => setSelectedCompany(index)}
                                    className={`text-left font-medium pl-4 border-l-4 ${selectedCompany === index
                                            ? 'companies border-teal-400'
                                            : 'list-items border-transparent'
                                        }`}
                                    aria-pressed={selectedCompany === index}>
                                    {experience.company}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-grow px-8">
                    {experiences[selectedCompany].title ? (
                        <>
                            <div className="text-xl font-semibold companies">
                                {experiences[selectedCompany].title}
                            </div>
                            <div className="text-lg mt-2 description">
                                {experiences[selectedCompany].location}
                            </div>

                            <ul className="li-comp description">
                                {experiences[selectedCompany].description.map(
                                    (point, index) => (
                                        <li key={index} className="text-lg">
                                            {point}
                                        </li>
                                    )
                                )}
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
