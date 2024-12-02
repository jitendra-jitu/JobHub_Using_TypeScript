import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';
import { Job } from '../types/job';
import ApplyModal from './ApplyModal';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [showApplyModal, setShowApplyModal] = React.useState(false);

  return (
    <>
      <div className="job-card bg-white rounded-lg shadow-md p-6 group">
        <div className="flex items-start">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="company-logo w-16 h-16 object-cover"
          />
          <div className="ml-4 flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  {job.company}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 transition-colors">
                {job.type}
              </span>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="location-tag">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="salary-tag">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </div>
              <div className="skill-tag">
                <Briefcase className="h-4 w-4 mr-1" />
                {job.experience}
              </div>
              <div className="skill-tag">
                <Clock className="h-4 w-4 mr-1" />
                {formatDistanceToNow(new Date(job.postedDate), { addSuffix: true })}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-900 transition-colors">
                {job.description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                className="apply-button"
                onClick={() => setShowApplyModal(true)}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showApplyModal && (
        <ApplyModal job={job} onClose={() => setShowApplyModal(false)} />
      )}
    </>
  );
};

export default JobCard;