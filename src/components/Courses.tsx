const courses = [
  {
    id: 1,
    title: 'Women in Tech Fundamentals',
    description: 'Master the basics of programming, data science, and digital literacy to kickstart your tech career.',
    duration: '12 weeks',
    level: 'Beginner',
    enrolled: '2,450',
    category: 'Technology',
    image: '/api/placeholder/300/200',
    tags: ['Programming', 'Data Science', 'Career Development']
  },
  {
    id: 2,
    title: 'Entrepreneurship & Business Strategy',
    description: 'Learn how to build and scale successful businesses with practical tools and mentorship.',
    duration: '8 weeks',
    level: 'Intermediate',
    enrolled: '1,890',
    category: 'Business',
    image: '/api/placeholder/300/200',
    tags: ['Business Planning', 'Strategy', 'Leadership']
  },
  {
    id: 3,
    title: 'Financial Literacy & Investment',
    description: 'Take control of your financial future with comprehensive personal finance and investment strategies.',
    duration: '6 weeks',
    level: 'Beginner',
    enrolled: '3,200',
    category: 'Finance',
    image: '/api/placeholder/300/200',
    tags: ['Personal Finance', 'Investing', 'Budgeting']
  },
  {
    id: 4,
    title: 'Digital Marketing Mastery',
    description: 'Build your brand and grow your business through effective digital marketing strategies.',
    duration: '10 weeks',
    level: 'Intermediate',
    enrolled: '1,650',
    category: 'Marketing',
    image: '/api/placeholder/300/200',
    tags: ['Social Media', 'Content Strategy', 'Analytics']
  }
];

export default function Courses() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore courses that matter to you
            </h2>
            <p className="text-gray-600 text-lg">
              Discover programs designed to unlock your potential and accelerate your career
            </p>
          </div>
          <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-2">
            <span>View All</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {['All', 'Technology', 'Business', 'Finance', 'Marketing', 'Leadership', 'Personal Development'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {course.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs ml-2">+{course.enrolled}</span>
                  </div>
                  
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                    Join Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
}