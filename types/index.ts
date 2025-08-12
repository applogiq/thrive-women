export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: string
  fundingGoal: number
  currentFunding: number
  backers: number
  daysLeft: number
  location: string
  createdAt: string
  creator: {
    name: string
    avatar: string
    bio: string
  }
  gallery?: string[]
}

export interface Category {
  id: string
  name: string
  icon: string
  isActive: boolean
}

export interface Contributor {
  id: string
  name: string
  avatar: string
  amount: number
  date: string
  isAnonymous?: boolean
}

export interface ProjectUpdate {
  id: string
  title: string
  content: string
  date: string
  author: string
  likes: number
  images?: string[]
}

export interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  date: string
  likes: number
  replies?: Comment[]
}