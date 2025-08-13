'use client';

import { useState } from 'react';
import StepIndicator from './StepIndicator';
import LocationSelector from './LocationSelector';
import CategorySelector from './CategorySelector';

interface FormData {
  location: string;
  categories: string[];
  title: string;
  description: string;
  goalAmount: string;
  timeline: string;
}

const categories = [
  { id: 'entrepreneurship', name: 'Entrepreneurship', icon: '💼' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'crisis-support', name: 'Crisis Support', icon: '🆘' },
  { id: 'social-impact', name: 'Social Impact', icon: '🤝' },
  { id: 'arts-culture', name: 'Arts & Culture', icon: '🎨' },
  { id: 'technology', name: 'Technology', icon: '💻' },
  { id: 'environment', name: 'Environment', icon: '🌱' },
  { id: 'skill-development', name: 'Skill Development', icon: '🎯' },
  { id: 'health', name: 'Health', icon: '🏥' },
  { id: 'leadership', name: 'Leadership', icon: '👩‍💼' },
];

export default function CreateFundraiserForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    location: 'Select location',
    categories: [],
    title: '',
    description: '',
    goalAmount: '',
    timeline: '',
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleLocationChange = (location: string) => {
    setFormData(prev => ({ ...prev, location }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setFormData(prev => {
      const categories = prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId];
      return { ...prev, categories };
    });
  };

  const canProceedFromStep1 = formData.location !== 'Select location' && formData.categories.length > 0;

  const renderStep1 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Where will the fundraiser take place?</h2>
        <p className="text-gray-600">Mention the location to help donors understand the impact area.</p>
      </div>

      <div className="max-w-md mx-auto">
        <LocationSelector 
          selectedLocation={formData.location}
          onLocationChange={handleLocationChange}
        />
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
        <div className="flex items-center space-x-3 mb-6">
          <h3 className="text-xl font-bold text-purple-600">Fundraiser Location & Category</h3>
          <span className="text-2xl">🌱</span>
        </div>
        
        <CategorySelector
          categories={categories}
          selectedCategories={formData.categories}
          onCategoryChange={handleCategoryChange}
          multiple={true}
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!canProceedFromStep1}
          className={`
            px-8 py-3 rounded-full font-semibold transition-all
            ${canProceedFromStep1 
              ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your fundraiser</h2>
        <p className="text-gray-600">Share the story that will inspire people to donate.</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fundraiser Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter a compelling title for your fundraiser"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe your fundraiser, its goals, and how donations will be used..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!formData.title.trim() || !formData.description.trim()}
          className={`
            px-8 py-3 rounded-full font-semibold transition-all
            ${formData.title.trim() && formData.description.trim()
              ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Set your fundraising goal</h2>
        <p className="text-gray-600">How much do you need to raise to achieve your mission?</p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Goal Amount (₹) *
          </label>
          <input
            type="number"
            value={formData.goalAmount}
            onChange={(e) => setFormData(prev => ({ ...prev, goalAmount: e.target.value }))}
            placeholder="100000"
            min="1000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">Minimum amount: ₹1,000</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select timeline</option>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="90">90 days</option>
            <option value="120">120 days</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!formData.goalAmount || parseInt(formData.goalAmount) < 1000}
          className={`
            px-8 py-3 rounded-full font-semibold transition-all
            ${formData.goalAmount && parseInt(formData.goalAmount) >= 1000
              ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Review and Launch</h2>
        <p className="text-gray-600">Review your fundraiser details before publishing.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Fundraiser Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">Location:</span>
              <span className="text-gray-800">{formData.location}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">Categories:</span>
              <div className="flex flex-wrap gap-1">
                {formData.categories.map(catId => {
                  const category = categories.find(cat => cat.id === catId);
                  return category ? (
                    <span key={catId} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                      {category.icon} {category.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">Title:</span>
              <span className="text-gray-800 text-right flex-1 ml-4">{formData.title}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">Goal Amount:</span>
              <span className="text-gray-800">₹{formData.goalAmount}</span>
            </div>
            
            {formData.timeline && (
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-600">Timeline:</span>
                <span className="text-gray-800">{formData.timeline} days</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => alert('Fundraiser submitted successfully!')}
          className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg"
        >
          Launch Fundraiser
        </button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center space-x-2">
            <span>Create a fundraiser</span>
            <span className="text-green-500 text-2xl">🌱</span>
          </h1>
        </div>

        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        
        <div className="bg-gray-50 rounded-3xl p-8">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
}