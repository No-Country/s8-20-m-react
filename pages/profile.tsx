import Button from '@/components/Button';
import HeartIconComp from '@/components/HeartIconComp';
import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  const user = {
    name: 'Lucía Torres',
    city: 'Buenos Aires, Argentina',
    photo:
      'https://i1.rgstatic.net/ii/profile.image/1031678541717514-1622982740292_Q128/Olga-Torres-Vargas.jpg',
  };

  const images = [
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 1',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 2',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 3',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 1',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 2',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 3',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 1',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 2',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 3',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 1',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 2',
      subtitle: 'Remera Casual',
    },
    {
      src: '/ProductEjemplo.png',
      title: 'Imagen 3',
      subtitle: 'Remera Casual',
    },
  ];

  return (
    <div className="h-full pt-10 bg-background ">
      <div className="container flex mx-auto ">
        <div className="container flex gap-4 px-4 mx-auto">
          <div className="">
            <Image
              src={user.photo}
              alt={user.name}
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl">{user.name}</h2>
            <p>{user.city}</p>
            <div className="bg-gray-800">
              <button className="px-12 py-1 text-white bg-black rounded-xl">
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <HeartIconComp count={4} />
          <HeartIconComp count={2} />
        </div>
      </div>
      <div>
        <div className="container flex justify-between px-4 pt-10 pb-10 mx-auto ">
          <div>
            <h2 className="text-4xl">Mis Donaciones</h2>
          </div>
          <div className="flex justify-around w-1/4">
            <Link href={`/donation`}>
              <button className="py-3 text-white bg-primary px-14 rounded-2xl">
                Donar
              </button>
            </Link>
          </div>
        </div>
      </div >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex flex-col items-end pb-4 bg-white group rounded-3xl"
            >
              <Image
                className="relative"
                src={image.src}
                alt={image.title}
                width={400}
                height={400}
              />
              <div className="">{image.subtitle}</div>
              <div className="absolute z-20">
                <Button />
              </div>

              {/* <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-primary group-hover:opacity-100 rounded-3xl"></div> */}
              {/* <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                   
                  <CheckHeart/>
                    
                </div> */}

              {/* <p>{image.subtitle}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Profile;
