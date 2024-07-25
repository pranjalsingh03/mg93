// components/GitHubProjects.js
import { useEffect, useState } from 'react';
import { fetchGitHubRepos } from "../../utils/github";

const GitHubProjects = () => {
  const [repos, setRepos] = useState<{ id: number; name: string; description: string; language: string; stargazers_count: number; forks_count: number; }[]>([]);

  useEffect(() => {
    const getRepos = async () => {
      const data = await fetchGitHubRepos();
      setRepos(data);
    };
    getRepos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map(repo => (
        <div key={repo.id} className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{repo.name}</h3>
          <p>{repo.description}</p>
          <div className="flex justify-between items-center mt-2">
            <span>{repo.language}</span>
            <div className="flex space-x-2">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubProjects;
