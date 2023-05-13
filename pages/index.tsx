import { useExample } from '@/Lib/services/example.services';

export default function Home() {
  const { data, error, isLoading } = useExample();

  console.log(data, error, isLoading);

  return (
    <div className="bg-white">
      <div className="bg-red-200">HOME</div>
    </div>
  );
}
