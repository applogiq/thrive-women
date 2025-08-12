import Image from 'next/image'
import { Project } from '@/types'
import { contributors } from '@/data/mockData'

interface ProjectContributorsProps {
  project: Project
}

export default function ProjectContributors({ project }: ProjectContributorsProps) {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const sortedContributors = [...contributors].sort((a, b) => b.amount - a.amount)

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Top Contributors
        </h3>
        <p className="text-gray-600 text-sm">
          Thank you to all {project.backers} amazing people who are supporting this project!
        </p>
      </div>

      <div className="space-y-4">
        {sortedContributors.map((contributor, index) => (
          <div key={contributor.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                {contributor.isAnonymous ? (
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">?</span>
                  </div>
                ) : (
                  <Image
                    src={contributor.avatar}
                    alt={contributor.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="40px"
                  />
                )}
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">
                    {contributor.name}
                  </span>
                  {index < 3 && (
                    <span className="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded-full">
                      Top {index + 1}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  {formatDate(contributor.date)}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-semibold text-gray-900">
                {formatAmount(contributor.amount)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more contributors placeholder */}
      <div className="mt-6 text-center">
        <div className="flex -space-x-2 justify-center mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
          ))}
          <div className="w-8 h-8 bg-primary-100 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-primary-600 text-xs font-medium">+{project.backers - 10}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          And {project.backers - contributors.length} other amazing supporters
        </p>
        
        <button className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors duration-200">
          View all contributors
        </button>
      </div>

      {/* Recent Contributions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Recent contributions</h4>
        
        <div className="space-y-3">
          {contributors.slice(0, 3).map((contributor) => (
            <div key={`recent-${contributor.id}`} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-gray-900">
                  <span className="font-medium">{contributor.name}</span>
                  {contributor.isAnonymous ? ' (anonymous)' : ''} backed this project
                </span>
              </div>
              <span className="text-sm text-gray-500">{formatDate(contributor.date)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution Statistics */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Contribution breakdown</h4>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">$435</div>
            <div className="text-sm text-gray-600">Average contribution</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">{formatAmount(Math.max(...contributors.map(c => c.amount)))}</div>
            <div className="text-sm text-gray-600">Largest contribution</div>
          </div>
        </div>
      </div>
    </div>
  )
}