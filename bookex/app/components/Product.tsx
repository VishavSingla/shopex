"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image, { StaticImageData } from 'next/image'
import Header from './Header'
import channelImage from "./mm.png";
interface productsProps {
    title: string;
    description: string;
    price: string;
    image: StaticImageData;
    id: number;
    category: string;
    rating: number;
    buyers: number;
}

function Product({ title, description, price, image, id, category, rating, buyers }: productsProps) {
  return (
    <div className="w-1/5 cursor-default ml-10 bg-white rounded-lg shadow-md border border-gray-300 cursor-default">
      <div className="flex ">
      <Image className="w-100 h-15 object-contain justify-center sm:max-h-96" src={image} alt="Description" />
      </div>
      <div className="mt-4 p-4">
        <div className="">
          <h4 className="text-xl font-semibold">{title}</h4>
          <h5 className="text-gray-500">{category}</h5>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        
        <div className="flex items-center ">
          <span className="text-yellow-500 mr-1">{rating}</span>
          <span>({buyers} buyers)</span>
        </div>
        
        <div className="">
          <h3 className="text-2xl font-bold">{price}</h3>
        </div>
      </div>
      
    </div>
  );
}


export default Product;