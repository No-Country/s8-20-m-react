// 'use client';
import ArrowFoward from "@/icons/ArrowFoward";
import Image from "next/image";
import { useState } from 'react';

import Link from "next/link";
import { imageDataBase, user } from "../utils/array";

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 0,
//     height: typeof window !== 'undefined' ? window.innerHeight : 0
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });


//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return windowDimensions;
// }

const DashboardProfile = () => {

  fetch('https://donarebackend.onrender.com/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res;
    }

    )
    .catch((error) => console.error(error));


  //  axios.get('https://s8-20-m-react.vercel.app/api/products')

  //  axios.get('https://donarebackend.onrender.com/api/products')
  // .then((response)=> console.log(response.data))  
  // .catch((error) => console.log(error));


  // const { width, height } = useWindowDimensions();

  const [hability, setHability] = useState(1);
  const imageDonatePerHability = 6

  /*width > 375 ? 6 : 1*/;


  const finalIndex = hability * imageDonatePerHability
  const firstIndex = (hability - 1) * imageDonatePerHability;
  console.log(Math.ceil((imageDataBase.length) / (imageDonatePerHability)));

  const idb = imageDataBase.slice(firstIndex, finalIndex);

  const moreHability = () => {
    setHability(hability + 1)
  }

  const minusHability = () => {
    setHability(hability - 1)
  }

  return (
    <div className="">
      <div className="bg-secondary h-80 relative flex justify-center items-center">

        <div className="absolute flex items-center w-full h-full justify-between">
          <Image
            src="/Empathy.png"
            alt="empathy"
            width={324}
            height={324}
            className="hidden lg:block"
          />

          <Image
            src="/Food_Donation.png"
            alt="food_donation"
            width={324}
            height={324}
            className="hidden lg:block"
          />



        </div>
        <div className="lg:w-1/3 flex flex-col items-center xs:w-full">
          <Image className="rounded-full"
            src={user.photo}
            alt=""
            width={80}
            height={80}
          />
          <h2 className="text-2xl">Hola
            {user.name} !
          </h2>
          <p className="text-lg text-center">Con cada contribución estás ayudando a cambiar vidas y hacer del mundo un lugar mejor</p>
          <Link href={`/donation`}>
            <button className="bg-primary px-36 py-3 rounded-2xl text-white">Donar</button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2>Donaciones publicadas recientemente</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative px-20">
          <div className="absolute w-full h-full left-0 top-0 flex justify-between">
            <button onClick={minusHability} disabled={hability === 1} className="mx-2 rotate-180"><ArrowFoward /></button>
            <button onClick={moreHability} disabled={hability === Math.ceil(imageDataBase.length / imageDonatePerHability)} className="mx-2 "><ArrowFoward /></button>
          </div>
          {idb.map((image, index) => (
            <div key={index} className="gridImageProfile flex-row items-center relative group rounded-3xl pt-5 pb-5">
              <Image
                src={image.src}
                alt={image.title}
                width={200}
                height={200}
              />
              <h3>{image.title}</h3>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};


export default DashboardProfile;