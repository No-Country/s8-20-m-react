import Image from "next/image";

const Categorias = () => {
  const images = [
    { title: 'Juguetes', src: '/Category1.png' },
    { title: 'Calzado', src: '/Category2.png' },
    { title: 'Utiles escolares', src: '/Category3.png' },
    { title: 'Alimentos no perecederos', src: '/Category4.png' },
    { title: 'Ropa', src: '/Category5.png' },
  ];

  return (
    <div className="bg-background h-full pt-10 ">
      <div>
        <div className="flex container mx-auto px-4 pt-10 pb-10 justify-around ">
            <h2 className="text-4xl">CATEGORIAS</h2>  
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
          <div className="flex flex-col items-center relative group rounded-3xl h-80 ">
            <Image 
              src={images[0].src} 
              alt={images[0].title}
              width={300} 
              height={300}
              
            />
            <div className="absolute inset-0  opacity-0 transition duration-300 group-hover:opacity-25 rounded-3xl "></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300  group-hover:opacity-100 text-white font-bold text-lg ">
              {images[0].title}
            </div>
          </div>
          <div className="flex flex-col items-center relative group rounded-3xl h-80">
            <Image 
              src={images[1].src} 
              alt={images[1].title}
              width={300} 
              height={300}
            />
            <div className="absolute inset-0  opacity-0 transition duration-300 group-hover:opacity-25 rounded-3xl"></div>
            <div className="absolute inset-0  flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100  text-white font-bold text-lg">
              {images[1].title}
            </div>
          </div>
          <div className="flex flex-col items-center relative group rounded-3xl h-80">
            <Image 
              src={images[2].src} 
              alt={images[2].title}
              width={300} 
              height={300}
            />
            <div className="absolute inset-0  opacity-0 transition duration-300 group-hover:opacity-25 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100  text-white font-bold text-lg">
              {images[2].title}
            </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-2 gap-4">
          <div className="flex flex-col items-center relative group rounded-3xl h-80">
            <Image 
              src={images[3].src} 
              alt={images[3].title}
              width={300} 
              height={300}
            />
            <div className="absolute inset-0  opacity-0 transition duration-300 group-hover:opacity-25 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100  text-white font-bold text-lg">
              {images[3].title}
            </div>
          </div>
          <div className="flex flex-col items-center relative group rounded-3xl h-80">
            <Image 
              src={images[4].src} 
              alt={images[4].title}
              width={300} 
              height={300}
            />
            <div className="absolute inset-0  opacity-0 transition duration-300 group-hover:opacity-25 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100  text-white font-bold text-lg">
              {images[4].title}
            </div>
          </div>
          </div>
          </div>
          </div>
  )}

  export default Categorias;