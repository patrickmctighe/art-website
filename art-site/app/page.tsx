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
        <div className="w-1/3">
          <p>
          Jim Mctighe’s interest in art began with his drawings at age five. That interest led him to study art at East Carolina University, Parson School of Design, the Pratt Institute in New York City and the Penland School in North Carolina where he did numerous intensives in sculpture and photography. <br/>

One such intensive was with the renowned sculptor Henry Moore and resulted in Jim having three of his own pieces showcased in national tours. <br/>

Following his time as a sculptor, Jim provided for his family by applying his creative energies to a successful career in advertising that he enjoyed for over 25 years.  <br/>

Upon retiring from the corporate world, Jim and is family moved to Mexico for 5 years where his creativity was sparked once again.  <br/>

The beauty of Mexico, with its bold colors and beautiful architecture, combined with Jim’s unique perspective of seeing the simple things of life in a beautiful way resulted in a style of photography he’s applied to every photo he’s taken since.  <br/>

Jim captures everyday life through the lens of his camera in a way that reflects his special ability to see beauty and value everything around him. <br/>

A prolific artist ,im’s unique work is created not only from what he sees with the lens of his camera, but through his original digital process that makes his artwork stand out as something to be admired and enjoyed by all who see it. <br/>

Each piece of art, though first captured through the lens of his camera, culminates as a piece that will capture your heart. 
          </p>
        </div>
      </div></div>
    </main>
  );
}
