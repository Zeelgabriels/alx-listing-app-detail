import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

export default Card;