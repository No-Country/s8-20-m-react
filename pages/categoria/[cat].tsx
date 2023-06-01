import ArrowRight from "@/icons/ArrowRight";
import FilterIcon from "@/icons/FilterIcon";
import Link from "next/link";
import { useRouter } from "next/router";

function ItemList() {

    const router = useRouter();
    const { cat } = router.query

    const catName = cat as string;

    const data = [...(new Array(10))]

    return (
        <div className="min-h-screen bg-[#f8f8f8] lg:px-24">

            <div className="flex justify-between px-4 lg:flex-col">
                <div className="flex lg:border-b-2 lg:pb-3 lg:border-[#b6b6b6]">
                    <Link href="/categorias" className="flex items-center"> <ArrowRight /> </Link>
                    <h1 className="text-2xl lg:text-3xl capitalize">{catName.replace('-', ' ')}</h1>
                </div>
                <button className="flex items-center content-center lg:mt-8">
                    <FilterIcon className="w-6 h-6 lg:w-12 lg:h-12" />
                    <span className="text-sm w-fit lg:text-3xl ">Filtrar</span>
                </button>
            </div>

            <ul className="grid grid-cols-2 gap-x-2 gap-y-6 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-28">
                {data.map((e, idx) => <li className="rounded-[10px] overflow-hidden bg-white" key={idx}>
                    <Link href="/item/id">
                        <div className="w-full h-[166px] bg-gray "></div>
                        <h2 className="text-xl mt-2 text-center py-2 text-neutro">Titulo</h2>
                    </Link>
                </li>)}
            </ul>
        </div>
    );
}

export default ItemList;



