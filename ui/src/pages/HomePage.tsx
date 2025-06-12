import { api } from "../utils/axios";
import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function HomePage() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await api.get("/api/v1/dogs/");
      setDogs(response.data);
      console.log(response.data);
    };
    fetchDogs();
  }, []);

  return (
    <Grid>
      <Typography component="h1">HOME PAGE</Typography>
      <Grid>
        <Typography>Cachorros a venda</Typography>
        <Grid container spacing={2}>
          {dogs &&
            dogs.map((dog) => (
              <Grid size={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.petlove.com.br/images/breeds/193522/profile/original/boxer-p.jpg?1532538439"
                    title="boxer dog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {dog.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {dog.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Mais informações</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
