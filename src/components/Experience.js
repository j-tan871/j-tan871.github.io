import {
  Box,
  Heading,
  Text,
  Stack
} from '@chakra-ui/react';

import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Stripe',
      description: [
        '- Created and deployed an automated SignalFX dashboard infrastructure that uses a novel CSV parsing solution to increase card authorization rate observability for Stripe’s top 25 merchants',
        '- Wrote a shell script to automate the dashboard creation process, including querying merchant data and generating a Terraform plan and pull request, reducing engineer time required by 75% (Terraform, Ruby)',
        '- Implemented and deployed a data pipeline that processes 6 billion+ rows of payment attempt data daily',
        '- Developed and deployed web application to query credentials for charge authentication (gRPC, Java, React)',
        '- Cards Authorization team'],
      src: '/stripe.png'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Amazon',
      description: [
        '- Designed and developed a service backend to manage records excluded from enforcement action (Lambda, API Gateway, DocumentDB, CDK, Guice, Typescript, Java)',
        '- Deployed the service into production using a multi-stage CI/CD pipeline configured by CDK/TypeScript',
        '- Implemented Lambda functions triggered by S3 file upload to automate database record creation ',
        '- Seller Trust, Abuse, and Risk team'], 
      src: '/amazon.jpg'
    }, 
    {
      title: 'Undergraduate Teaching Assistant', 
      company: 'CSCI 0330: Introduction to Computer Systems, CSCI 0200: Data Structures and Algorithms',
      description: [
        '- Host weekly office hours to help students debug projects and labs for 300+ student classes'
      ], 
      src: '/brown.jpg'
    }
  ]
  return (
    <Box
      px={{ base: 2, md: 5, lg: 10 }}
      py={{ base: 2, md: 5, lg: 10 }}>
      <Heading>Experience</Heading>
      {
        experiences.map((experience, idx) => {
          return (
          <ExperienceItem 
            key={idx}
            title={experience.title}
            company={experience.company}
            description={experience.description}
            src={experience.src}
          />)
        })
      }
    </Box>
  )
};

export default Experience;