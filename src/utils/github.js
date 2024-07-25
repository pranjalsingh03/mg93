const axios = require("axios");

const githubToken = process.env.GITHUB_TOKEN;


const fetchGitHubRepos = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/pranjalsingh03/repos', {
      headers: {
        Authorization: `token ${githubToken}`
      }
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};
fetchGitHubRepos();

module.exports ={fetchGitHubRepos}