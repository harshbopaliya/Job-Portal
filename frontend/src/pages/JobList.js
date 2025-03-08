import React, { useState, useEffect } from "react";
import { fetchJobs } from "../api";
import { Link } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs().then(response => setJobs(response.data));
    }, []);

    return (
        <div className="container mt-4">
      <h2>Job Listings</h2>
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-4 mb-3">
            <div className="card p-3">
              <h3>{job.title}</h3>
              <p>{job.company} - {job.location}</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default JobList;
