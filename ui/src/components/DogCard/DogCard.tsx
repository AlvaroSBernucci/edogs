import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";
import type { DogCardProps } from "./DogCardProps.type";
import { useNavigate } from "react-router-dom";

function DogCard({ dog }: DogCardProps) {
  const navigate = useNavigate();

  return (
    <Grid size={4} key={dog.id}>
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
          <Button
            size="small"
            onClick={() => navigate(`/dog-detail/${dog.id}`)}
          >
            Mais informações
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default DogCard;
