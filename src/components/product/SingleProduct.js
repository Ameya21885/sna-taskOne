import React, { useState, useEffect } from "react";
import API from "../../api/Api";
import Button from "@mui/material/Button";
import { useParams, NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const SingleProduct = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const { id } = useParams();

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await API.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);
  return (
    <div>
      <NavLink to="/">
        <Button variant="contained">Back</Button>
      </NavLink>
      <h1>SingleProduct</h1>

      {isError !== "" && <h2>{isError}</h2>}
      {myData
        .filter((post) => post.id == id)
        .map((post) => {
          const { body, id, title, userId } = post;
          return (
            <Card
              key={id}
              sx={{ maxWidth: "100%" }}
              style={{ width: "70%", margin: "10px auto 10px auto" }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {id}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                  {userId}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {title.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {body}
                </Typography>
              </CardContent>
              <CardActions>
                <NavLink to={`singleproduct/${id}`}>
                  <Button variant="outlined">Read more</Button>
                </NavLink>
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
};

export default SingleProduct;
