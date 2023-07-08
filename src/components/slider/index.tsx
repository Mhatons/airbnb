import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MySlider = ({gallery}: any) => {
 return (
  <div className="max-w-4xl rounded-2xl mx-auto">
   <Carousel
    showThumbs={false} // Hide thumbnail navigation
    infiniteLoop={false} // Enable infinite loop
    autoPlay={false} // Enable auto play
    interval={3000} // Auto play interval in milliseconds
    showStatus={false} // Hide slide status
    showIndicators={true} // Display slide indicators
    showArrows={true} // Display navigation arrows
   >
    {
     gallery?.map((gallery:any) => (
      <div key={gallery.id} className="bg-gray-100 rounded-2xl h-[300px] flex items-center justify-center">
       <img src={gallery} className=" rounded-2xl h-full w-full object-cover" alt="gallery" />
      </div>
     ))
    }
   </Carousel>
  </div>
 );
};

export default MySlider;

