import React from 'react';
import { Heart, Activity, Dumbbell, BookOpen, Target, HelpCircle } from 'lucide-react';

export default function SeoContent() {
  return (
    <div className="mt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Complete Guide to Zone 2 Heart Rate Training
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold">Zone 2 Heart Rate Calculator</h3>
            </div>
            <p className="text-gray-600">Our Zone 2 calculator helps athletes determine their optimal heart rate training zones for maximum aerobic benefits.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Aerobic Training Benefits</h3>
            </div>
            <p className="text-gray-600">Zone 2 training improves endurance, fat utilization, and cardiovascular health through targeted heart rate zones.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Understanding Zone 2 Training</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Zone 2 training occurs at 60-70% of your maximum heart rate, representing the optimal intensity for building aerobic capacity and endurance.</p>
              <p className="text-gray-600">Training in Zone 2 helps develop your aerobic system, improve fat oxidation, and build a strong cardiovascular foundation.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Benefits of Zone 2 Training</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  Improved fat oxidation and metabolic efficiency
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  Enhanced mitochondrial density and function
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  Better endurance and stamina
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  Reduced risk of overtraining and injury
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use Our Zone 2 Calculator?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Accurate heart rate zone calculations</li>
            <li>Both standard and Heart Rate Reserve methods</li>
            <li>Easy-to-use interface</li>
            <li>Free online tool for athletes</li>
            <li>Mobile-friendly design for on-the-go access</li>
          </ul>
        </div>
      </div>
    </div>
  );
}