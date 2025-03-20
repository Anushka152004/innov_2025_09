
import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-500">
      <div className="text-center glass-card p-12 max-w-md">
        <h1 className="text-6xl font-bold mb-4 hero-text">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link href="/" className="glass-btn inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
