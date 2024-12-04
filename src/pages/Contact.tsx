import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Heart } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-red-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">Have questions about Zone 2 training or our calculator? Our fitness experts are here to help!</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-2" />
                  <span>support@zone2calculator.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-2" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-red-600 mr-2" />
                  <span>Training advice available</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Training Tips</h3>
                <ul className="list-disc pl-4 text-red-800">
                  <li>Stay consistent with your Zone 2 training</li>
                  <li>Monitor your heart rate regularly</li>
                  <li>Build a strong aerobic base</li>
                  <li>Focus on proper form and technique</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}