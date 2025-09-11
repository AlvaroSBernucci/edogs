import { api } from "../utils/axios";

export const getAllPets = async () => {
  const resp = await api.get(`api/v1/pets/pets`);
  return resp.data;
};
export const getPet = async (id: string) => {
  const resp = await api.get(`api/v1/pets/${id}`);
  return resp.data;
};
export const createPet = async (pet: object) => {
  const resp = await api.post(`api/v1/pets/`, pet);
  return resp.data;
};
export const deletePet = async (id: string) => {
  const resp = await api.delete(`api/v1/pets/${id}`);
  return resp.data;
};
export const updatePet = async (id: string, pet: object) => {
  const resp = await api.put(`api/v1/pets/${id}`, pet);
  return resp.data;
};
