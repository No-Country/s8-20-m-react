import { useExample } from '@/Lib/services/example.services';




export default function Home() {
  const { data, error, isLoading } = useExample();

  console.log(data, error, isLoading);

  return (
    <div className="bg-white">
      <div className="bg-red">HOME HOLA</div>
      <h2 className="bg-blue-200">Buenas Buenas</h2>
     
    </div>
  );
}