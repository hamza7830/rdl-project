import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import { Toolbar } from "@material-ui/core";
// import RefreshIcon from "@material-ui/icons/Refresh";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import Icon from "@material-ui/core/Icon";

import { Grid } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

const Topbar = () => {
  // const classes = useStyles();
  // const refreshMe = () => {
  //   window.location.reload(false);
  // };
  return (
    <>
      <Toolbar>
        {/* <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button> */}
        <Grid container>
          <Grid item sm={10} md={10} xs={10}>
            <h2>Recruiting DataLake</h2>
          </Grid>
        </Grid>
        {/* <Grid container>
          <Grid item sm={4} md={4} xs={4}>
            <Button
              variant="contained"
              startIcon={<RefreshIcon />}
              color="default"
              onClick={refreshMe}
            >
              Reload Page
            </Button>{" "}
          </Grid>
        </Grid> */}
      </Toolbar>
    </>
  );
};

export default Topbar;
