export interface PetImage {
  image: string;
}

export interface PetDataInterface {
  id: number;
  name: string;
  age: number;
  gender: string;
  price: number;
  owner_username: string;
  breed_name: string;
  description: string;
  breed_description: string;
  pet_image?: PetImage[];
}
