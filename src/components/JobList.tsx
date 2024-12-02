import React from 'react';
import { useJobStore } from '../store/useJobStore';
import JobCard from './JobCard';
import JobFilters from './JobFilters';
import RecommendedJobs from './RecommendedJobs';

const JobList = () => {
  const { filteredJobs } = useJobStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <aside className="w-64 flex-shrink-0">
          <JobFilters />
        </aside>
        
        <main className="flex-1">
          <RecommendedJobs />
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            All Jobs
          </h2>
          
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
              </div>
            ) : (
              filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobList;