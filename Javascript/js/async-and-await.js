const axios = require("axios");

//this one runs last
const contributorCount = (repositories, contributorsList) => {
    console.log("4 - start function contributorCount")
    let repositoryContributorCount = [];
    //you can also use map here
    for (let i = 0; i < repositories.length; i++) {
        repositoryContributorCount.push({
            name: repositories[i].name,
            numberOfContributors: contributorsList[i].length,
        });
    }
    console.log("4 - finish function contributorCount")
    return repositoryContributorCount;
};

//this one runs third (multiple times)
const getRepoContributors = async (repo) => {
    console.log("3 - start function getRepoContributors")
    const contributorsResponse = await axios.get(repo.contributors_url);
    console.log("3 - finish function getRepoContributors")
    return await contributorsResponse.data;
};

// this one runs second
const getAllRepos = (repos) => {
    console.log("2 - start function getAllRepos")
    const newRepos = repos.slice(0, 5);
    return Promise.all(
        newRepos.map(getRepoContributors))
        .then((contributors) => {
            console.log("2 - finish function getAllRepos")
            return contributorCount(newRepos, contributors);
        });
};

// this one runs first
function listRepoContributorCounts() {
    console.log("1 - start function listRepoContributorCounts")
    axios
        .get("https://api.github.com/orgs/wesabe/repos")
        .then((response) => response.data)
        .then((responseJson) => getAllRepos(responseJson))
        .then((repositoryContributorCounts) => {
            console.log("1 - finish function listRepoContributorCounts")
            return repositoryContributorCounts;
        })
        .catch((error) => {
            return error;
        });
}

console.log(listRepoContributorCounts());

/* Expected output
'1 - start function listRepoContributorCounts'
'2 - start function getAllRepos'
'3 - start function getRepoContributors'
'3 - start function getRepoContributors'
'3 - start function getRepoContributors'
'3 - start function getRepoContributors'
'3 - start function getRepoContributors'
'3 - finish function getRepoContributors'
'3 - finish function getRepoContributors'
'3 - finish function getRepoContributors'
'3 - finish function getRepoContributors'
'3 - finish function getRepoContributors'
'2 - finish function getAllRepos'
'4 - start function contributorCount'
'4 - finish function contributorCount'
'1 - finish function listRepoContributorCounts'
*/