import type { PersonalInfo, SkillCategory, ExperienceEntry, Education } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Karis Lin',
  title: ['Solutions Engineer', 'Full Stack Developer', 'API Architect', 'Team Leader'],
  email: 'karislin@yahoo.com',
  phone: '214-530-6499',
  linkedin: 'https://linkedin.com/in/linkaris/',
  github: 'https://github.com/karisjlin',
  location: 'Dallas, TX',
  summary:
    'Software engineer with 9+ years of experience building scalable web platforms, API integrations, and eCommerce solutions. I thrive at the intersection of front-end craft and back-end architecture, leading cross-functional teams, shipping reliable code, and turning complex business requirements into elegant technical solutions.',
  extendedSummary: 'Over the course of my career I\'ve worked across the full stack; from React and TypeScript on the front end to Node.js, REST APIs, and serverless deployments on the back end. I\'ve led distributed teams, built eCommerce platforms serving enterprise clients, and contributed to open-source tooling in the fintech space.'
  };

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: ['ReactJS', 'TypeScript', 'JavaScript', 'BackboneJS', 'HTML', 'CSS', 'Less', 'Bootstrap', 'JQuery'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: ['NodeJS', 'Django', 'REST APIs', 'SOAP APIs', 'Serverless', 'AWS Lambda'],
  },
  {
    category: 'Data & DB',
    icon: 'Database',
    skills: ['Postgres', 'JSON'],
  },
  {
    category: 'Tooling & DevOps',
    icon: 'Wrench',
    skills: ['NPM', 'Grunt', 'Postman', 'GitHub', 'Storybook', 'Azure CI/CD'],
  },
  {
    category: 'Testing',
    icon: 'FlaskConical',
    skills: ['Mocha', 'Gherkin', 'Enzyme', 'Chai', 'Sinon'],
  },
  {
    category: 'Platforms',
    icon: 'Cloud',
    skills: ['ServiceNow', 'Azure', 'AWS'],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: 'speedcast',
    company: 'SpeedCast',
    location: 'Houston, TX',
    role: 'Solutions Engineer',
    type: 'Remote',
    startDate: 'Nov 2023',
    endDate: 'Present',
    highlights: [
      'Led a cross-functional team on SpeedCast\'s global eCommerce site initiative, increasing sales rep adoption and customer engagement',
      'Developed REST and SOAP API integrations in ServiceNow to streamline data exchange between internal systems and third-party platforms',
      'Maintained eCommerce platform using Backbone.js and React.js, improving user and sales representative experience',
      'Integrated third-party logistics systems via Node.js, streamlining order fulfillment and reducing manual processing',
      'Delivered automated workflows and dashboards to senior leadership for the company\'s self-startup activation initiative',
      'Built and optimized CI/CD pipelines in Azure, configuring environment variables, function applications, and web services',
    ],
    technologies: ['React', 'Backbone.js', 'Node.js', 'ServiceNow', 'Azure', 'REST APIs', 'SOAP APIs'],
  },
  {
    id: 'finsemble',
    company: 'Finsemble',
    location: 'Charlottesville, VA',
    role: 'Solutions Engineer',
    type: 'Remote',
    startDate: 'Feb 2022',
    endDate: 'Jun 2023',
    highlights: [
      'Delivered modular ReactJS + TypeScript solutions for a client base generating $3.5M in revenue',
      'Implemented end-to-end and unit testing suites with Gherkin, Storybook, Enzyme, Mocha, Chai, and Sinon',
      'Enhanced the open-source FDC3 Workbench application, focusing on app channels and intent raising',
      'Provided technical support and consulting to enterprise clients via email and Zoom',
      'Coordinated with cross-functional teams to deliver high-quality results quickly',
    ],
    technologies: ['ReactJS', 'TypeScript', 'Storybook', 'Mocha', 'Gherkin', 'Enzyme', 'FDC3'],
  },
  {
    id: 'kibo',
    company: 'Kibo Commerce',
    location: 'Dallas, TX',
    role: 'Software Engineer',
    type: 'Hybrid',
    startDate: 'Jun 2016',
    endDate: 'Feb 2022',
    highlights: [
      'Led 4 development teams in the US and overseas on client storefront projects',
      'Used NodeJS and Grunt to streamline customer and item data pipelines for client-side rendering across Dev, UAT, and Production environments',
      'Built REST APIs for internal data manipulation and retrieval, with third-party API integrations',
      'Serverlessly deployed routing solutions to AWS Lambda functions',
      'Implemented front-end code for eCommerce clients using Backbone.js, Less/SCSS, and Django templates',
      'Created custom ReactJS portals for client third-party integrations and order routing',
      'Directed client and partner development trainings for Kibo\'s eCommerce Platform',
      'Onboarded and coached new developers on company best practices and standards',
    ],
    technologies: ['NodeJS', 'ReactJS', 'Backbone.js', 'Django', 'AWS Lambda', 'REST APIs', 'Grunt', 'Less/SCSS'],
  },
];

export const education: Education = {
  degree: 'BS',
  field: 'Software Engineering',
  institution: 'University of Texas at Dallas',
  year: 2016,
  gpa: '3.371',
};
