import React from 'react'
import Image from 'next/image'

const art = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

<div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/barn.jpg" className="w-full"  width={500}
      height={500} /></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide13" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'> <Image alt="art"  objectFit="cover" src="/donkey.jpg" className="w-full"  width={500}
      height={500} /></div>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'> <Image alt="art"  objectFit="cover" src="/fisherman.jpg" className="w-full"  width={500}
      height={500}/></div>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/flowers.JPG" className="w-full"  width={500}
      height={500}/></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/greenDawn.jpg" className="w-full"  width={500}
      height={500}/></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/horses.jpg" className="w-full"  width={500}
      height={500} /></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide7" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide7" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/koi.jpg" className="w-full"  width={500}
      height={500}/></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide8" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide8" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/pastelplayground.jpg" className="w-full"   width={500}
      height={500}/></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle">❮</a> 
      <a href="#slide9" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide9" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/roses.jpg" className="w-full"  width={500}
      height={500} /></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn btn-circle">❮</a> 
      <a href="#slide10" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide10" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/stag.JPG" className="w-full"   width={500}
      height={500}/></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide9" className="btn btn-circle">❮</a> 
      <a href="#slide11" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide11" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'> <Image alt="art"  objectFit="cover" src="/yellowBall.jpg" className="w-full"   width={500}
      height={500}/></div>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide10" className="btn btn-circle">❮</a> 
      <a href="#slide12" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide12" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'> <Image alt="art"  objectFit="cover" src="/zebraPlant.JPG" className="w-full"  width={500}
      height={500} /></div>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide11" className="btn btn-circle">❮</a> 
      <a href="#slide13" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide13" className="carousel-item relative w-full flex justify-center items-center">
  <div className='w-500 h-500 relative'><Image alt="art"  objectFit="cover" src="/zionReflection.JPG" className="w-full"  width={500}
      height={500}/></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide12" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default art