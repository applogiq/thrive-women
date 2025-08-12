'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Project } from '@/types'
import { projectComments } from '@/data/mockData'

interface ProjectCommentsProps {
  project: Project
}

export default function ProjectComments({ project }: ProjectCommentsProps) {
  const [newComment, setNewComment] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'most-liked'>('newest')

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
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
    return `${Math.floor(diffInDays / 7)} weeks ago`
  }

  const sortedComments = [...projectComments].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'most-liked':
        return b.likes - a.likes
      case 'newest':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setNewComment('')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Comments ({projectComments.length})
          </h3>
          <p className="text-gray-600 text-sm">
            Join the conversation and show your support!
          </p>
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'most-liked')}
          className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="most-liked">Most liked</option>
        </select>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-gray-600 text-sm font-medium">You</span>
            </div>
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts and encourage Sarah..."
                rows={3}
                className="w-full border-0 bg-transparent resize-none focus:outline-none placeholder-gray-500"
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button type="button" className="hover:text-gray-700 transition-colors duration-200">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Add image
                  </button>
                  <span className="text-xs">
                    {newComment.length}/500 characters
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {sortedComments.map((comment) => (
          <article key={comment.id} className="flex space-x-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              {comment.author.avatar ? (
                <Image
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  fill
                  className="object-cover rounded-full"
                  sizes="32px"
                />
              ) : (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">
                    {comment.author.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900">
                  {comment.author.name === 'Anonymous' ? 'Anonymous Supporter' : comment.author.name}
                </span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">
                  {getTimeAgo(comment.date)}
                </span>
              </div>
              
              <div className="text-gray-700 text-sm leading-relaxed mb-3">
                {comment.content}
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm">{comment.likes}</span>
                </button>
                
                <button className="text-gray-500 hover:text-primary-600 transition-colors duration-200 text-sm">
                  Reply
                </button>
                
                <button className="text-gray-500 hover:text-primary-600 transition-colors duration-200 text-sm">
                  Share
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Comments */}
      <div className="mt-8 text-center">
        <button className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors duration-200">
          Load more comments
        </button>
      </div>

      {/* Comment Guidelines */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Community Guidelines</h4>
          <div className="text-blue-800 text-sm space-y-1">
            <p>• Be respectful and supportive to project creators and fellow backers</p>
            <p>• Share constructive feedback and encouragement</p>
            <p>• Avoid spam, harassment, or inappropriate content</p>
            <p>• Help create a positive environment for everyone</p>
          </div>
        </div>
      </div>

      {/* Comment Statistics */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-gray-900">{projectComments.length}</div>
          <div className="text-sm text-gray-600">Total comments</div>
        </div>
        <div>
          <div className="text-lg font-bold text-gray-900">
            {projectComments.reduce((sum, comment) => sum + comment.likes, 0)}
          </div>
          <div className="text-sm text-gray-600">Total likes</div>
        </div>
        <div>
          <div className="text-lg font-bold text-gray-900">
            {Math.round(projectComments.reduce((sum, comment) => sum + comment.likes, 0) / projectComments.length)}
          </div>
          <div className="text-sm text-gray-600">Avg engagement</div>
        </div>
      </div>
    </div>
  )
}