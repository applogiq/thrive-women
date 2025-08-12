'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import CategoryFilter from '@/components/CategoryFilter'
import ProjectGrid from '@/components/ProjectGrid'
import Footer from '@/components/Footer'

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <CategoryFilter onCategoryChange={handleCategoryChange} />
        <ProjectGrid selectedCategory={selectedCategory} />
      </main>
      
      <Footer />
    </div>
  )
}