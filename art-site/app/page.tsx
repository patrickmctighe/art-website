import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" ">
      <div className="w-full h-full flex justify-center items-center gap-8">
        <div>
          <Image
            alt="art"
            src="/beach.jpeg"
            className=""
            width={300}
            height={300}
          />
        </div>
        <div className="w-1/4">
          <p>
            I am a passionate photographer and digital artist with a keen eye
            for capturing the beauty of the world around me. From a young age, I
            found solace behind the lens of a camera, using it as a tool to
            express my creativity and showcase the wonders of life.My journey
            into photography began as a hobby, but quickly evolved into a
            lifelong passion. I am constantly inspired by the intricate details
            of nature, the vibrant colors of urban landscapes, and the
            compelling stories of the people I encounter. Through my lens, I aim
            to capture fleeting moments and evoke emotions that resonate with
            viewers.In addition to photography, I am deeply immersed in the
            world of digital art. Using advanced editing techniques and
            software, I transform my photographs into captivating works of art.
            Whether through surreal manipulations, vibrant collages, or abstract
            compositions, I strive to push the boundaries of creativity and
            challenge conventional perceptions.For me, photography and digital
            art are more than just mediums of expression – they are a reflection
            of my innermost thoughts, feelings, and experiences. Through my
            work, I seek to inspire others to see the world with fresh eyes, to
            appreciate the beauty in the ordinary, and to find joy in the
            creative process.My ultimate goal as a photographer and digital
            artist is to leave a lasting impact on those who view my work.
            Whether it's sparking a sense of wonder, igniting a passion for art,
            or encouraging introspection, I hope to touch hearts and minds
            through the power of imagery.In essence, I am an artist on a
            perpetual journey of exploration and self-discovery. 
          </p>
        </div>
      </div></div>
    </main>
  );
}
