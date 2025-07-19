interface DogOwner {
  username: string;
  email: string;
  img_profile: string | null;
}

interface Dog {
  id: number;
  name: string;
  age: number;
  breed: number;
  gender: string;
  description: string;
  price: string;
  owner: number;
  dog_owner: DogOwner;
  created_at: Date;
  updated_at: Date;
}

export interface DogCardProps {
  dog: Dog;
}
