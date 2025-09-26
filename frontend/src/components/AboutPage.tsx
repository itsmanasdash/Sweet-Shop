import { Heart, Award, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-pulse">
              🍭 Sweet Dreams Candy Shop 🍬
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Where every bite tells a story of passion, tradition, and pure sweetness. 
              Welcome to our world of handcrafted confections and timeless treats.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
              <Heart className="text-red-500 mr-3" size={40} />
              Our Sweet Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 1952 by Margaret and Henry Thompson, Sweet Dreams began as a small 
                neighborhood candy store with a simple mission: to bring joy through the finest 
                handcrafted sweets. What started as a family dream has blossomed into a beloved 
                community institution, now in its third generation of candy makers.
              </p>
              <p>
                Every morning, our skilled confectioners arrive before dawn to begin the magical 
                process of creating our signature treats. From hand-pulled taffy to artisanal 
                chocolates, each piece is crafted with the same love and attention to detail 
                that made our grandparents' recipes legendary.
              </p>
              <p>
                Today, we're proud to serve not just our local community, but sweet lovers 
                from around the world who have discovered the magic that happens when tradition 
                meets innovation in every delicious bite.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-6xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Family Legacy</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">70+</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">3</div>
                  <div className="text-sm text-gray-600">Generations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">150+</div>
                  <div className="text-sm text-gray-600">Sweet Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">1000s</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <Award className="text-yellow-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We source only the finest ingredients from trusted suppliers worldwide. 
                Every ingredient is carefully selected to ensure the highest quality in every treat.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <Users className="text-blue-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                We're more than a candy shop – we're part of the community. From school fundraisers 
                to local events, we're committed to spreading sweetness throughout our neighborhood.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <Heart className="text-red-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Made with Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Every piece of candy is handcrafted with passion and care. Our confectioners pour 
                their hearts into creating treats that bring smiles to faces of all ages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-12">
              <h2 className="text-3xl font-bold mb-8">Visit Our Sweet Shop</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="opacity-90">NIT Raipur</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="opacity-90">Mon-Sat: 9AM-8PM | Sun: 11AM-6PM</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="opacity-90">+91 7205481375</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">dashmanas521@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Sweet Treats Await! 🍰
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Step into our magical world where the aroma of fresh chocolates and 
                handmade confections fills the air. Whether you're looking for the 
                perfect gift or treating yourself, we have something special waiting for you.
              </p>
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-2">Special Offerings:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>🎂 Custom birthday cakes & treats</li>
                  <li>🎁 Beautiful gift boxes & baskets</li>
                  <li>🎉 Party packages & bulk orders</li>
                  <li>🍫 Personalized chocolate messages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Sweeten Your Day?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Come visit us and discover why we've been the neighborhood's favorite 
            sweet destination for over 70 years!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 font-bold py-4 px-8 rounded-full hover:bg-pink-50 transition-colors duration-300 transform hover:scale-105">
              Visit Our Store
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105">
              Browse Our Treats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}