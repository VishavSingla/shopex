'use client';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        // className="w-full"
      >
        <div className="">
          <img  src="/mm.jpeg" alt='' />
        </div>
        <div className="">
          <img src="/mm.jpeg" alt='' />
        </div>
        <div className="">
          <img src="/mm.jpeg" alt='' />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
