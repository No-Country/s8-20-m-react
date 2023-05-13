import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function useExample() {
  const { data, error, isLoading, mutate } = useSWR('/example', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useExample };
