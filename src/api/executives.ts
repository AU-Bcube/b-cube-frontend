import { api } from "./api";

const getExecutives = async () => {
  const response = await api.get('/executives');
  console.log(response.data);
  return response.data;
}

const addExecutive = async (executive: any) => {
  const response = await api.post('/executives', executive);
  return response.data;
}

const updateExecutive = async (id: number, executive: any) => {
  const response = await api.patch(`/executives/${id}`, executive);
  return response.data;
}

export { getExecutives, addExecutive, updateExecutive };