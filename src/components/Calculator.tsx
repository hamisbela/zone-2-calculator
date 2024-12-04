import React, { useState } from 'react';
import { Heart, Calculator as CalcIcon, Info } from 'lucide-react';
import { calculateMaxHeartRate, calculateZone2, type HeartRateResult } from '../utils/heartRate';

export default function Calculator() {
  const [inputs, setInputs] = useState({
    age: '',
    restingHeartRate: ''
  });

  const [result, setResult] = useState<HeartRateResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(inputs.age);
    const rhr = inputs.restingHeartRate ? parseInt(inputs.restingHeartRate) : undefined;
    const mhr = calculateMaxHeartRate(age);
    const results = calculateZone2(mhr, rhr);
    setResult(results);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Heart className="h-8 w-8 text-red-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Zone 2 Heart Rate Calculator</h1>
      </div>

      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <div className="flex items-center mb-2">
          <Info className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-blue-800">What is Zone 2 Training?</h2>
        </div>
        <p className="text-blue-700">
          Zone 2 training occurs at 60-70% of your maximum heart rate. This aerobic zone is ideal for building endurance and improving fat utilization.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Age (years)
          </label>
          <input
            type="number"
            value={inputs.age}
            onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="1"
            max="120"
            placeholder="Enter your age"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Resting Heart Rate (optional)
          </label>
          <input
            type="number"
            value={inputs.restingHeartRate}
            onChange={(e) => setInputs({ ...inputs, restingHeartRate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="30"
            max="120"
            placeholder="Enter your resting heart rate"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate Zone 2 Heart Rate
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 rounded-md bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Results</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <div className="flex items-center mb-2">
                <CalcIcon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Maximum Heart Rate</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">
                {result.maxHeartRate} BPM
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium mb-2">Zone 2 Heart Rate Range</h3>
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-gray-600 mb-1">Standard Method:</p>
                  <p className="text-lg font-semibold text-blue-800">
                    {result.zone2Range.lowerBound} - {result.zone2Range.upperBound} BPM
                  </p>
                </div>

                {result.hrr && (
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-gray-600 mb-1">Heart Rate Reserve Method:</p>
                    <p className="text-lg font-semibold text-green-800">
                      {result.hrr.zone2Range.lowerBound} - {result.hrr.zone2Range.upperBound} BPM
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}