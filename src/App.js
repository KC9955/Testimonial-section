// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './App.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "./Quote.png";
import image2 from "./Quote2.png";
// import('tailwindcss').Config;
// import required modules
import { Pagination, Navigation } from "swiper";

const data = [
  {
    id:1,
    username:'Nick Poggi ',
    image:'https://images.unsplash.com/photo-1623794858861-d2c450eec992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
  },
  {
    id:2,
    username:'Zanna Ollove',
    image:'https://images.unsplash.com/photo-1663712025813-0e974544c448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  },
  {
    id:3,
    username:'Jem Branch',
    image:'https://images.unsplash.com/photo-1663520003211-b17be69172eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  }
]
function App() {
  return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centerSlide={true}
        fade={true}
        grabCursor={true}
        pagination={{
          clickable: true,
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     {data.map(user => (
      <SwiperSlide key={user.id} className="slide">
        <div className="container">
      <div className="heading" class="text-6xl mt-5 text-center font-serif"> Driving Client Success, Every Day</div>
      <div className="line" class="w-full h-full flex justify-center item-center">
      <hr className="line" class="rounded border-4 border-amber-400 opacity-100 w-3/5 mt-1 object-none object-center" />
      </div>
    <div className="subtext" class="text-slate-500 text-lg pt-2 text-center font-serif">
        Our clients see the impact that we provides, rating us <span className="bold" class="text-gray-900">4.7 out of 5</span> in overall satisfaction.
    </div>
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
            <div className="card-content">
                <div className="Quotation1">
                <img src={image1} alt="Quotation1" className="image1" class="float-left"/>
                </div>
                <p className="description" class="text-3xl text-justify font-serif leading-loose pt-28">EmbedSocial allows us to showcase social media content on our web pages in a way that's both functional and vibrant. Their library of social feed designs integrates seamlessly with our existing components and is easy to use for page editors of all skill levels.They are very skilled, experienced, and creative in their design work - they always exceed my expectations. I highly recommend them!</p>
                <div className="Quotation2">
                <img src={image2} alt="Quotation2" className="image2" class="float-right"/>
                </div>
                <div className="card-image" class=" w-full h-full flex justify-center item-center">
                  <img src={user.image} alt=""  class="rounded-full w-40 h-40 border-4 border-fuchsia-800  overflow-hidden object-cover object-center"/>
                </div>
                
                <h2 className="name" class="font-serif text-center text-4xl p-2 font-bold ">{user.username}</h2>
            <div className="social-media" class="flex justify-center item-center w-full gap-5 pb-10">
                <box-icon type='logo' name='facebook-circle' class="cursor-pointer"></box-icon>
                <box-icon type='logo' name='instagram'  class="cursor-pointer"></box-icon>
                <box-icon name='twitter' type='logo'  class="cursor-pointer"></box-icon>
            </div>   
            </div>
                </div>
                </div>
                </div>
                </div>
      </SwiperSlide>
     ))}
    </Swiper> 
  );
}

export default App;
