import React from "react";

import { Toolbar } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const Topbar = () => {
  return (
    <>
      <Toolbar>
        <Grid container>
          <Grid item sm={10} md={10} xs={10}>
            <h2>Recruiting DataLake</h2>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
};

export default Topbar;
