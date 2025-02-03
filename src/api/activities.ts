import { api } from "./api"

const getActivities = async () => {
  try {
    const response = await api.get("/activities");
    return response.data;
  } catch (error) {
    console.error("활동 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};

const addActivity = async (activity: any) => {
  const response = await api.post('/activities', activity);
  return response.data;
}

const deleteActivity = async (id: number) => {
  const response = await api.delete(`/activities/${id}`);
  return response.data;
}

export { getActivities, addActivity, deleteActivity };