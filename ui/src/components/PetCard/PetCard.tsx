import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";
import type { PetCardProps } from "./PetCardProps.type";
import { useNavigate } from "react-router-dom";

function PetCard({
  id,
  name,
  age,
  price,
  gender,
  breedName,
  description,
  petImage,
}: PetCardProps) {
  const navigate = useNavigate();

  return (
    <Grid size={4} key={id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={petImage?.[0]?.image}
          title="boxer pet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={() => navigate(`/pet-detail/${id}`)}
          >
            Ver detalhes
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PetCard;
