export type TypeRoute = {
  id: string;
};

export type TypeDogOwner = {
  username: string;
  email: string;
  img_profile: string | null;
};

export type TypeDogBreed = {
  id: number;
  name: string;
  description?: string;
};

export type TypeDog = {
  age: number;
  description: string;
  gender: string;
  name: string;
  price: string;
  dog_owner: TypeDogOwner;
  dog_breed: TypeDogBreed;
};
