import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs/${id}/`);
        setJob(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch job details");
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Job Type:</strong> {job.job_type}</p>
      <p>{job.description}</p>
      <button className="btn">Apply Now</button>
    </div>
  );
};

export default JobDetail;
