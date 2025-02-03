import { api } from "./api"

const getDesignton = async () => {
  const response = await api.get('/designton');
  console.log(response.data);
  return response.data;
  
}

const addDesignton = async (activity: any) => {
  const response = await api.post('/designton', activity);
  return response.data;
}

const deleteDesignton = async (id: number) => {
  const response = await api.delete(`/designton/${id}`);
  return response.data;
}

export { getDesignton, addDesignton, deleteDesignton };