import React, { useState } from 'react';
import { Eye, EyeOff, UserPlus, LogIn } from 'lucide-react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2072")',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlend: 'overlay'
      }}
    >
      <div className="w-full max-w-md p-8 m-4 rounded-2xl backdrop-blur-lg bg-black/30 border border-green-500/20 shadow-[0_0_15px_rgba(0,255,0,0.2)]">
        <div className="flex justify-center mb-8">
          {isLogin ? (
            <LogIn className="w-12 h-12 text-green-400" />
          ) : (
            <UserPlus className="w-12 h-12 text-green-400" />
          )}
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;