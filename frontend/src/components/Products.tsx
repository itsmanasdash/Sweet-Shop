import { useState, useEffect } from 'react'
import { Star , Plus } from 'lucide-react'
import axios from 'axios'

interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    userId: string
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([])

    const getStockStatus = (quantity: number) => {
        if (quantity === 0) return { text: 'Out of Stock', color: 'text-red-500' }
        if (quantity <= 5) return { text: 'Low Stock', color: 'text-orange-500' }
        return { text: 'In Stock', color: 'text-green-500' }
    }

    const handleAddProduct = () => {
        
    }

    // Simulate API call
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/sweets')
            const data = await response.data
            setProducts([...products, ...data])
        }
        fetchProducts()
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
                        🍭 Sweet Delights
                    </h1>
                    <p className="text-gray-600 text-center text-lg">
                        Handcrafted sweets made with love and the finest ingredients
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => {
                        const stockStatus = getStockStatus(product.quantity)
                        
                        return (
                            <div 
                                key={product.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                            >
                                {/* Product Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-60">🧁</div>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold text-purple-600">
                                            ${product.price}
                                        </span>
                                        <span className={`text-sm font-medium ${stockStatus.color}`}>
                                            {stockStatus.text} ({product.quantity})
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Floating Add Button */}
            <button
                onClick={handleAddProduct}
                className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 group z-50"
                aria-label="Add new product"
            >
                <Plus className="w-8 h-8 mx-auto group-hover:rotate-90 transition-transform duration-300" />
            </button>
        </div>
    )
}

export default Products