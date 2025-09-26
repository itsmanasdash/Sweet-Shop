import { useState, useEffect } from 'react'
import { Star, Plus, X, ShoppingCart, Search, LogIn, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    userId: string
}

interface NewProduct {
    name: string,
    description: string,
    price: number,
    quantity: number
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [purchaseLoading, setPurchaseLoading] = useState<number | null>(null)
    const [purchaseQuantities, setPurchaseQuantities] = useState<{[key: number]: number}>({})
    const [newProduct, setNewProduct] = useState<NewProduct>({
        name: '',
        description: '',
        price: 0,
        quantity: 0
    })
    const { user } = useAuth()

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const getStockStatus = (quantity: number) => {
        if (quantity === 0) return { text: 'Out of Stock', color: 'text-red-500' }
        if (quantity <= 5) return { text: 'Low Stock', color: 'text-orange-500' }
        return { text: 'In Stock', color: 'text-green-500' }
    }

    const handleAddProduct = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setNewProduct({
            name: '',
            description: '',
            price: 0,
            quantity: 0
        })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setNewProduct(prev => ({
            ...prev,
            [name]: name === 'price' || name === 'quantity' ? Number(value) : value
        }))
    }

    const handleQuantityChange = (productId: number, quantity: number) => {
        setPurchaseQuantities(prev => ({
            ...prev,
            [productId]: quantity
        }))
    }

    const handlePurchase = async (productId: number) => {
        const quantity = purchaseQuantities[productId] || 1
        setPurchaseLoading(productId)
        
        try {
            const response = await fetch(
                `http://localhost:8000/api/sweets/${productId}/purchase`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ quantity })
                }
            )
            
            if (response.status === 200) {
                // Update the product quantity in the local state
                setProducts(prev => prev.map(product => 
                    product.id === productId 
                        ? { ...product, quantity: product.quantity - quantity }
                        : product
                ))
                
                // Reset the purchase quantity for this product
                setPurchaseQuantities(prev => ({
                    ...prev,
                    [productId]: 1
                }))
                
                // You might want to show a success message here
                console.log('Purchase successful!')
            }
        } catch (error) {
            console.error('Error making purchase:', error)
            // You might want to show an error message to the user
        } finally {
            setPurchaseLoading(null)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            const response = await fetch('http://localhost:8000/api/sweets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    ...newProduct,
                    userId: user?.id
                })
            })
            
            if (response.status !== 201) {
                throw new Error('Failed to create product')
            }
            
            const createdProduct = await response.json()
            
            // Add the new product to the existing products list
            setProducts(prev => [...prev, createdProduct])
            handleCloseModal()
        } catch (error) {
            console.error('Error creating product:', error)
            // You might want to show an error message to the user
        } finally {
            setIsLoading(false)
        }
    }

    // Fetch products on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/sweets')
                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }
                const data = await response.json()
                setProducts(data)
                
                // Initialize purchase quantities to 1 for all products
                const initialQuantities: {[key: number]: number} = {}
                data.forEach((product: Product) => {
                    initialQuantities[product.id] = 1
                })
                setPurchaseQuantities(initialQuantities)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        
        // Only fetch products if user is logged in
        if (user) {
            fetchProducts()
        }
    }, [user])

    // If user is not logged in, show login prompt
    if (!user) {
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

                {/* Login Prompt */}
                <div className="mt-8 not-first-of-type:flex items-center justify-center min-h-[60vh] px-4">
                    <div className="max-w-md w-full">
                        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <User className="w-10 h-10 text-purple-600" />
                            </div>
                            
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Welcome to Sweet Delights!
                            </h2>
                            
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                To browse our delicious collection of handcrafted sweets and make purchases, 
                                please log in to your account.
                            </p>
                            
                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    <LogIn className="w-5 h-5" />
                                    <Link to="/getstarted">Log In to Continue</Link>
                                </button>
                                
                                <p className="text-sm text-gray-500">
                                    Don't have an account? 
                                    <button className="text-purple-600 hover:text-purple-700 font-medium ml-1 underline">
                                        <Link to="/getstarted">Sign up here</Link>
                                    </button>
                                </p>
                            </div>
                        </div>
                        
                        {/* Features Preview */}
                        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <div className="text-2xl mb-2">🧁</div>
                                <p className="text-xs text-gray-600">Premium Quality</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <div className="text-2xl mb-2">🚚</div>
                                <p className="text-xs text-gray-600">Fast Delivery</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <div className="text-2xl mb-2">⭐</div>
                                <p className="text-xs text-gray-600">5-Star Rated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
                        🍭 Sweet Delights
                    </h1>
                    <p className="text-gray-600 text-center text-lg mb-6">
                        Handcrafted sweets made with love and the finest ingredients
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for sweets..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Search Results Info */}
                {searchQuery && (
                    <div className="mb-6">
                        <p className="text-gray-600 text-center">
                            {filteredProducts.length === 0 
                                ? `No sweets found matching "${searchQuery}"` 
                                : `Found ${filteredProducts.length} sweet${filteredProducts.length === 1 ? '' : 's'} matching "${searchQuery}"`
                            }
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => {
                        const stockStatus = getStockStatus(product.quantity)
                        const purchaseQuantity = purchaseQuantities[product.id] || 1
                        const isPurchasing = purchaseLoading === product.id
                        const canPurchase = product.quantity > 0 && purchaseQuantity <= product.quantity
                        
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

                                    {/* Purchase Section */}
                                    <div className="border-t pt-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <label className="text-sm font-medium text-gray-700">
                                                Quantity:
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                max={product.quantity}
                                                value={purchaseQuantity}
                                                onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                                                disabled={product.quantity === 0}
                                                className="w-20 px-2 py-1 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                            />
                                        </div>
                                        
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm text-gray-600">
                                                Total: <span className="font-semibold">${(product.price * purchaseQuantity).toFixed(2)}</span>
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => handlePurchase(product.id)}
                                            disabled={!canPurchase || isPurchasing}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {isPurchasing ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <ShoppingCart className="w-4 h-4" />
                                                    {product.quantity === 0 ? 'Out of Stock' : 'Purchase'}
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* No Results Message */}
                {filteredProducts.length === 0 && !searchQuery && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🍪</div>
                        <p className="text-gray-500 text-lg">No sweets available at the moment</p>
                    </div>
                )}
            </div>

            {/* Floating Add Button */}
            <button
                onClick={handleAddProduct}
                className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 group z-50"
                aria-label="Add new product"
            >
                <Plus className="w-8 h-8 mx-auto group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-800">Add New Sweet</h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <div className="space-y-4">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={newProduct.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                                        placeholder="Enter sweet name"
                                        required
                                    />
                                </div>

                                {/* Description Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={newProduct.description}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Describe your sweet"
                                        required
                                    />
                                </div>

                                {/* Price and Quantity Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Price Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Price ($)
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={newProduct.price}
                                            onChange={handleInputChange}
                                            min="0"
                                            step="0.01"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                                            placeholder="0.00"
                                            required
                                        />
                                    </div>

                                    {/* Quantity Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={newProduct.quantity}
                                            onChange={handleInputChange}
                                            min="0"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="flex items-center justify-end gap-4 mt-8">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                                    disabled={isLoading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Creating...' : 'Create Sweet'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products