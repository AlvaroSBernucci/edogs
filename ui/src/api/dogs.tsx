import { api } from "../utils/axios";

export const getAllDogs = async () => {
  const resp = await api.get(`api/v1/dogs/`);
  return resp.data
}
export const getDog = async (id: string) => {
  const resp = await api.get(`api/v1/dogs/${id}`)
  return resp.data
};
export const createDog = async (dog: object) => {
  const resp = await api.post(`api/v1/dogs/`,dog )
  return resp.data

};
export const deleteDog = async (id: string) => {
  const resp = await api.delete(`api/v1/dogs/${id}`)
  return resp.data

};
export const updateDog = async (id: string, dog: object) => {
  const resp = await api.put(`api/v1/dogs/${id}`, dog)
  return resp.data
};
