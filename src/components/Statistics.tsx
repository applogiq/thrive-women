export default function Statistics() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Lift Her Up,{' '}
            <span className="text-purple-600">Change Her Life!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every contribution creates ripples of change, transforming not just individual lives but entire communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800">65,000+</h3>
              <p className="text-purple-600 font-semibold">Women Empowered</p>
              <p className="text-gray-500 text-sm">
                Skilled, mentored, and well connected to create sustainable livelihood
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800">$59,724,450</h3>
              <p className="text-green-600 font-semibold">Total Funds Raised</p>
              <p className="text-gray-500 text-sm">
                Collected through women focused impact investment and development
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800">125</h3>
              <p className="text-blue-600 font-semibold">Countries Reached</p>
              <p className="text-gray-500 text-sm">
                Impacted in training and micro financing to drive financial inclusion
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-medium">Live Impact Tracking</span>
          </div>
        </div>
      </div>
    </section>
  );
}