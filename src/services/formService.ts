import api from "../config/axios";

export interface Person {
  name: string
  cpf: string
  email: string
  phone: string
  image?: string
  dateBirth: string
  address: Address
}

export interface Address {
  street: string
  number: string
  district: string
  complement: string
  CEP: string
  city: string
  state: string
  country: string
}

export async function createForm(data : Person){
  try {
    return await api.post<{id: number}>('/persons', data)
  } catch (error) {
    console.log(error);
  }
}

export async function updateForm(id: string, data : Exclude<Person, "image">){
  try {
    return await api.put<{id: number}>(`/persons/${id}`, data)
  } catch (error) {
    console.log(error);
  }
}

export async function uploadImg(id: number, data : File){
  try {
    return await api.post(`/upload-image/${id}`, {image: data}, {headers: {
      'Content-Type': "multipart/form-data"
    }})
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(id : String){
  return await api.get(`/persons/${id}`);
}