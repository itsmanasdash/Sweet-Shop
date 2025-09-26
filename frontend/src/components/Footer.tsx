import { MapPin, Phone, Mail, Clock, Heart, Star, Award } from 'lucide-react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Brand Section - Full Width */}
                <div className="text-center mb-12">
                    <div className="text-5xl mb-4">🍭</div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Sweet Dreams
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto">
                        Making life sweeter, one treat at a time. Handcrafted with love since 2020, 
                        using only the finest ingredients to create memorable moments.
                    </p>
                    <div className="flex justify-center gap-6">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-400">4.9/5 Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-purple-400" />
                            <span className="text-sm text-gray-400">Award Winner</span>
                        </div>
                    </div>
                </div>

                {/* Three Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🏠</span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🍰</span>
                                    Our Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">ℹ️</span>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">📞</span>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🛒</span>
                                    Order Online
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🎁</span>
                                    Gift Cards
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 text-white">Sweet Categories</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🧁</span>
                                    Cupcakes & Muffins
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🍰</span>
                                    Custom Cakes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🍪</span>
                                    Artisan Cookies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🍫</span>
                                    Premium Chocolates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🍭</span>
                                    Traditional Sweets
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">🥧</span>
                                    Seasonal Specials
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400 text-sm">
                                        Amanaka Street<br />
                                        Raipur
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                                <a href="" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                                    +91 7205481375
                                </a>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                                <a href="" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                                    dashmanas521@gmail.com
                                </a>
                            </div>
                            
                            <div className="flex items-start gap-3 pt-2">
                                <Clock className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                                <div className="text-sm text-gray-400">
                                    <div className="font-medium mb-1">Store Hours:</div>
                                    <div>Mon - Fri: 8:00 AM - 8:00 PM</div>
                                    <div>Sat - Sun: 9:00 AM - 10:00 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Sweet Updates & Special Offers
                        </h4>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter and be the first to know about new flavors, 
                            seasonal specials, and exclusive discounts!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-500"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>

                {/* Social Media & Trust Badges */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Social Media */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-400 text-sm">Follow us:</span>
                            <div className="flex gap-3">
                                <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                                    <span className="text-xl group-hover:rotate-12 transition-transform duration-300">📘</span>
                                </button>
                                <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                                    <span className="text-xl group-hover:rotate-12 transition-transform duration-300">📷</span>
                                </button>
                                <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                                    <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🐦</span>
                                </button>
                                <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                                    <span className="text-xl group-hover:rotate-12 transition-transform duration-300">📺</span>
                                </button>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Heart className="w-4 h-4 text-red-400 fill-current" />
                                <span>Made with Love</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span>100% Natural</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-400">🛡️</span>
                                <span>Quality Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p>© 2025 Sweet Dreams. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
                            <a href="#" className="hover:text-pink-400 transition-colors">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer