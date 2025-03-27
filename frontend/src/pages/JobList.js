import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/jobs/");
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch jobs");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="job-list">
      <h2>Job Opportunities</h2>
      <div className="job-cards">
        {jobs.map((job) => (
          <div key={job.id} className="card">
            <div className="card-header">
              <h3>{job.company}</h3>
              <p>{job.location}</p>
            </div>
            <h4>{job.title}</h4>
            <p>{job.description.substring(0, 100)}...</p>
            <Link to={`/job/${job.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
