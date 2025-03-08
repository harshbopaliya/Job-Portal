import React, { useState, useEffect, useContext } from "react";
import { fetchJobDetail, applyForJob } from "../api";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const JobDetail = () => {
  const { jobId } = useParams();
  const { token } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  useEffect(() => {
    fetchJobDetail(jobId).then((response) => setJob(response.data));
  }, [jobId]);

  const handleApply = async () => {
    if (!token) {
      alert("You need to log in first!");
      return;
    }
    await applyForJob(jobId, { cover_letter: coverLetter }, token);
    alert("Application submitted!");
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>
        {job.company} - {job.location}
      </p>
      <p>{job.description}</p>
      <h3>Apply for this job</h3>
      <textarea
        onChange={(e) => setCoverLetter(e.target.value)}
        placeholder="Write your cover letter"
      ></textarea>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default JobDetail;
