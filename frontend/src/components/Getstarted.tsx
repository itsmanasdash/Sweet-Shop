import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../hooks/auth';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const { setUser } = useAuth();
  const navigate = useNavigate();
  
  const [signUpData, setSignUpData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // Input validation
  const validateEmail = (email : string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password : string) => {
    return password.length >= 6;
  };

  const handleSignUpInput = (e : any) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear message when user starts typing
    if (message.text) setMessage({ type: '', text: '' });
  };

  const handleSignInInput = (e) => {
    const { name, value } = e.target;
    setSignInData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear message when user starts typing
    if (message.text) setMessage({ type: '', text: '' });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!signUpData.userName.trim()) {
      setMessage({ type: 'error', text: 'Name is required' });
      return;
    }
    
    if (!validateEmail(signUpData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email' });
      return;
    }
    
    if (!validatePassword(signUpData.password)) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", {
        email : signUpData.email,
        name : signUpData.userName,
        password : signUpData.password,
      },{
        withCredentials : true
      })
      if(response.status === 200){
        setUser(response.data.user);
        setSignUpData({
          userName: "",
          email: "",
          password: "",
        });
        setMessage({ type: 'success', text: 'Account created successfully!' });
        navigate("/");
      }
      // Simulate successful registration
      console.log('Registration successful:');
      setMessage({ type: 'success', text: 'Account created successfully! Please sign in.' });
      
      
    } catch (error) {
      console.error('Registration error:', error);
      setMessage({ type: 'error', text: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!validateEmail(signInData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email' });
      return;
    }
    
    if (!signInData.password) {
      setMessage({ type: 'error', text: 'Password is required' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Simulate API call
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email : signInData.email,
        password : signInData.password
      },{
        withCredentials : true
      })
      setUser(response.data.user);
      
      // Simulate successful login
      setMessage({ type: 'success', text: 'Login successful! Welcome back!' });
      
      // Clear form after successful login
      setTimeout(() => {
        setSignInData({ email: "", password: "" });
        setMessage({ type: '', text: '' });
      }, 2000);


      navigate("/");
      
    } catch (error) {
      console.error('Login error:', error);
      setMessage({ type: 'error', text: 'Login failed. Please check your credentials.' });
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setMessage({ type: '', text: '' });
    setShowPassword(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
        <div className="flex min-h-[600px]">
          
          {/* Form Section */}
          <div className={`w-1/2 p-8 transition-all duration-700 ease-in-out ${isSignUp ? 'translate-x-0' : 'translate-x-full'}`}>
            
            {/* Sign Up Form */}
            {isSignUp && (
              <div className="h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                  <p className="text-gray-600">Join us and start your journey</p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="userName"
                      placeholder="Full Name"
                      value={signUpData.userName}
                      onChange={handleSignUpInput}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={signUpData.email}
                      onChange={handleSignUpInput}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password (min 6 characters)"
                      value={signUpData.password}
                      onChange={handleSignUpInput}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {/* Message Display */}
                  {message.text && (
                    <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                      message.type === 'error' 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}>
                      {message.type === 'error' ? <AlertCircle size={16} /> : <CheckCircle size={16} />}
                      <span className="text-sm">{message.text}</span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleRegister}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-300"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Sign In Form */}
            {!isSignUp && (
              <div className="h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                  <p className="text-gray-600">Sign in to your account</p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={signInData.email}
                      onChange={handleSignInInput}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={signInData.password}
                      onChange={handleSignInInput}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <div className="text-right">
                    <button type="button" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                      Forgot Password?
                    </button>
                  </div>

                  {/* Message Display */}
                  {message.text && (
                    <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                      message.type === 'error' 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}>
                      {message.type === 'error' ? <AlertCircle size={16} /> : <CheckCircle size={16} />}
                      <span className="text-sm">{message.text}</span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleSignIn}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-300"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing In...</span>
                      </div>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Overlay Section */}
          <div className={`w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 flex items-center justify-center transition-all duration-700 ease-in-out ${isSignUp ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="text-center">
              {isSignUp ? (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Already have an account?</h3>
                  <p className="mb-6 text-blue-100">Sign in with your credentials to access all features</p>
                  <button
                    onClick={toggleMode}
                    className="border-2 border-white text-white font-semibold py-2 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
                  >
                    Sign In
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold mb-4">New here?</h3>
                  <p className="mb-6 text-blue-100">Create an account and discover all the features we have to offer</p>
                  <button
                    onClick={toggleMode}
                    className="border-2 border-white text-white font-semibold py-2 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;