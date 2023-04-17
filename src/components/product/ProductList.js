import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductList = ({ post }) => {
  const { body, id, title } = post;

  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title.slice(0, 15).toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body.slice(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink to={`singleproduct/${id}`}>
          <Button variant="outlined">Read more</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default ProductList;
