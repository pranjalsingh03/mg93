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
            <h2 className="text-3xl font-bold expi">02. I&apos;ve worked with</h2>

            <div className="flex mt-10 space-x-8">
                <div className="w-1/5">
                    <ul className="space-y-4">
                        {experiences.map((experience, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => setSelectedCompany(index)}
                                    className={`text-left text-lg font-medium comp pl-4 border-l-4 ${
                                        selectedCompany === index
                                            ? 'text-teal-400 border-teal-400'
                                            : 'list-items border-transparent'
                                    }`}
                                >
                                    {experience.company}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Job Details */}
                <div className="w-3/4 px-8">
                    {experiences[selectedCompany].title ? (
                        <>
                            <h3 className="comp text-xl font-semibold">
                                {experiences[selectedCompany].title}
                            </h3>
                            <p className="list-items text-lg mt-2">
                                {experiences[selectedCompany].location}
                            </p>

                            <ul className="list-disc list-outside mt-4 space-y-3 px-4">
                                {experiences[selectedCompany].description.map(
                                    (point, index) => (
                                        <li key={index} className="list-items text-lg">
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
