export interface Company {
  name: string;
  icon: string;
  designations: Designation[];
  role: string;
  images: string;
  joiningDate: Date;
  leavingDate?: Date;
  workSampleLink: string;
  AboutEmployment: string;
  AboutCompany: string;
  projects?: Project[];
  location: string;
  description: string;
}

export interface Designation {
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  startDate: Date;
  endDate: Date;
}
