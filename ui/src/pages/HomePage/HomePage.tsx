import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import DogCard from "../../components/DogCard/DogCard";
import { getAllDogs } from "../../api/dogs";

function HomePage() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await getAllDogs();
      setDogs(response);
      console.log(response);
    };
    fetchDogs();
  }, []);

  return (
    <Grid>
      <Typography component="h1">HOME PAGE</Typography>
      <Grid>
        <Typography>Cachorros a venda</Typography>
        <Grid container spacing={2}>
          {dogs && dogs.map((dog) => <DogCard dog={dog} />)}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
