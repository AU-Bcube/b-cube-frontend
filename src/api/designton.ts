import { api } from "./api"

const getDesignton = async () => {
  try{
    const response = await api.get('/designton');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("디자인톤 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }  
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