import Image from 'next/image'
import { Project } from '@/types'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const fundingPercentage = Math.round((project.currentFunding / project.fundingGoal) * 100)
  const formattedGoal = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(project.fundingGoal)
  
  const formattedCurrent = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(project.currentFunding)

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project Image and Gallery */}
          <div className="lg:col-span-2">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
              />
            </div>
            
            {project.gallery && project.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {project.gallery.slice(1, 4).map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} gallery image ${index + 2}`}
                      fill
                      className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 22vw, 22vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Funding Info and Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {formattedCurrent}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    pledged of {formattedGoal} goal
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className="bg-primary-500 h-3 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center mb-6">
                    <div>
                      <div className="text-xl font-bold text-gray-900">{project.backers}</div>
                      <div className="text-sm text-gray-600">backers</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{project.daysLeft}</div>
                      <div className="text-sm text-gray-600">days to go</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200">
                    Back this project
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                    
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10">
                      <Image
                        src={project.creator.avatar}
                        alt={project.creator.name}
                        fill
                        className="object-cover rounded-full"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{project.creator.name}</div>
                      <div className="text-sm text-gray-600">{project.location}</div>
                    </div>
                  </div>
                  
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {project.creator.bio}
                  </p>
                  
                  <button className="mt-3 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200">
                    View profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Title and Basic Info */}
        <div className="mt-8 lg:pr-80">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{project.location}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2m-6 0V7" />
              </svg>
              <span>Education</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Created {new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}