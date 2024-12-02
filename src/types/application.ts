export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedDate: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
}