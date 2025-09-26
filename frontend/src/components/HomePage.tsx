import { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Star , Clock} from 'lucide-react';
import Contact from './Contact';


export default function SweetShopLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    { name: "Artisan Chocolates", price: "$24.99", image: "🍫", rating: 5 },
    { name: "Rainbow Macarons", price: "$18.99", image: "🌈", rating: 5 },
    { name: "Gummy Paradise", price: "$12.99", image: "🐻", rating: 4.8 },
    { name: "Vintage Candy Mix", price: "$15.99", image: "🍭", rating: 4.9 },
    { name: "Premium Truffles", price: "$32.99", image: "🍩", rating: 5 },
    { name: "Cotton Candy Dreams", price: "$8.99", image: "🍥", rating: 4.7 }
  ];

  const testimonials = [
    { name: "Sarah M.", text: "The most amazing chocolates I've ever tasted! Pure heaven.", rating: 5 },
    { name: "Mike R.", text: "My kids absolutely love the gummy selection. Quality is outstanding!", rating: 5 },
    { name: "Emma L.", text: "Perfect for special occasions. The packaging is beautiful too!", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <span className="text-8xl animate-bounce">🍭</span>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Sweet Dreams
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Indulge in our handcrafted confections made with love, premium ingredients, and a sprinkle of magic
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center gap-2 justify-center">
                  <ShoppingCart className="w-5 h-5 group-hover:animate-pulse" />
                  Shop Now
                </span>
              </button>
              <button className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-gray-600">Every sweet treat is crafted by hand with premium ingredients and endless passion</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">We source only the finest chocolates, natural flavors, and organic ingredients</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Our treats are made fresh every morning to ensure the perfect taste and texture</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Sweet Collection
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">Discover our handpicked selection of irresistible treats</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{product.name}</h3>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>
                <p className="text-2xl font-bold text-center text-purple-600 mb-4">{product.price}</p>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white/70">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          
          <div className="relative bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-semibold text-purple-600">{testimonials[currentTestimonial].name}</p>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentTestimonial ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}