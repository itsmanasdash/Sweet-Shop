import { MapPin, Phone, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
        <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Visit Our Sweet Paradise</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-white text-center">
                <div className="group">
                <MapPin className="w-12 h-12 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p>123 Sugar Street<br />Candy Lane, Sweet City</p>
                </div>
                <div className="group">
                <Clock className="w-12 h-12 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <p>Mon-Sat: 9AM - 8PM<br />Sunday: 10AM - 6PM</p>
                </div>
                <div className="group">
                <Phone className="w-12 h-12 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p>(555) SWEET-01<br />hello@sweetdreams.com</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
