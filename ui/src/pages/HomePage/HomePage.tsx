import useAxios from "../../hook/useAxios";
import PetCard from "../../components/PetCard/PetCard";
import { Grid, Typography } from "@mui/material";
import type { PetDataInterface } from "./HomePage.types";
import CircularProgress from "@mui/material/CircularProgress";

function HomePage() {
  const {
    data: pets,
    loading: loadingPets,
    error: errorPets,
  } = useAxios<PetDataInterface[]>("/api/v1/pets/pets");

  return (
    <Grid>
      <Typography component="h1">HOME PAGE</Typography>
      <Grid container spacing={2}>
        {loadingPets ? (
          <CircularProgress />
        ) : errorPets ? (
          <Typography color="error">
            Ocorreu um erro ao carregar os pets: {errorPets.message}
          </Typography>
        ) : pets && pets.length > 0 ? (
          pets?.map((pet, index) => (
            <PetCard
              key={index}
              id={pet.id}
              name={pet.name}
              age={pet.age}
              gender={pet.gender}
              price={pet.price}
              breedName={pet.breed_name}
              description={pet.description}
              petImage={pet.pet_image}
            />
          ))
        ) : (
          <Typography variant="body1">Nenhum pet encontrado</Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default HomePage;
