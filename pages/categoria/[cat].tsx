import ArrowRight from "@/icons/ArrowRight";
import FilterIcon from "@/icons/FilterIcon";
import { useQuery } from '@tanstack/react-query';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface ItemInterface {
    _id: string,
    title: string,
    description: string,
    code: string,
    category: string,
    status: string,
    thumbnail: string
}

function ItemList() {

    const router = useRouter();
    const { cat } = router.query

    const fetchItems = async () => {
        const data = await fetch('https://donarebackend.onrender.com/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const response = await data.json();

        return response.message.filter((e: ItemInterface) => e.category === cat)
    }

    const { isLoading, error, data } = useQuery({ queryKey: [`${cat}/items`], queryFn: fetchItems })

    const catName = cat as string;

    if (error) {
        return (
            <h1>Error</h1>
        )
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#f8f8f8] lg:px-24">

                <div className="flex justify-between px-4 lg:flex-col">
                    <div className="flex lg:border-b-2 lg:pb-3 lg:border-[#b6b6b6]">
                        <Link href="/categorias" className="flex items-center"> <ArrowRight /> </Link>
                        <h1 className="text-2xl lg:text-3xl capitalize">{catName && catName.replaceAll('-', ' ')}</h1>
                    </div>
                    <button className="flex items-center lg:mt-8">
                        <FilterIcon className="w-6 h-6 lg:w-12 lg:h-12" />
                        <span className="text-sm w-fit lg:text-3xl ">Filtrar</span>
                    </button>
                </div>

                <ul className="grid grid-cols-2 gap-x-2 gap-y-6 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-28">
                    {[...(new Array(4))].map((e, idx) => <li className="rounded-[10px] overflow-hidden bg-white" key={idx}>
                        <Link href="/product">
                            <div className="w-full h-[166px] bg-gray "></div>
                            <h2 className="text-xl mt-2 text-center py-2 text-neutro"></h2>
                        </Link>
                    </li>)}
                </ul>
            </div>

        )
    }

    return (
        <div className="min-h-screen bg-[#f8f8f8] lg:px-24">
            <div className="flex justify-between px-4 lg:flex-col">
                <div className="flex lg:border-b-2 lg:pb-3 lg:border-[#b6b6b6]">
                    <Link href="/categorias" className="flex items-center"> <ArrowRight /> </Link>
                    <h1 className="text-2xl lg:text-3xl capitalize">{catName && catName.replace('-', ' ')}</h1>
                </div>
                <button className="flex items-center content-center lg:mt-8">
                    <FilterIcon className="w-6 h-6 lg:w-12 lg:h-12" />
                    <span className="text-sm w-fit lg:text-3xl ">Filtrar</span>
                </button>
            </div>

            <ul className="grid grid-cols-2 gap-x-2 gap-y-6 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-28">
                {data.map((e: ItemInterface) => <li className="rounded-[10px] overflow-hidden bg-white" key={e._id}>
                    <Link href={`/product/${e._id}`}>
                        <div className="w-full h-[166px] bg-gray relative overflow-hidden">
                            <Image src={e.thumbnail} alt={e.title} fill className="object-cover" />
                        </div>
                        <h2 className="text-xl mt-2 text-center py-2 text-neutro">{e.title}</h2>
                    </Link>
                </li>)}
            </ul>
        </div>
    );
}

export default ItemList;



