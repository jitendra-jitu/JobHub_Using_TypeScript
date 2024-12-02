import { Job, JobSkill } from '../types/job';

export const calculateJobMatch = (userSkills: JobSkill[], job: Job): number => {
  let matchScore = 0;
  const jobSkills = new Set(job.skills.map(skill => skill.toLowerCase()));
  
  userSkills.forEach(userSkill => {
    if (jobSkills.has(userSkill.name.toLowerCase())) {
      matchScore += userSkill.weight;
    }
  });

  return Math.min(100, Math.round((matchScore / userSkills.length) * 100));
};

export const getRecommendedJobs = (jobs: Job[], userSkills: JobSkill[]): Job[] => {
  return jobs
    .map(job => ({
      ...job,
      matchScore: calculateJobMatch(userSkills, job)
    }))
    .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
    .slice(0, 5);
};