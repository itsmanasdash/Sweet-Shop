import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="text-4xl mb-4">🍭</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Sweet Dreams
            </h3>
            <p className="text-gray-400 mb-8">Making life sweeter, one treat at a time</p>
            
            <div className="flex justify-center gap-6 mb-8">
                <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                📘
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                📷
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                🐦
                </button>
            </div>
            
            <p className="text-gray-500">© 2025 Sweet Dreams. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
