import React from "react";
import Image from "next/image";

const art = () => {
  return (
    
<div className="carousel w-3/4 h-auto overflow-hidden pt-20">
  {/* 1 */}
  <div id="slide1" className="carousel-item relative w-full  flex justify-center items-center flex-col">
  <div className="imgAndSlider">  <img src="/barn.jpg" className="barn" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide13" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div></div>
  
    <h1>hi</h1>
  </div> 
   {/* 2 */}
  <div id="slide2" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">    <img src="/donkey.jpg" className="donkey" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div></div>

    <h1>hi</h1>
  </div> 
   {/* 3 */}
  <div id="slide3" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">  <img src="/fisherman.jpg" className="fisherman" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div></div>
  
    <h1>hi</h1>
  </div> 
   {/* 4 */}
  <div id="slide4" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">   <img src="/flowers.jpg" className="flowers" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div></div>
 
    <h1>hi</h1>
  </div>
   {/* 5 */}
  <div id="slide5" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">   <img src="/greenDawn.jpg" className="dawn" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div></div>
 
    <h1>hi</h1>
  </div> 
   {/* 6 */}
  <div id="slide6" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">  <img src="/horses.jpg" className="horses" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide7" className="btn btn-circle">❯</a>
    </div></div>
  
    <h1>hi</h1>
  </div> 
   {/* 7 */}
  <div id="slide7" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">  <img src="/koi.jpg" className="koi" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide8" className="btn btn-circle">❯</a>
    </div></div>
  
    <h1>hi</h1>
  </div> 
   {/* 8 */}
  <div id="slide8" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">    <img src="/pastelplayground.jpg" className="playground" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle">❮</a> 
      <a href="#slide9" className="btn btn-circle">❯</a>
    </div></div>

    <h1>hi</h1>
  </div> 
   {/* 9 */}
  <div id="slide9" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider"> <img src="/roses.jpg" className="roses" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn btn-circle">❮</a> 
      <a href="#slide10" className="btn btn-circle">❯</a>
    </div></div>
   
    <h1>hi</h1>
  </div> 
   {/* 10 */}
  <div id="slide10" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">  <img src="/stag.jpg" className="stag" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide9" className="btn btn-circle">❮</a> 
      <a href="#slide11" className="btn btn-circle">❯</a>
    </div></div>
  
    <h1>hi</h1>
  </div> 
   {/* 11 */}
  <div id="slide11" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">    <img src="/yellowBall.jpg" className="ball" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide10" className="btn btn-circle">❮</a> 
      <a href="#slide12" className="btn btn-circle">❯</a>
    </div></div>

    <h1>hi</h1>
  </div> 
   {/* 12 */}
  <div id="slide12" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider">  <img src="/zebraPlant.jpg" className="zebra" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide11" className="btn btn-circle">❮</a> 
      <a href="#slide13" className="btn btn-circle">❯</a>
    </div></div>
  
    <h1>hi</h1>
  </div> 
   {/* 13 */}
  <div id="slide13" className="carousel-item relative w-full flex justify-center items-center flex-col">
  <div className="imgAndSlider"> <img src="/zionReflection.jpg" className="zion" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide12" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div></div>
   
    <h1>hi</h1>
  </div> 
</div>
  )
};

export default art;
