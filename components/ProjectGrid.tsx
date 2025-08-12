'use client'

import { useState, useMemo } from 'react'
import { projects as allProjects } from '@/data/mockData'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  selectedCategory: string
}

export default function ProjectGrid({ selectedCategory }: ProjectGridProps) {
  const [sortBy, setSortBy] = useState<'newest' | 'funding' | 'deadline'>('newest')

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? allProjects 
      : allProjects.filter(project => project.category === selectedCategory)

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'funding':
          return (b.currentFunding / b.fundingGoal) - (a.currentFunding / a.fundingGoal)
        case 'deadline':
          return a.daysLeft - b.daysLeft
        case 'newest':
        default:
          return 0
      }
    })

    return sorted
  }, [selectedCategory, sortBy])

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Projects
              <span className="text-lg font-normal text-gray-600 ml-2">
                ({filteredAndSortedProjects.length})
              </span>
            </h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-select" className="text-sm font-medium text-gray-700">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'funding' | 'deadline')}
                className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="newest">Newest</option>
                <option value="funding">Most funded</option>
                <option value="deadline">Ending soon</option>
              </select>
            </div>
            
            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <span>View</span>
            </button>
          </div>
        </div>

        {filteredAndSortedProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📂</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try selecting a different category or check back later for new projects.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium">
            Load more
          </button>
        </div>
      </div>
    </section>
  )
}