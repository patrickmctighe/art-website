import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="flex  items-center justify-center h-full w-full gap-5">
      <div>
        {" "}
        <Image src="/artist.jpg" alt="beachPic" width={300} height={300} />
      </div>
      <div className=" flex flex-col items-start justify-center gap-5">
        {" "}
        <h1>Contact</h1>
        <div className="flex gap-1">
          <h1>Phone:</h1>
          <p>704-293-1020</p>
        </div>
        <div className="flex gap-1">
          <h1>Email:</h1>
          <p>JimMcTigheArt@gmail.com</p>
        </div>
        <div>Shop</div>
        <div className="flex gap-1">
          <h1>Etsy:</h1>
          <p>www.etsy.com/jimmctighe</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
