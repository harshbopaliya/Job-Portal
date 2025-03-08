import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

// Register User
export const registerUser = async (userData) => {
    return axios.post(`${API_URL}register/`, userData);
};

// Login User & Get Token
export const loginUser = async (userData) => {
    return axios.post(`${API_URL}login/`, userData);
};

// Get Jobs
export const fetchJobs = async () => {
    return axios.get(`${API_URL}jobs/`);
};

// Get Single Job
export const fetchJobDetail = async (jobId) => {
    return axios.get(`${API_URL}jobs/${jobId}/`);
};

// Post a Job (Requires Auth)
export const createJob = async (jobData, token) => {
    return axios.post(`${API_URL}jobs/`, jobData, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

// Apply for a Job (Requires Auth)
export const applyForJob = async (jobId, applicationData, token) => {
    return axios.post(`${API_URL}jobs/${jobId}/apply/`, applicationData, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
