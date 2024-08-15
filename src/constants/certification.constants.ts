import { certificate } from 'src/models/certification.model';

export const certifications: certificate[] = [
  {
    certificateName: 'Azure Fundamentals AZ-900',
    provider: 'Microsoft',
    link: 'https://drive.google.com/file/d/1MfZWQaSuavzGCA_ZDrLbimPgfNHvyMsD/view?usp=sharing',
    image: 'Az900.png',
    date: new Date('2023-03-25'),
  },
  {
    certificateName: 'Azure Developer Associate AZ-204',
    provider: 'Microsoft',
    link: 'https://drive.google.com/file/d/1wfMnhg6RMsiSDdmKq0B9uTWfHi_pCVQq/view?usp=sharing',
    image: 'Az204.png',
    date: new Date('2023-05-13'),
  },
  {
    certificateName: 'Best Employee Award',
    provider: 'Infosys',
    link: 'https://drive.google.com/file/d/1rzr8XpqCWbmopC8MFYI0dI3ETs8M2_Jz/view?usp=sharing',
    image: 'bestEmployee.png',
    date: new Date('2023-05-27'),
  },
];
