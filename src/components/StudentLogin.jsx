import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (in a real app, this would be server-side validation)
    if (username === 'student' && password === 'student123') {
      setIsLoading(true);

      // Simulate API call delay
      setTimeout(() => {
        navigate('/student-dashboard');
      }, 1500);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      }}
    >
      <div className="flex max-w-4xl w-full rounded-xl overflow-hidden shadow-lg bg-white animate-fadeIn">
        {/* Hero Section */}
        <div className="flex-1 bg-gradient-to-br from-primary to-blue-500 text-white p-12 flex flex-col justify-center items-center text-center relative overflow-hidden hidden md:flex">
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white opacity-10"></div>

          <i className="fas fa-graduation-cap text-6xl mb-6 opacity-80 relative z-10"></i>
          <h1 className="text-3xl font-bold mb-4 relative z-10">Welcome to ScholarPrep</h1>
          <p className="opacity-90 max-w-md relative z-10">
            Track your academic progress, analyze your performance, and achieve your learning goals with our comprehensive student analytics platform.
          </p>
        </div>

        {/* Login Form */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8 text-2xl font-bold text-primary">
            <i className="fas fa-graduation-cap text-3xl"></i>
            <span>ScholarPrep</span>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900">Student Login</h2>
          <p className="text-gray-500 mb-8">Sign in to access your dashboard and analytics</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 font-medium text-gray-900">
                Email or Mobile
              </label>
              <div className="relative">
                <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your email or mobile number"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 font-medium text-gray-900">
                Password
              </label>
              <div className="relative">
                <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-primary"
                />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-primary hover:underline transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-250 mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Authenticating
                </>
              ) : (
                'Login'
              )}
            </button>

            <div className="flex items-center text-gray-500 text-sm mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4">or continue with</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                type="button"
                className="flex-1 py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all group"
              >
                <i className="fab fa-google transition-transform group-hover:scale-110"></i>
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex-1 py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all group"
              >
                <i className="fab fa-microsoft transition-transform group-hover:scale-110"></i>
                <span>Microsoft</span>
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-primary font-medium hover:underline transition-colors">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @media (max-width: 768px) {
          .login-container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentLogin;
