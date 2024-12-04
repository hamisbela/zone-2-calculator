import React from 'react';
import { Heart, Activity, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-red-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Welcome to Zone 2 Calculator, your trusted resource for heart rate training and endurance optimization.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="flex flex-col items-center text-center p-4">
                <Activity className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To help athletes optimize their training through precise heart rate zone calculations.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Accuracy, scientific approach, and user-friendly tools for the fitness community.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Community</h3>
                <p className="text-gray-600">Supporting athletes of all levels in achieving their endurance goals.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose Our Calculator</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Evidence-based heart rate calculations</li>
              <li>Support for both standard and Heart Rate Reserve methods</li>
              <li>Clear, intuitive interface</li>
              <li>Mobile-friendly design</li>
              <li>Regular updates based on sports science research</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Expertise</h2>
            <p className="text-gray-600">Our team combines sports science knowledge with software development expertise to deliver accurate and reliable heart rate zone calculations. We understand the importance of proper training intensity in endurance development and strive to provide tools that help athletes train smarter, not harder.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">The Science Behind Zone 2</h2>
            <p className="text-gray-600">Zone 2 training, occurring at 60-70% of your maximum heart rate, is crucial for developing aerobic capacity and metabolic efficiency. This "conversational pace" training helps build mitochondrial density, improve fat oxidation, and establish a strong cardiovascular foundation without excessive stress on the body.</p>
          </div>
        </div>
      </div>
    </div>
  );
}