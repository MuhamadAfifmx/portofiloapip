'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Game Store Website',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'ToDoList Website',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Perpus Website',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Pair Game',
    image: '/images/projects/4.png',
    tag: ['All', 'Game'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Runner Boy',
    image: '/images/projects/5.png',
    tag: ['All', 'Game'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Indo Game',
    image: '/images/projects/6.png',
    tag: ['All', 'Game'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 7,
    title: 'Social Media Marketing',
    image: '/images/projects/7.jpg',
    tag: ['All', 'Design'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 8,
    title: 'Product Packaging Design',
    image: '/images/projects/8.jpg',
    tag: ['All', 'Design'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 9,
    title: 'Menu Design ',
    image: '/images/projects/9.jpg',
    tag: ['All', 'Design'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 10,
    title: 'Beverage Branding',
    image: '/images/projects/10.jpg',
    tag: ['All', 'Design'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 11,
    title: 'Game Promotion Design',
    image: '/images/projects/11.jpg',
    tag: ['All', 'Design'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 12,
    title: 'Environmental Campaign',
    image: '/images/projects/12.jpg',
    tag: ['All', 'Design'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects' className='px-4 md:px-8 lg:px-16 py-20'>
      <h2 className='text-center text-4xl font-bold text-white mb-12'>
        My Projects
      </h2>

      <div className='text-white flex flex-wrap justify-center items-center gap-3 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Game'
          isSelected={tag === 'Game'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Design'
          isSelected={tag === 'Design'}
        />
      </div>

      <ul ref={ref} className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description=''
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
