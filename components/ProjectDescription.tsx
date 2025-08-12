import { Project } from '@/types'

interface ProjectDescriptionProps {
  project: Project
}

export default function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <div className="whitespace-pre-line text-gray-700 leading-relaxed">
        {project.longDescription}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          How we'll use the funds
        </h3>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Tuition and academic fees</span>
              <span className="font-medium text-gray-900">$45,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Living expenses</span>
              <span className="font-medium text-gray-900">$15,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Research and thesis costs</span>
              <span className="font-medium text-gray-900">$3,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Emergency fund</span>
              <span className="font-medium text-gray-900">$2,000</span>
            </div>
            <div className="border-t border-gray-300 pt-2 flex justify-between items-center font-semibold">
              <span className="text-gray-900">Total Goal</span>
              <span className="text-gray-900">$65,000</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Timeline & Milestones
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Phase 1: Complete Current Semester</h4>
              <p className="text-gray-600 text-sm">Focus on current coursework and maintain academic excellence</p>
              <span className="text-xs text-gray-500">In Progress</span>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Phase 2: Thesis Research</h4>
              <p className="text-gray-600 text-sm">Conduct comprehensive research on educational accessibility</p>
              <span className="text-xs text-gray-500">Summer 2024</span>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Phase 3: Graduation & Impact</h4>
              <p className="text-gray-600 text-sm">Graduate and establish non-profit organization in rural India</p>
              <span className="text-xs text-gray-500">Fall 2024</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Important Note</h4>
          <p className="text-blue-800 text-sm">
            This project has been reviewed and verified by our team. All funds will be directly transferred to 
            Columbia University for tuition payments, with documentation provided to backers upon completion.
          </p>
        </div>
      </div>
    </div>
  )
}