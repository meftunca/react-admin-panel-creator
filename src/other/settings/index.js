import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import UIController from "./components/uiController";
import Modules from "./components/modules";
import Security from "./components/security";

const Main = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={6} sm={12}>
        <Paper elevation={1}>
          <UIController />
          <Security />
        </Paper>
      </Grid>
      <Grid item md={6} sm={12}>
        <Paper elevation={1}>
          <Modules />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
