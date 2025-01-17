import {useQuery} from '@tanstack/react-query'
import { getDesignton } from '@/api';

const useFetchDesignton = () => {
  return useQuery({
    queryKey: ['designton'],
    queryFn: getDesignton,
  })
};

export {useFetchDesignton};