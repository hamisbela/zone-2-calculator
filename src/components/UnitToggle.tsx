import React from 'react';

interface UnitToggleProps {
  unit: 'cm' | 'inches';
  onUnitChange: (unit: 'cm' | 'inches') => void;
}

export default function UnitToggle({ unit, onUnitChange }: UnitToggleProps) {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        type="button"
        onClick={() => onUnitChange('inches')}
        className={`px-4 py-2 rounded-md ${
          unit === 'inches'
            ? 'bg-green-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Inches
      </button>
      <button
        type="button"
        onClick={() => onUnitChange('cm')}
        className={`px-4 py-2 rounded-md ${
          unit === 'cm'
            ? 'bg-green-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Centimeters
      </button>
    </div>
  );
}