export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-32 h-16 bg-green-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="lg:order-2 relative">
            <div className="relative">
              <div className="w-full max-w-md mx-auto relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 transform rotate-2">
                  <div className="transform -rotate-2">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-48 h-64 mx-auto bg-gradient-to-b from-orange-400 to-red-500 rounded-t-full relative">
                        <div className="absolute inset-x-0 top-1/3 flex justify-center">
                          <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute inset-x-0 top-1/2 flex justify-center">
                          <div className="w-6 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-gradient-to-b from-orange-600 to-orange-800 rounded-b-3xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400 rounded-full opacity-80"></div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>

          <div className="lg:order-1 space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Empower Dreams,{' '}
                <span className="block text-teal-600">Shape a Better Future</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Unlock potential through education, mentorship, and community support. 
                Together, we create pathways to success for women everywhere.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-4 border-white flex items-center justify-center text-white font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Join 65,000+ women</p>
                <p className="text-gray-500 text-sm">transforming their lives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,69.3L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}