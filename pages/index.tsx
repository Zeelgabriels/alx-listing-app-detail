// pages/index.tsx
import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, FILTER_OPTIONS, HERO_BACKGROUND_IMAGE } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/common/Pill';
import PropertyCard from '@/components/common/PropertyCard';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      // If clicking the same filter, reset to show all
      setActiveFilter('');
      setFilteredProperties(PROPERTYLISTINGSAMPLE);
    } else {
      // Filter properties based on selected category
      setActiveFilter(filter);
      const filtered = PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.some(cat => {
          const categoryLower = cat.toLowerCase();
          const filterLower = filter.toLowerCase();
          return categoryLower.includes(filterLower) || filterLower.includes(categoryLower);
        })
      );
      setFilteredProperties(filtered);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat h-96 md:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HERO_BACKGROUND_IMAGE})`
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Find Properties by Category
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {FILTER_OPTIONS.map((filter) => (
                <Pill
                  key={filter}
                  label={filter}
                  isActive={activeFilter === filter}
                  onClick={() => handleFilterClick(filter)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Listing Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {activeFilter ? `${activeFilter} Properties` : 'Featured Properties'}
            </h2>
            <p className="text-gray-600">
              {filteredProperties.length} properties found
            </p>
          </div>

          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property, index) => (
                <PropertyCard 
                  key={`${property.name}-${index}`} 
                  property={property} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No properties found</h3>
              <p className="text-gray-500">Try selecting a different filter to see more properties.</p>
              <button 
                onClick={() => handleFilterClick('')}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Show All Properties
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}