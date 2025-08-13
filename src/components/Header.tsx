'use client';

import { useState } from 'react';
import Link from 'next/link';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Together, We Can Change Lives</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-4">Join our community</p>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Join Now
            </button>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account? <Link href="#" className="text-purple-600 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm relative z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌱</span>
              </div>
              <div>
                <span className="font-bold text-xl text-gray-800">Thrive</span>
                <span className="block text-xs text-green-600">Women</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact us</Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Features</Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Support</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/create-fundraiser"
                className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Create a Project
              </Link>
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-white text-xs">👤</span>
              </div>
            </div>

            <button
              className="md:hidden flex items-center justify-center w-8 h-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-5 h-0.5 bg-gray-600"></div>
                <div className="w-5 h-0.5 bg-gray-600"></div>
                <div className="w-5 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
                <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</Link>
                <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
                <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact us</Link>
                <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Features</Link>
                <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</Link>
                <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Support</Link>
                <Link
                  href="/create-fundraiser"
                  className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors self-start"
                >
                  Create a Project
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}