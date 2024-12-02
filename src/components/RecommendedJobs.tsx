import React from 'react';
import { useJobStore } from '../store/useJobStore';
import JobCard from './JobCard';

const RecommendedJobs = () => {
  const { recommendedJobs } = useJobStore();

  if (recommendedJobs.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Recommended for You
      </h2>
      <div className="space-y-4">
        {recommendedJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;