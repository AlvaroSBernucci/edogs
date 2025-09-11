export type TypeRoute = {
  id: string;
};

export type TypePetOwner = {
  username: string;
  email: string;
  img_profile: string | null;
};

export type TypePetBreed = {
  id: number;
  name: string;
  description?: string;
};

export type TypePet = {
  age: number;
  description: string;
  gender: string;
  name: string;
  price: string;
  pet_owner: TypePetOwner;
  pet_breed: TypePetBreed;
};
