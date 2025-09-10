// components/common/Pill.tsx
import React from 'react';
import { FilterPillProps } from '@/interfaces';

const Pill: React.FC<FilterPillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive
          ? 'bg-blue-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;