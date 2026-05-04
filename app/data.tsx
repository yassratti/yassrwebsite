import { HugeiconsIcon } from '@hugeicons/react'
import { RiNextjsLine, RiNodejsLine } from 'react-icons/ri'
import { SiPostgresql } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa6'

import {
  ReactIcon,
  NextIcon,
  TypescriptIcon,
  TailwindcssFreeIcons,
} from '@hugeicons/core-free-icons'
import { ReactNode } from 'react'

type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
  year: number
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Education = {
  name: string
  degree: string
  start: string
  end: string
  link: string
  id: string
}

type Skill = {
  icon: ReactNode
  name: string
}

export const PROJECTS: Project[] = [
  {
    name: 'SwaperFarm',
    description: 'Face swap videos with AI in seconds',
    link: 'https://swaperfarm.com',
    image: '/swaperfarm.png',
    id: 'swaperfarm',
    year: 2026,
  },
  {
    name: 'RunClaw',
    description:
      'Run your openclaw bot in seconds - massive updates coming soon',
    link: 'https://runclaw.sh',
    image: '/runclaw.png',
    id: 'runclaw',
    year: 2026,
  },
  {
    name: 'GitStat',
    description: 'A GitHub repository analytics platform.',
    link: 'https://gitstat.dev/',
    image: '/gitstat.png',
    id: 'gitstst',
    year: 2026,
  },
  {
    name: 'DropEbook',
    description: 'a cms that allows users to create and sell ebooks',
    link: '',
    image: '',
    id: 'dropEbook',
    year: 2025,
  },
  {
    name: 'Call',
    description: 'An open source video conferencing platfrom',
    link: 'https://github.com/joincalldotco/Call',
    image: '/joincall.png',
    id: 'joincall',
    year: 2025,
  },
  {
    name: 'SnapMail',
    description: 'a simple email capture widget',
    link: 'https://www.youtube.com/watch?v=yOn2eTdZ62g',
    image: '/snapmail.png',
    id: 'snapmail',
    year: 2024,
  },
  {
    name: 'crafy link',
    description: 'a better link in bio for amazon affiliates',
    link: '',
    image: '',
    id: 'crafylink',
    year: 2024,
  },
  {
    name: 'Philovers',
    description:
      'a platform to watch movies with friends and get mood-based recommendations',
    link: '',
    image: '',
    id: 'philovers',
    year: 2023,
  },
  {
    name: 'Studster',
    description: 'a tool to help high school students with their studies',
    link: '',
    image: '',
    id: 'studster',
    year: 2023,
  },
  {
    name: 'fastracerc',
    description: 'ecommerce dropshipping store where i was selling car stuff',
    link: '',
    image: '',
    id: 'fastracerc',
    year: 2022,
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/yassratti',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/yassratti',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yassr-atti-a14204369/',
  },
]

export const EDUCATION: Education[] = [
  {
    name: 'I.E.S Aurantia',
    degree: 'High School',
    start: '2021',
    end: '2025',
    link: 'https://sites.google.com/g.educaand.es/ies-aurantia?usp=sharing',
    id: 'work1',
  },
  {
    name: 'I.E.S Alhadra',
    degree: 'High school senior year',
    start: '2025',
    end: '2026',
    link: 'https://blogsaverroes.juntadeandalucia.es/iesalhadra/',
    id: 'work1',
  },
]

export const SKILLS: Skill[] = [
  {
    name: 'React',
    icon: <HugeiconsIcon icon={ReactIcon} size={24} />,
  },
  {
    name: 'Next.js',
    icon: <RiNextjsLine size={24} />,
  },
  {
    name: 'TypeScript',
    icon: <HugeiconsIcon icon={TypescriptIcon} size={24} />,
  },
  {
    name: 'Tailwind CSS',
    icon: <HugeiconsIcon icon={TailwindcssFreeIcons} size={24} />,
  },
  {
    name: 'NodeJs',
    icon: <RiNodejsLine size={24} />,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql size={24} />,
  },
  {
    name: 'Git ',
    icon: <FaGitAlt size={24} />,
  },
]

export const EMAIL = 'attiyassr@gmail.com'
