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
        image="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
