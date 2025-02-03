import { api } from "./api";

const getExecutives = async () => {
  try {
    const response = await api.get("/executives");
    return response.data;
  } catch (error) {
    console.error("회장단 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
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