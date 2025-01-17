import {useQuery} from '@tanstack/react-query'
import { getActivites } from '@/api';

const useFetchActivites = () => {
  return useQuery({
    queryKey: ['activites'],
    queryFn: getActivites,
  })
};

export {useFetchActivites};