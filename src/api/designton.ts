import { defaultFetch } from "./api"

const getDesignton = async () => {
  try{
    const response = await defaultFetch('/designton');
    return response
  } catch (error) {
    console.error("디자인톤 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }  
}

export { getDesignton };