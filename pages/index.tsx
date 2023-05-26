import { useExample } from '@/Lib/services/example.services';
import CategoryComponent from "../pages/componentes/CategoryComponent"
import ropaImage from "../pages/public/pru.jpg";


const categories = [
  { id: 1, name: 'Ropa', image:ropaImage},
  { id: 2, name: 'Alimentos' , image:ropaImage },
  { id: 3, name: 'Muebles', image:ropaImage },
  { id: 3, name: 'Juguetes', image:ropaImage },
  { id: 3, name: 'Libros', image:ropaImage },
  { id: 4, name: 'Varios', image:ropaImage }
];

export default function Home() {
  const { data, error, isLoading } = useExample();

  console.log(data, error, isLoading);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     
      <main className="flex flex-col items-center my-8">
        <p className="text-gray-800 text-xl mb-6">Este es mi contenido</p>
        <CategoryComponent categories={categories} />
      </main>
      
    </div>
  );
}





  

