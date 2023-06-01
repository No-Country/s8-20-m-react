import Image from "next/image";


const dashboardProfile = () => {
    
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
    
  ];

  
    return (
        <div>
            <div className="bg-sky-300 h-80">
              <div>
                <Image
                src="/emphaty.png"
                alt="food_donation"
                width={324}
                height={324}
              />
              </div>
              <Image
                src="/food_donation.png"
                alt="food_donation"
                width={324}
                height={324}
              />
                
              
                
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
                  {/* <Image 
                      // src={user.photo}
                      // alt="Overlay"
                      // width={25}
                      // height={25}
                   /> */}
                   
                  
                    
                  
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

export default dashboardProfile;