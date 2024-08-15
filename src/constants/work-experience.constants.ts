import { Company } from 'src/models/work-experience.models';

export const companies: Company[] = [
  {
    name: 'Hach',
    icon: 'https://seeklogo.com/images/H/hach-logo-4DF8A279B5-seeklogo.com.png',
    designations: [
      {
        name: 'Software Engineer I',
        startDate: new Date('2023-10-03'),
        endDate: new Date(),
      },
    ],
    role: '.Net & Angular developer',
    images: 'https://2benews.com/wp-content/uploads/2021/01/N200164_0402.jpg',
    joiningDate: new Date('2023-10-01'),
    leavingDate: new Date(),
    workSampleLink: 'https://example.com/work-sample/hach',
    AboutEmployment: 'https://example.com/projects/hach',
    AboutCompany:
      'https://www.hach.com/about-us?origin=footer&c1=about-us&c2=about-hach&clickedon=about-hach',
    description:
      'As a Full Stack Developer, I develop, enhance, and maintain applications within the Claros Water Intelligence System, including the Mobile Sensor Management (MSM) and Remote Service Dashboard (RSD). My responsibilities include designing intuitive interfaces, implementing new features, managing device and data functionalities, and ensuring seamless integration and robust security. I collaborate with cross-functional teams to deliver high-quality solutions, enabling remote monitoring, process optimization, and regulatory compliance, significantly reducing operational inefficiencies and costs.',
    location: 'Bangalore',
    projects: [
      {
        title: 'Claros-Mobile Sensor Management',
        startDate: new Date('2023-10-03'),
        endDate: new Date(),
        description:
          'The MSM (Mobile Sensor Management) application Overview, part of the Claros Water Intelligence System, enables remote sensor data management and operation monitoring. As a full stack developer, I integrate frontend and backend components to optimize performance and enhance user experience, particularly through the Remote Service Dashboard (RSD), empowering technicians to monitor instrument health efficiently.',
      },
      {
        title: 'Claros-Remote Service Dashboard',
        startDate: new Date('2023-10-03'),
        endDate: new Date(),
        description:
          'The Remote Service Dashboard (RSD) within the MSM (Mobile Sensor Management) application Overview facilitates real-time monitoring and management of sensor instruments. As a full stack developer, I ensure seamless integration and optimization of RSD features, enhancing its usability for technicians to efficiently oversee instrument health and streamline operational workflows within the Claros Water Intelligence System.',
      },
    ],
  },
  {
    name: 'Infosys Limited',
    icon: 'https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-png.png',
    designations: [
      {
        name: 'Senior Associate',
        startDate: new Date('2023-07-01'),
        endDate: new Date('2023-09-15'),
      },
      {
        name: 'System Engineer',
        startDate: new Date('2021-05-17'),
        endDate: new Date('2023-06-30'),
      },
    ],
    role: 'Full Stack developer',
    images:
      'https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/images/mysore-global-education-center01.jpg',
    joiningDate: new Date('2021-05-21'),
    leavingDate: new Date('2023-09-15'),
    workSampleLink: 'https://example.com/work-sample/infosys',
    AboutEmployment: 'https://example.com/projects/infosys',
    AboutCompany: 'https://www.infosys.com/about/history.html',
    description:
      'As a Systems Engineer at Infosys Limited, I have contributed significantly to various projects and additional experiences. One notable accomplishment is my involvement in developing a dashboard that reduced manual efforts by 70%',
    location: 'Mysore',
    projects: [
      {
        title: 'Dashboard Development',
        startDate: new Date('2022-12-26'),
        endDate: new Date('2023-09-14'),
        description:
          'In my dashboard development work, I designed and developed a comprehensive team management system that allowed for efficient and streamlined collaboration among team members. This included displaying team info along with sub-teams and their work, as well as automating internal functionalities to remove manual work. With detailed information about Microsoft team members, the dashboard enabled easy access to critical data and provided insights into performance metrics, training progress, and session allocation. This resulted in increased productivity, enhanced communication, and improved decision-making for the department.',
      },
      {
        title: 'Evalua8r',
        startDate: new Date('2021-12-01'),
        endDate: new Date('2022-09-16'),
        description:
          'In the evaluation tool development project, I worked on creating an automated evaluation system for the data access layer (DAL) and web API layer implemented by trainees. The tool enabled us to evaluate the code quality, performance, and compliance with coding standards. It also generated detailed reports highlighting the areas for improvement, which helped us to improve the trainees coding skills and overall development process. The tool proved to be highly efficient in reducing manual effort and improving the overall quality of the code.',
      },
    ],
  },
];
