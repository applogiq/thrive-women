'use client'

import { useState } from 'react'
import { categories as initialCategories } from '@/data/mockData'
import { Category } from '@/types'

interface CategoryFilterProps {
  onCategoryChange: (categoryId: string) => void
}

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [categories, setCategories] = useState<Category[]>(initialCategories)

  const handleCategoryClick = (categoryId: string) => {
    const updatedCategories = categories.map(cat => ({
      ...cat,
      isActive: cat.id === categoryId
    }))
    setCategories(updatedCategories)
    onCategoryChange(categoryId)
  }

  return (
    <section className="bg-gradient-to-br from-primary-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            <span className="text-primary-600 font-semibold">by Category</span>
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Discover amazing projects across various categories and help change the world one contribution at a time.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition-colors duration-200">
              All projects
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Filter</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 2v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`group relative p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                category.isActive
                  ? 'border-primary-500 bg-white shadow-md'
                  : 'border-gray-200 bg-white hover:border-primary-300'
              }`}
              aria-pressed={category.isActive}
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-sm font-medium text-gray-900 leading-tight">
                  {category.name}
                </h3>
              </div>
              
              {category.isActive && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}