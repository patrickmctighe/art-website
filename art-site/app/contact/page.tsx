import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-5">
      <div className="flex gap-1">
        <h1>Phone:</h1><p>704-293-1020</p>
      </div>
      <div className="flex gap-1">
        <h1>Email:</h1><p>JimMcTigheArt@gmail.com</p>
      </div>
      <div className="flex gap-1">
        <h1>Etsy:</h1><p>www.etsy.com/jimmctighe</p>
      </div>
    </div>
  );
};

export default Contact;
