import { Card, CardContent, Typography, CardActions, Button, Grow } from '@mui/material';

const ItemCard = ({ title, body }) => {
  return (
    <Grow in={true} timeout={1000}>
      <Card sx={{ maxWidth: 345, margin: '1rem', boxShadow: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grow>
  );
};

export default ItemCard;
