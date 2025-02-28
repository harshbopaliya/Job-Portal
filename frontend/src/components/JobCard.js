const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="font-bold text-lg">{job.title}</h2>
      <p className="text-gray-700">{job.description}</p>
      <p className="text-gray-500 italic">{job.location}</p>
    </div>
  );
};

export default JobCard;
