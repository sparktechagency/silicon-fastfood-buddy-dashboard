// pages/index.tsx
import React from 'react';
import FoodForm from './FoodForm';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Food Item Form</h1>
      <FoodForm />
    </div>
  );
};

export default Home;
