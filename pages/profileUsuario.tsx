import AddDonation from '@/icons/AddDonation';
import Arrow from '@/icons/Arrow';
import Pencil from '@/icons/Pencil';
import Place from '@/icons/Place';
import Trash from '@/icons/Trash';
import Verified from '@/icons/Verified';
import { Avatar } from '@material-tailwind/react';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/ProductEjemplo.png', alt: 'Remera casual blanca' },
  { src: '/ProductEjemplo.png', alt: 'Remera casual blanca' },
  { src: '/ProductEjemplo.png', alt: 'Remera casual blanca' },
  { src: '/ProductEjemplo.png', alt: 'Remera casual blanca' },
];

const ProfileUsuario = () => {
  const [showModal, setShowModal] = useState(false);

  const handleTrashClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="p-20">
      <div className="flex pb-4">
        <div className="flex items-center justify-items-center">
          <button>
            <Arrow />
          </button>
          <h1 className="text-2xl">Remera casual blanca</h1>
        </div>
        
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src="/ProductEjemplo.png"
            width={1000}
            height={1000}
            alt="Remera casual blanca"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image src={image.src} width={500} height={500} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="pt-6 flex justify-between">
        <div className="flex">
          <Avatar
            variant="circular"
            size="lg"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <div className="pl-4 gap-y-2 flex flex-col items-left">
            <div className="flex items-center">
              <p className="text-2xl font-bold">Lucia Torres</p>
              <Verified />
            </div>
            <div className="flex items-center">
              <Place />
              <p className="font-bold">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <button className="hover:shadow rounded-full p-2">
            <AddDonation />
          </button>
          <button className="hover:shadow rounded-full p-2">
            <Pencil />
          </button>
          <button
            className="hover:shadow rounded-full p-2"
            onClick={handleTrashClick}
          >
            <Trash />
          </button>
        </div>
        {showModal && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={handleModalClose}
            ></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">
                  ¿Quiere eliminar la publicación?
                </h2>
                <div className="flex justify-end">
                  <button
                    className="px-8 py-2 text-primary bg-white rounded-lg mr-2 border border-black"
                    onClick={handleModalClose}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-8 py-2 text-white bg-primary rounded-lg"
                    onClick={handleModalClose}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="relative mt-12">
        <hr className=" bg-gray-300 h-px" />
        <button className="absolute top-1/2 left-[85%] transform -translate-x-1/2 -translate-y-1/2 rounded-sm p-3 bg-black text-white font-bold">
          Nueva Donación
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-bold pt-12">Descripción</h1>
        <p className="pt-2 text-gray font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </p>
        <div className="flex pt-8 gap-x-2">
          <h2 className="text-lg font-bold">Estado:</h2>
          <p className="text-lg font-bold">Muy bueno</p>
        </div>
        <div className="flex pt-4 gap-x-2">
          <h2 className="text-lg font-bold">Talle:</h2>
          <p className="text-lg font-bold">M</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileUsuario;
