import HeartIcon from "@/icons/HeartIcon";
import Image from "next/image";



const profile = () => {

  
  const user = 
  {
    name: "Lucía Torres",
    city: "Buenos Aires, Argentina",
    photo: "https://i1.rgstatic.net/ii/profile.image/1031678541717514-1622982740292_Q128/Olga-Torres-Vargas.jpg",
  };
  
  const images = [
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 1",
      subtitle: "Descripción 1"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 2",
      subtitle: "Descripción 2"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 3",
      subtitle: "Descripción 3"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 1",
      subtitle: "Descripción 1"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 2",
      subtitle: "Descripción 2"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 3",
      subtitle: "Descripción 3"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 1",
      subtitle: "Descripción 1"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 2",
      subtitle: "Descripción 2"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 3",
      subtitle: "Descripción 3"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 1",
      subtitle: "Descripción 1"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 2",
      subtitle: "Descripción 2"
    },
    {
      src: "https://img.lovepik.com/element/45003/9415.png_860.png",
      title: "Imagen 3",
      subtitle: "Descripción 3"
    },
        // Agrega más nombres de imágenes según sea necesario
  ];
  
  return (
    <div className="bg-background h-full pt-10  ">
      <div className="flex container mx-auto ">
        <div className="flex  gap-4 container mx-auto px-4">
          <div>
            <Image src={user.photo} alt={user.name} width={80} height={80} />
          </div>
          <div>
            <h2 className="text-2xl">{user.name}</h2>
            <p>{user.city}</p>
            <div className="bg-gray-800">
              <button>Editar</button>
            </div>
          </div>
          </div>
          <div className="flex gap-4">
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
          </div>
            
      </div>
      <div>
        <div className="flex container mx-auto px-4 pt-10 pb-10 justify-between ">
          <div>
            <h2 className="text-4xl">Mis Donaciones</h2>
          </div>
          <div className="flex justify-around w-1/4" >
            <div>icon1</div>
            <div>icon2</div>
            <div>icon3</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center relative group rounded-3xl">
              <Image 
                src={image.src} 
                alt={image.title}
                width={200} 
                height={200}
            />
              
            <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Image
                      src={user.photo}
                      alt="Overlay"
                      width={25}
                      height={25}
                  />
                  
                </div>
              <h3>{image.title}</h3>
              <p>{image.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default profile;