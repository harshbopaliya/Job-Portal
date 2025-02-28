import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs") // Replace with your backend API
      .then(response => setJobs(response.data))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.length > 0 ? (
            jobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-gray-500">No jobs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
