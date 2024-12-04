import React from 'react';
import Calculator from '../components/Calculator';
import SeoContent from '../components/SeoContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Calculator />
        <SeoContent />
      </div>
    </div>
  );
}