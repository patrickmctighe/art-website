import React from "react";
import Image from "next/image";

const art = () => {
  return (
    <div className="flex justify-center items-center h-3/4">
      <div className="carousel w-1/2 h-full overflow-hidden">
        <div
          id="slide1"
          className="carousel-item relative w-full flex justify-center items-center flex-col"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/barn.jpg"
              className="w-full border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide13" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <h1>This is a great barn img by Jim McTighe 2020</h1>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            {" "}
            <Image
              alt="art"
              src="/donkey.jpg"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            {" "}
            <Image
              alt="art"
              src="/fisherman.jpg"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/flowers.JPG"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
              
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/greenDawn.jpg"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide6"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/horses.jpg"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide7" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide7"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/koi.jpg"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide8" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide8"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/pastelplayground.jpg"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide9" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide9"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/roses.jpg"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide10" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide10"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/stag.JPG"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide9" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide11" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide11"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className=" relative">
            {" "}
            <Image
              alt="art"
              src="/yellowBall.jpg"
              className=" border-4 border-white"
              width={400}
              height={400}
            
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide10" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide12" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide12"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            {" "}
            <Image
              alt="art"
              src="/zebraPlant.JPG"
              className="w-full  border-4 border-white"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide11" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide13" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide13"
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <div className="relative">
            <Image
              alt="art"
              src="/zionReflection.JPG"
              className=" border-4 border-white"
              width={437}
              height={500}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide12" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default art;
