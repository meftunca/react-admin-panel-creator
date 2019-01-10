import React from "react";
import Grid from "@material-ui/core/Grid";
import TODOLIST from "./components/todo";
import TwitterApi from "./components/twitter";

const Home = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} md={6}>
        <TODOLIST />
      </Grid>
      <Grid item xs={12} md={6}>
        <TwitterApi />
      </Grid>
    </Grid>
  );
};
export default Home;
