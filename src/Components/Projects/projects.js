import React from 'react';
import "./project.css";

const GITHUB_USERNAME = 'pranjalsingh03';

// Fetched at build time on the server. The public repo list needs no auth,
// so no token is ever shipped to the browser.
async function getProjects() {
    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            { headers: { Accept: 'application/vnd.github+json' } }
        );

        if (!response.ok) {
            console.error(`GitHub API responded with ${response.status}`);
            return [];
        }

        const repos = await response.json();
        return repos.filter(repo => Array.isArray(repo.topics) && repo.topics.includes('project'));
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
}

const Projects = async () => {
    const projects = await getProjects();

    return (
        <div className="main-content-area-box">
            <h3 className="gRQVKa" data-sr-id="3">
                Some Things I&apos;ve Built
            </h3>
            {projects.length > 0 ? (
                <div className="project-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project" data-sr-id="4">
                            <div className="gWlhZI">
                                <h4 className="dZTpBf">Featured Project</h4>
                                <h5 className="jRnWTV">
                                    <a href={project.html_url} target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
                                        {project.name}
                                    </a>
                                </h5>
                                <div className="hwxmov">
                                    <p>{project.description || "No description available."}</p>
                                </div>
                                <div className="project-links">
                                    {project.homepage ? (
                                        <a href={project.homepage} target="_blank" rel="nofollow noopener noreferrer" className="live-preview">Live Preview</a>
                                    ) : (
                                        <span className="no-preview">No live preview</span>
                                    )}
                                    <a href={project.html_url} target="_blank" rel="nofollow noopener noreferrer" className="github-link">Source Code</a>
                                </div>
                                <span className='language'>{project.language}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-projects">No projects found.</div>
            )}
        </div>
    );
};

export default Projects;
