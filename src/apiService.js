import { api } from "./api";


export const getRepo = async (owner = "", repo = "") => {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    const method = "GET";
    const res = await api(url, method, {});
    return res;
};

export const getRepos = async (owner = "") => {
    const url = `https://api.github.com/users/${owner}/repos`;
    const method = "GET";
    const res = await api(url, method, {});
    return res;
};

export const getRepoCommits = async (owner = "", repo = "") => {
    const url = `https://api.github.com/repos/${owner}/${repo}/stats/commit_activity`;
    const method = "GET";
    const res = await api(url, method, {});
    return res;
};

export const getRepoContributors = async (owner = "", repo = "") => {
    const url = `https://api.github.com/repos/${owner}/${repo}/stats/contributors`;
    const method = "GET";
    const res = await api(url, method, {});
    return res;
};

export const getRepoParticipations = async (owner = "", repo = "") => {
    const url = `https://api.github.com/repos/${owner}/${repo}/stats/participation`;
    const method = "GET";
    const res = await api(url, method, {});
    return res;
};

