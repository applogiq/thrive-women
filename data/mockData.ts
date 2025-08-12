import { Project, Category, Contributor, ProjectUpdate, Comment } from '@/types'

export const categories: Category[] = [
  { id: 'all', name: 'All projects', icon: '📊', isActive: true },
  { id: 'food', name: 'Food & Agriculture', icon: '🌱', isActive: false },
  { id: 'tech', name: 'Technology', icon: '💻', isActive: false },
  { id: 'arts', name: 'Arts & Crafts', icon: '🎨', isActive: false },
  { id: 'health', name: 'Health & Wellness', icon: '🏥', isActive: false },
  { id: 'education', name: 'Education', icon: '📚', isActive: false },
  { id: 'fashion', name: 'Fashion', icon: '👗', isActive: false },
  { id: 'community', name: 'Community', icon: '🤝', isActive: false },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'A Vision for International Education: Support Sarah in Realizing Her Academic Aspirations',
    description: 'Empowering a dedicated educator to complete her Master\'s degree in International Education Policy.',
    longDescription: `I am Sarah Sharma, a dedicated educator and lifelong learner from India, currently pursuing a Master's degree in International Education Policy at Columbia University. My journey has been one of perseverance, driven by my passion for creating equitable educational opportunities for underserved communities.

Growing up in a rural village in Bihar, I witnessed firsthand the transformative power of education. Despite facing numerous challenges—including limited resources, societal expectations, and financial constraints—I was fortunate to receive a scholarship that allowed me to complete my undergraduate studies in Education. This experience ignited my commitment to ensuring that every child, regardless of their background, has access to quality education.

Project Goal: Your generous contribution will help me complete my Master's degree and embark on meaningful research that addresses educational inequalities. Upon graduation, I plan to return to India and establish a non-profit organization focused on improving educational access in rural communities, particularly for girls and marginalized populations.

Financial Need:
• Tuition and academic fees: $45,000
• Living expenses (housing, food, books): $15,000  
• Research and thesis costs: $3,000
• Emergency fund: $2,000

Why Your Support Matters:
Every dollar you contribute brings me closer to my goal of creating lasting change in the field of education. Your support will not only help me complete my studies but will also enable me to give back to communities that need it most.

Join me on this journey to make education accessible for all. Together, we can break down barriers and create opportunities that will impact generations to come.`,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    category: 'education',
    fundingGoal: 65000,
    currentFunding: 54320,
    backers: 1247,
    daysLeft: 23,
    location: 'New York, USA',
    createdAt: '2024-01-15',
    creator: {
      name: 'Sarah Sharma',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
      bio: 'Educator and advocate for equitable education. Master\'s student at Columbia University focusing on International Education Policy.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '2',
    title: 'Women in Technology Bootcamp',
    description: 'A comprehensive coding bootcamp designed to bridge the gender gap in tech.',
    longDescription: 'A comprehensive coding bootcamp designed to bridge the gender gap in tech.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
    category: 'tech',
    fundingGoal: 50000,
    currentFunding: 32500,
    backers: 278,
    daysLeft: 15,
    location: 'Nigeria',
    createdAt: '2024-02-01',
    creator: {
      name: 'Adaora Okafor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      bio: 'Tech entrepreneur and advocate for women in STEM.'
    }
  }
]

export const contributors: Contributor[] = [
  {
    id: '1',
    name: 'Emily Thompson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
    amount: 2000,
    date: '2024-03-10'
  },
  {
    id: '2',
    name: 'Anonymous',
    avatar: '',
    amount: 500,
    date: '2024-03-09',
    isAnonymous: true
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
    amount: 1500,
    date: '2024-03-08'
  },
  {
    id: '4',
    name: 'Jennifer Kim',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
    amount: 750,
    date: '2024-03-07'
  },
  {
    id: '5',
    name: 'Lisa Chen',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face',
    amount: 1000,
    date: '2024-03-06'
  }
]

export const projectUpdates: ProjectUpdate[] = [
  {
    id: '1',
    title: 'Exciting Progress on Our Journey!',
    content: 'Dear supporters, I am thrilled to share some exciting updates about my academic journey and the progress we\'ve made together. Thanks to your incredible generosity, I\'ve successfully completed my first semester at Columbia University with outstanding grades.',
    date: '2024-03-05',
    author: 'Sarah Sharma',
    likes: 34
  },
  {
    id: '2',
    title: 'Research Milestone: Data Collection Complete',
    content: 'I\'m excited to announce that I\'ve completed the data collection phase of my research on educational accessibility in rural communities. The insights gathered will directly inform my thesis work.',
    date: '2024-02-28',
    author: 'Sarah Sharma',
    likes: 67
  }
]

export const projectComments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'Anonymous',
      avatar: ''
    },
    content: 'Sarah, your dedication to education is truly inspiring. As someone who also came from a rural background, I understand the challenges you\'ve faced. Wishing you all the best!',
    date: '2024-03-08',
    likes: 12
  },
  {
    id: '2',
    author: {
      name: 'Jennifer Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
    },
    content: 'What an amazing journey you\'re on! Education is indeed the key to breaking cycles of poverty and inequality. Proud to support your mission!',
    date: '2024-03-07',
    likes: 8
  }
]