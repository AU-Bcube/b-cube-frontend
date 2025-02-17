import { defaultFetch } from "./api";

const getExecutives = async () => {
  try {
    const response = await defaultFetch("/executives");
    return response;
  } catch (error) {
    console.error("회장단 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
}

export { getExecutives };