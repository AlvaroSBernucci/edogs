import { useParams } from "react-router-dom";
import { getPet } from "../../api/pets";
import { useEffect, useState } from "react";
import type { TypeRoute, TypePet } from "./PetDetailPage.types";

function PetDetailPage() {
  const { id } = useParams<TypeRoute>();
  const [pet, setPet] = useState<TypePet>();

  useEffect(() => {
    if (!id) return;
    const fetchPet = async () => {
      const data = await getPet(id);
      setPet(data);
    };

    fetchPet();
  }, [id]);

  return <div>Teste</div>;
}

export default PetDetailPage;
