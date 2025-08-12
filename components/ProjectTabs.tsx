'use client'

import { useState } from 'react'
import { Project } from '@/types'
import ProjectDescription from './ProjectDescription'
import ProjectContributors from './ProjectContributors'
import ProjectUpdates from './ProjectUpdates'
import ProjectComments from './ProjectComments'

interface ProjectTabsProps {
  project: Project
}

export default function ProjectTabs({ project }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'contributors' | 'updates' | 'comments'>('description')

  const tabs = [
    { id: 'description' as const, name: 'Description', count: null },
    { id: 'contributors' as const, name: 'Contributors', count: project.backers },
    { id: 'updates' as const, name: 'Updates', count: 2 },
    { id: 'comments' as const, name: 'Comments', count: 4 },
  ]

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <nav className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600 bg-primary-50'
                        : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                    }`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>{tab.name}</span>
                      {tab.count !== null && (
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          activeTab === tab.id
                            ? 'bg-primary-100 text-primary-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {tab.count}
                        </span>
                      )}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'description' && <ProjectDescription project={project} />}
                {activeTab === 'contributors' && <ProjectContributors project={project} />}
                {activeTab === 'updates' && <ProjectUpdates project={project} />}
                {activeTab === 'comments' && <ProjectComments project={project} />}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Share Project */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Share this project</h3>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors duration-200">
                    Facebook
                  </button>
                  <button className="flex-1 bg-blue-400 text-white py-2 px-3 rounded text-sm hover:bg-blue-500 transition-colors duration-200">
                    Twitter
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors duration-200">
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Similar Projects */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Similar projects</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex space-x-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                          Similar educational project {item}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">85% funded</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200">
                  View all similar projects
                </button>
              </div>

              {/* Trust & Safety */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Trust & Safety</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Verified creator</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Secure payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Regular updates</span>
                  </div>
                </div>
                <button className="w-full mt-3 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200">
                  Learn more about our policies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}