import { Project } from '@/types'
import { projectUpdates } from '@/data/mockData'

interface ProjectUpdatesProps {
  project: Project
}

export default function ProjectUpdates({ project }: ProjectUpdatesProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffInDays === 0) return 'Today'
    if (diffInDays === 1) return '1 day ago'
    if (diffInDays < 7) return `${diffInDays} days ago`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
    return `${Math.floor(diffInDays / 30)} months ago`
  }

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Project Updates
        </h3>
        <p className="text-gray-600 text-sm">
          Stay informed about the latest progress and milestones from Sarah.
        </p>
      </div>

      <div className="space-y-6">
        {projectUpdates.map((update, index) => (
          <article key={update.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">
                    {update.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{update.author}</div>
                  <div className="text-sm text-gray-600">
                    {formatDate(update.date)} • {getTimeAgo(update.date)}
                  </div>
                </div>
              </div>
              
              {index === 0 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Latest update
                </span>
              )}
            </div>
            
            <div className="ml-11">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {update.title}
              </h4>
              
              <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                {update.content}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm">{update.likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm">Reply</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span className="text-sm">Share</span>
                  </button>
                </div>
                
                <span className="text-xs text-gray-500">
                  Update #{projectUpdates.length - index}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Subscribe to Updates */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
          <div className="flex items-center space-x-3 mb-3">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17H9a6 6 0 010-12h3m3 12V9a6 6 0 00-6-6H6" />
            </svg>
            <h4 className="font-medium text-primary-900">Stay in the loop</h4>
          </div>
          <p className="text-primary-800 text-sm mb-4">
            Get notified when Sarah posts new updates about her progress.
          </p>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200">
            Subscribe to updates
          </button>
        </div>
      </div>

      {/* Update Statistics */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">{projectUpdates.length}</div>
          <div className="text-sm text-gray-600">Total updates</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">
            {projectUpdates.reduce((sum, update) => sum + update.likes, 0)}
          </div>
          <div className="text-sm text-gray-600">Total likes</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">
            {Math.round(projectUpdates.reduce((sum, update) => sum + update.likes, 0) / projectUpdates.length)}
          </div>
          <div className="text-sm text-gray-600">Avg engagement</div>
        </div>
      </div>
    </div>
  )
}