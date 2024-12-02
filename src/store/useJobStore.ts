import { create } from 'zustand';
import { Job, JobFilters, JobSkill } from '../types/job';
import { getRecommendedJobs } from '../utils/recommendationEngine';

interface JobStore {
  jobs: Job[];
  filters: JobFilters;
  searchTerm: string;
  userSkills: JobSkill[];
  setSearchTerm: (term: string) => void;
  setFilters: (filters: JobFilters) => void;
  setUserSkills: (skills: JobSkill[]) => void;
  filteredJobs: Job[];
  recommendedJobs: Job[];
}

const mockUserSkills: JobSkill[] = [
  { name: 'React', weight: 0.9 },
  { name: 'Node.js', weight: 0.8 },
  { name: 'TypeScript', weight: 0.7 },
  { name: 'Java', weight: 0.6 },
  { name: 'Python', weight: 0.5 },
  { name: 'AWS', weight: 0.7 }
];

const generateJobId = () => Math.random().toString(36).substr(2, 9);

export const useJobStore = create<JobStore>((set, get) => ({
  jobs: [
    {
      id: '1',
      title: 'Senior Java Developer',
      company: 'TCS',
      location: 'Bangalore',
      type: 'Full-time',
      salary: '₹25,00,000 - ₹35,00,000',
      description: 'Looking for an experienced Java developer with Spring Boot expertise for our digital transformation team.',
      requirements: ['8+ years Java experience', 'Spring Boot', 'Microservices'],
      skills: ['Java', 'Spring Boot', 'Microservices', 'SQL'],
      experience: '8+ years',
      postedDate: '2024-03-15',
      logo: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=200&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'MEAN Stack Developer',
      company: 'Infosys',
      location: 'Hyderabad',
      type: 'Full-time',
      salary: '₹18,00,000 - ₹25,00,000',
      description: 'Join our digital transformation team working on cutting-edge projects using MEAN stack technologies.',
      requirements: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
      skills: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
      experience: '5+ years',
      postedDate: '2024-03-14',
      logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'React Native Developer',
      company: 'Wipro',
      location: 'Mumbai',
      type: 'Full-time',
      salary: '₹15,00,000 - ₹22,00,000',
      description: 'Building next-gen mobile applications using React Native for our global clients.',
      requirements: ['React Native', 'JavaScript', 'Mobile Development'],
      skills: ['React Native', 'JavaScript', 'Redux', 'REST APIs'],
      experience: '3+ years',
      postedDate: '2024-03-13',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop'
    },
    {
      id: generateJobId(),
      title: 'DevOps Engineer',
      company: 'Amazon',
      location: 'Bangalore',
      type: 'Full-time',
      salary: '₹28,00,000 - ₹45,00,000',
      description: 'Join AWS team to build and maintain cloud infrastructure and CI/CD pipelines.',
      requirements: ['AWS', 'Kubernetes', 'Docker', 'Jenkins'],
      skills: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform'],
      experience: '5+ years',
      postedDate: '2024-03-15',
      logo: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=200&h=200&fit=crop'
    },
    {
      id: generateJobId(),
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Hyderabad',
      type: 'Full-time',
      salary: '₹22,00,000 - ₹35,00,000',
      description: 'Work on cutting-edge ML models and data analytics projects.',
      requirements: ['Python', 'Machine Learning', 'Deep Learning', 'SQL'],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'AWS'],
      experience: '3-5 years',
      postedDate: '2024-03-14',
      logo: 'https://images.unsplash.com/photo-1642132652075-2b0bec83d9d6?w=200&h=200&fit=crop'
    },
    {
      id: generateJobId(),
      title: 'Frontend Developer',
      company: 'Swiggy',
      location: 'Bangalore',
      type: 'Full-time',
      salary: '₹12,00,000 - ₹18,00,000',
      description: 'Build responsive and performant user interfaces for our food delivery platform.',
      requirements: ['React', 'JavaScript', 'CSS', 'HTML'],
      skills: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
      experience: '2-5 years',
      postedDate: '2024-03-13',
      logo: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=200&fit=crop'
    },
    {
      id: generateJobId(),
      title: 'Backend Developer',
      company: 'Zomato',
      location: 'Delhi',
      type: 'Full-time',
      salary: '₹14,00,000 - ₹20,00,000',
      description: 'Develop scalable backend services for our food delivery platform.',
      requirements: ['Node.js', 'Express.js', 'MongoDB', 'Redis'],
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS'],
      experience: '2-5 years',
      postedDate: '2024-03-12',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop'
    },
    {
      id: generateJobId(),
      title: 'Full Stack Developer',
      company: 'Flipkart',
      location: 'Bangalore',
      type: 'Full-time',
      salary: '₹16,00,000 - ₹25,00,000',
      description: 'Build end-to-end features for our e-commerce platform.',
      requirements: ['React', 'Node.js', 'MongoDB', 'Redis'],
      skills: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
      experience: '3-5 years',
      postedDate: '2024-03-11',
      logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop'
    },
    {
      id: generateJobId(),
      title: 'ML Engineer',
      company: 'Google',
      location: 'Bangalore',
      type: 'Full-time',
      salary: '₹25,00,000 - ₹40,00,000',
      description: 'Work on machine learning models for Google Search.',
      requirements: ['Python', 'TensorFlow', 'PyTorch', 'SQL'],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'GCP'],
      experience: '3-5 years',
      postedDate: '2024-03-10',
      logo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=200&h=200&fit=crop'
    },
    {
      id: generateJobId(),
      title: 'Cloud Architect',
      company: 'Oracle',
      location: 'Hyderabad',
      type: 'Full-time',
      salary: '₹35,00,000 - ₹50,00,000',
      description: 'Design and implement cloud solutions for enterprise clients.',
      requirements: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
      skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
      experience: '8+ years',
      postedDate: '2024-03-09',
      logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop'
    },
    // Adding more jobs...
    {
      id: generateJobId(),
      title: 'UI/UX Designer',
      company: 'PhonePe',
      location: 'Bangalore',
      type: 'Full-time',
      salary: '₹12,00,000 - ₹18,00,000',
      description: 'Design intuitive and beautiful interfaces for our payment platform.',
      requirements: ['Figma', 'Adobe XD', 'UI Design', 'UX Research'],
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      experience: '2-5 years',
      postedDate: '2024-03-08',
      logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop'
    },
    // Continue adding more jobs...
  ],
  filters: {},
  searchTerm: '',
  userSkills: mockUserSkills,
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilters: (filters) => set({ filters }),
  setUserSkills: (skills) => set({ userSkills: skills }),
  get filteredJobs() {
    const { jobs, filters, searchTerm } = get();
    return jobs.filter(job => {
      const searchTermLower = searchTerm.toLowerCase();
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTermLower) ||
        job.company.toLowerCase().includes(searchTermLower) ||
        job.description.toLowerCase().includes(searchTermLower) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTermLower)) ||
        job.location.toLowerCase().includes(searchTermLower);
        
      const matchesType = !filters.type || job.type === filters.type;
      const matchesLocation = !filters.location || job.location === filters.location;
      const matchesExperience = !filters.experience || job.experience === filters.experience;
      
      return matchesSearch && matchesType && matchesLocation && matchesExperience;
    });
  },
  get recommendedJobs() {
    const { jobs, userSkills } = get();
    return getRecommendedJobs(jobs, userSkills);
  },
}));