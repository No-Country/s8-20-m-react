import AddDonation from '@/icons/AddDonation';
import Arrow from '@/icons/Arrow';
import Pencil from '@/icons/Pencil';
import Place from '@/icons/Place';
import Trash from '@/icons/Trash';
import Verified from '@/icons/Verified';
import { Avatar, Carousel, Tooltip } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const images = [
    { src: '/ProductEjemplo.png', alt: 'Remera casual blanca' },
    { src: '/ProductEjemplo.png', alt: 'Remera casual blanca' },
    { src: '/ProductEjemplo.png', alt: 'Remera casual blanca' },
    { src: '/ProductEjemplo.png', alt: 'Remera casual blanca' },
];

const Buttons = () => {
    const [showModal, setShowModal] = useState(false);

    const handleTrashClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };
    return (
        <>
            <div className="flex items-center gap-x-8 md:gap-x-0 md:ml-auto">
                <Tooltip content="Nueva donacion" placement="bottom-end">
                    <button className="hover:shadow rounded-full p-2">
                        <AddDonation />
                    </button>
                </Tooltip>
                <Tooltip content="Editar donacion" placement="bottom-end">
                    <button className="hover:shadow rounded-full p-2">
                        <Pencil />
                    </button>
                </Tooltip>
                <Tooltip content="Eliminar donacion" placement="bottom-end">
                    <button
                        className="hover:shadow rounded-full p-2"
                        onClick={handleTrashClick}
                    >
                        <Trash />
                    </button>
                </Tooltip>
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
        </>
    );
};

const Product = () => {

    const router = useRouter();
    const { pid } = router.query

    const fetchItem = async () => {
        const data = await fetch(`http://localhost:3030/api/products/${pid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const response = await data.json();

        return response.message
    }

    const { isLoading, error, data } = useQuery({ queryKey: [`/api/products/${pid}`], queryFn: fetchItem })

    if (error) {
        return (
            <h1>Ha ocurrido un error</h1>
        )
    }

    if (isLoading) {
        return (
            <div className="p-4 md:p-20">
                <div className="flex pb-4">
                    <div className="flex items-center justify-items-center">
                        <button>
                            <Arrow />
                        </button>
                        <h1 className="text-2xl">Remera casual blanca</h1>
                    </div>
                </div>
                <Carousel className="rounded-xl md:hidden">
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center">
                            <Image
                                src={image.src}
                                width={500}
                                height={500}
                                alt={image.alt}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
                <div className="hidden md:grid md:grid-cols-2 gap-4">
                    <div>
                        <Image
                            src="/ProductEjemplo.png"
                            width={1000}
                            height={1000}
                            alt="Remera casual blanca"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[...Array(4)].map((image, index) => (
                            <div key={index} className="flex justify-center w-[500px] h-[500px] bg-gray ">
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
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
                    <div className="hidden md:block">{Buttons()}</div>
                </div>

                <hr className="bg-gray-300 mt-12 hidden md:block" />
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
                <div className="md:hidden flex justify-center">{Buttons()}</div>
            </div>
        )
    }

    return (
        <div className="p-4 md:p-20">
            <div className="flex pb-4">
                <div className="flex items-center justify-items-center">
                    <button onClick={() => { router.push("/categorias") }}>
                        <Arrow />
                    </button>
                    <h1 className="text-2xl capitalize">{data.title}</h1>
                </div>
            </div>
            <Carousel className="rounded-xl md:hidden">
                {data.code.split(',').map((e: string, idx: number) => (
                    <div key={idx} className="flex justify-center">
                        <Image
                            src={e}
                            width={500}
                            height={500}
                            alt={data.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </Carousel>

            <div className="hidden md:grid md:grid-cols-2 gap-4 ">
                <div className="col-span-3 col-start-1 row-start-1 w-[500px] h-[500px] relative overflow-hidden">
                    <Image
                        src={data.thumbnail}
                        fill
                        className="object-cover"
                        alt={data.title}
                    />
                </div>
                <div className="grid col-start-2 row-start-1 grid-cols-2 gap-4">
                    {data.code.split(',').map((e: string, idx: number) => {
                        if (e === data.thumbnail) {
                            return null;
                        }

                        return (
                            <div key={idx} className="flex justify-center w-[300px] h-[300px] bg-gray relative overflow-hidden">
                                <Image src={e} alt="" fill className="object-cover" />
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className={`my-4 ml-[85%] w-full md:w-[15%] bg-primary text-white text-sm px-4 py-3 rounded-[20px] transition-all active:bg-[#d25c5c] hover:bg-[#a22424] hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]`} onClick={() => { router.push('https://api.whatsapp.com/send?phone=1126731105') }}>Contactar</button>
            <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
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
                <div className="hidden md:block">{Buttons()}</div>
            </div>

            <hr className="bg-gray-300 mt-12 hidden md:block" />
            <div>
                <h1 className="text-2xl font-bold pt-12">Descripción</h1>
                <p className="pt-2 text-gray font-bold">
                    {data.description}
                </p>
            </div>
            <div className="md:hidden flex justify-center mt-10">{Buttons()}</div>
        </div>
    );
};

export default Product;
