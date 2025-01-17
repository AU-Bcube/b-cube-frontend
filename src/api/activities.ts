import { api } from "./api"

const getActivites = async () => {
  const response = await api.get('/activities');
  return response.data;
}

const addActivity = async (activity: any) => {
  const response = await api.post('/activities', activity);
  return response.data;
}

const deleteActivity = async (id: number) => {
  const response = await api.delete(`/activities/${id}`);
  return response.data;
}

export { getActivites, addActivity, deleteActivity };