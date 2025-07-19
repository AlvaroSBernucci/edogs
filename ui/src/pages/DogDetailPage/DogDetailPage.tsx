import { useParams } from "react-router-dom";
import { getDog } from "../../api/dogs";
import { useEffect, useState } from "react";
import type { TypeRoute, TypeDog } from "./DogDetailPage.types";

function DogDetailPage() {
  const { id } = useParams<TypeRoute>();
  const [dog, setDog] = useState<TypeDog>();

  useEffect(() => {
    if (!id) return;
    const fetchDog = async () => {
      const data = await getDog(id);
      setDog(data);
      console.log(data);
    };

    fetchDog();
  }, [id]);

  return <div>Teste</div>;
}

export default DogDetailPage;
