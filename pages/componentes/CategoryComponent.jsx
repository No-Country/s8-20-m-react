import React from 'react';
import Image from "next/image";

const CategoryComponent = ({categories}) => {
  return (
    
   <div className="flex-row items-center bg-gray-200 p-4 rounded-md">
  <div className="bg-white p-6 rounded-md w-full">
    <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">
      Categorías
    </h2>
    <div className="flex justify-center flex-wrap">
      {categories.map((category) => (
        <div 
          key={category.id} 
          className="p-2 rounded-md overflow-hidden shadow-md flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
          style={{margin: "10px"}}
        >
          <Image 
            src={category.image} 
            alt={category.name} 
            width={200} 
            height={300} 
            className="h-56 object-cover" 
          />
          <div className={`p-2 ${category.color} rounded-b-lg`}>
            <h3 className="text-white font-bold">{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-end pt-4">
      <a
        className="text-red-600 hover:text-red-800 font-medium text-sm"
        href="#"
      >
        Ver todas las categorías &rarr;
      </a>
    </div>
  </div>
</div>

  );
};

export default CategoryComponent;
