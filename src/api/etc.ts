import { defaultFetch } from "./api";

const getEtc = async () => {
  try {
    const response = await defaultFetch("/etc");
    return response;
  } catch (error) {
    console.error("기타 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};

export { getEtc };