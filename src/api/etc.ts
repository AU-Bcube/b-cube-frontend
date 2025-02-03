import { api } from "./api";

const getEtc = async () => {
  try {
    const response = await api.get("/etc");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("기타 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};

export { getEtc };