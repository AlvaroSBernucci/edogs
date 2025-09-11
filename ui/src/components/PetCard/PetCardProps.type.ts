interface PetImage {
  image?: string;
}

export interface PetCardProps {
  id: number;
  name: string;
  age: number;
  gender: string;
  price: number;
  breedName: string;
  description: string;
  petImage?: PetImage[];
}
