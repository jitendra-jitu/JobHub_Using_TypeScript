import React from 'react';
import { useJobStore } from '../store/useJobStore';
import { Filter, X } from 'lucide-react';
import Select from './ui/Select';

const jobTypeOptions = [
  { value: '', label: 'All Types' },
  { value: 'Full Stack', label: 'Full Stack Developer' },
  { value: 'Frontend', label: 'Frontend Developer' },
  { value: 'Backend', label: 'Backend Developer' },
  { value: 'Java', label: 'Java Developer' },
  { value: 'MERN', label: 'MERN Stack Developer' },
  { value: 'MEAN', label: 'MEAN Stack Developer' },
  { value: 'DevOps', label: 'DevOps Engineer' },
  { value: 'Data Science', label: 'Data Scientist' },
  { value: 'ML', label: 'ML Engineer' },
  { value: 'Cloud', label: 'Cloud Architect' },
  { value: 'Mobile', label: 'Mobile Developer' },
  { value: 'UI/UX', label: 'UI/UX Designer' },
];

const locationOptions = [
  { value: '', label: 'All Locations' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Kolkata', label: 'Kolkata' },
  { value: 'Noida', label: 'Noida' },
  { value: 'Gurgaon', label: 'Gurgaon' },
  { value: 'Ahmedabad', label: 'Ahmedabad' },
  { value: 'Remote', label: 'Remote' },
];

const experienceOptions = [
  { value: '', label: 'All Experience' },
  { value: '0-2', label: 'Fresher (0-2 years)' },
  { value: '2-5', label: 'Mid Level (2-5 years)' },
  { value: '5-8', label: 'Senior (5-8 years)' },
  { value: '8+', label: 'Lead (8+ years)' },
];

const JobFilters = () => {
  const { setFilters } = useJobStore();
  const [localFilters, setLocalFilters] = React.useState({
    type: '',
    location: '',
    experience: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...localFilters, [name]: value };
    setLocalFilters(newFilters);
    setFilters(newFilters);
  };

  const handleReset = () => {
    setLocalFilters({
      type: '',
      location: '',
      experience: '',
    });
    setFilters({});
  };

  const hasActiveFilters = Object.values(localFilters).some(Boolean);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-slide-in">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            <X className="h-4 w-4" />
            Reset
          </button>
        )}
      </div>
      
      <div className="space-y-6">
        <Select
          id="type"
          name="type"
          label="Job Type"
          value={localFilters.type}
          options={jobTypeOptions}
          onChange={handleFilterChange}
          className="filter-option"
        />

        <Select
          id="location"
          name="location"
          label="Location"
          value={localFilters.location}
          options={locationOptions}
          onChange={handleFilterChange}
          className="filter-option"
        />

        <Select
          id="experience"
          name="experience"
          label="Experience Level"
          value={localFilters.experience}
          options={experienceOptions}
          onChange={handleFilterChange}
          className="filter-option"
        />

        {hasActiveFilters && (
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Active Filters:</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(localFilters).map(([key, value]) => {
                if (!value) return null;
                return (
                  <span
                    key={key}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                             bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200
                             transition-colors"
                    onClick={() => {
                      const newFilters = { ...localFilters, [key]: '' };
                      setLocalFilters(newFilters);
                      setFilters(newFilters);
                    }}
                  >
                    {value}
                    <X className="h-3 w-3" />
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobFilters;