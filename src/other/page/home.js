import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TODOLIST from "./components/todo";
import TwitterApi from "./components/twitter";
const uniqid = require("uniqid");

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
