"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./project.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const GitHub = process.env.GITHUB_TOKEN;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/pranjalsingh03/repos', {
                    headers: {
                        Authorization: `Bearer ${GitHub}`,
                    }
                });
                const selectedProjects = response.data.filter(project => (
                    project.topics.includes("project")
                ));
                setProjects(selectedProjects);
                setLoading(false);
                console.log(selectedProjects);
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="main-content-area-box">
            <h3 className="gRQVKa" data-sr-id="3">
                Some Things I've Built
            </h3>
            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : (
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project" data-sr-id="4">
                            <div className="gWlhZI">
                                <h4 className="dZTpBf">Featured Project</h4>
                                <h5 className="jRnWTV">
                                    <a href={project.html_url} target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
                                        {project.name}
                                    </a>
                                </h5>
                                <div className="hwxmov">
                                    <p>{project.description}</p>
                                </div>
                                <div className="project-links">
                                    <a href={project.homepage} target="_blank" rel="nofollow noopener noreferrer" className="live-preview">Live Preview</a>
                                    <a href={project.html_url} target="_blank" rel="nofollow noopener noreferrer" className="github-link">Source Code</a>
                                </div>
                                <span className='language'>{project.language}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
