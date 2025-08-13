'use client';

import { useState } from 'react';

const causes = [
  {
    id: 1,
    title: 'Empower Her: The Importance of Fundraising for Women&apos;s Initiatives',
    category: 'Entrepreneurship',
    location: 'Delhi, India',
    raised: '₹1,00,000',
    date: 'Nov 15, 2023',
    image: '/api/placeholder/600/400',
    progress: 75,
    description: 'Supporting women entrepreneurs in Delhi through micro-financing and business mentorship programs.'
  },
  {
    id: 2,
    title: 'Support Women: Why Fundraising is Crucial for Female Empowerment',
    category: 'Environment',
    location: 'Assam, India',
    raised: '₹1,51,023',
    date: 'Nov 15, 2023',
    image: '/api/placeholder/400/300',
    progress: 60,
    description: 'Environmental conservation project led by women in rural Assam, focusing on sustainable farming practices.'
  },
  {
    id: 3,
    title: 'Raising Voices: How Fundraising Can Transform Women&apos;s Lives',
    category: 'Skill Development',
    location: 'Odisha, India',
    raised: '₹9,00,093',
    date: 'Nov 15, 2023',
    image: '/api/placeholder/400/300',
    progress: 85,
    description: 'Comprehensive skill development program providing vocational training to women in rural Odisha.'
  },
  {
    id: 4,
    title: 'Creating Change: The Impact of Fundraising on Women&apos;s Lives and Communities',
    category: 'Social Impact',
    location: 'Chennai, India',
    raised: '₹3,00,000',
    date: 'Nov 15, 2023',
    image: '/api/placeholder/400/300',
    progress: 45,
    description: 'Community-driven initiative focusing on women&apos;s leadership and social change in urban Chennai.'
  }
];

const categories = [
  'All',
  'Entrepreneurship',
  'Education',
  'Arts & Culture',
  'Technology',
  'Environment',
  'Social Impact',
  'Skill Development'
];

export default function Causes() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCauses = activeCategory === 'All' 
    ? causes 
    : causes.filter(cause => cause.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'Entrepreneurship': '💼',
      'Education': '📚',
      'Arts & Culture': '🎨',
      'Technology': '💻',
      'Environment': '🌱',
      'Social Impact': '🤝',
      'Skill Development': '🎯'
    };
    return iconMap[category] || '📋';
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Entrepreneurship': 'bg-purple-100 text-purple-600',
      'Education': 'bg-blue-100 text-blue-600',
      'Arts & Culture': 'bg-pink-100 text-pink-600',
      'Technology': 'bg-indigo-100 text-indigo-600',
      'Environment': 'bg-green-100 text-green-600',
      'Social Impact': 'bg-orange-100 text-orange-600',
      'Skill Development': 'bg-purple-100 text-purple-600'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center">
              Explore causes that matter to you.
              <span className="text-green-500 ml-2 text-3xl">🌱</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Browse and support initiatives that align with your values and make a meaningful impact.
            </p>
          </div>
          <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-2 whitespace-nowrap">
            <span>View all</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center space-x-2 ${
                category === activeCategory
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category !== 'All' && (
                <span className="text-base">{getCategoryIcon(category)}</span>
              )}
              <span>{category}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {filteredCauses.slice(0, 1).map((cause) => (
              <div
                key={cause.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative">
                  <div className="h-80 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/30"></div>
                    <div className="relative z-10 w-48 h-64 bg-gradient-to-b from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{cause.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(cause.category)}`}>
                      {getCategoryIcon(cause.category)} {cause.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                    {cause.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cause.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="font-semibold text-gray-800 text-lg">{cause.raised} raised</span>
                      <span>{cause.date}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${cause.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-6">
            {filteredCauses.slice(1, 4).map((cause) => (
              <div
                key={cause.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="flex">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center relative flex-shrink-0">
                    <div className="w-16 h-20 bg-gradient-to-b from-purple-400 to-purple-600 rounded-xl"></div>
                    <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">{cause.location}</span>
                    </div>
                  </div>

                  <div className="flex-1 p-4">
                    <div className="mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(cause.category)}`}>
                        {cause.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {cause.title}
                    </h4>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="font-semibold text-gray-800">{cause.raised} raised</span>
                        <span>{cause.date}</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-green-600 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${cause.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg">
            Discover More Causes
          </button>
        </div>
      </div>
    </section>
  );
}