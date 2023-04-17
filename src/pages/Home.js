import React, { useState, useEffect } from "react";
import API from "../api/Api";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ProductList from "../components/product/ProductList";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

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
      {isError !== "" && <h2>{isError}</h2>}

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {myData.slice(0, 20).map((post) => {
            const { body, id, title } = post;
            return (
              <Grid item xs={2} sm={4} md={4} key={id}>
                <ProductList key={id} post={post} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
