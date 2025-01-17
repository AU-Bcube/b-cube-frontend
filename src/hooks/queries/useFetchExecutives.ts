import {useQuery} from '@tanstack/react-query'
import { getExecutives } from '@/api';

const useFetchExecutives = () => {
  return useQuery({
    queryKey: ['executives'],
    queryFn: getExecutives,
  })
};

export {useFetchExecutives};