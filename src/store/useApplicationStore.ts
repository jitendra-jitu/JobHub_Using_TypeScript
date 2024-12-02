import { create } from 'zustand';
import { JobApplication, ApplicationFormData } from '../types/application';

interface ApplicationStore {
  applications: JobApplication[];
  submitApplication: (jobId: string, data: ApplicationFormData) => void;
  getUserApplications: (userId: string) => JobApplication[];
}

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  applications: [],
  submitApplication: (jobId, data) => {
    const newApplication: JobApplication = {
      id: Math.random().toString(36).substr(2, 9),
      jobId,
      userId: 'user-1', // In a real app, this would come from auth
      status: 'pending',
      appliedDate: new Date().toISOString(),
      ...data,
    };

    set(state => ({
      applications: [...state.applications, newApplication],
    }));
  },
  getUserApplications: (userId) => {
    return get().applications.filter(app => app.userId === userId);
  },
}));