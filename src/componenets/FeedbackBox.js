import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";

import {
  Card,
  CardContent,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  CardActions,
  Button,
  Typography
} from "@material-ui/core";
import FilterValues from "./FilterValues";
import ResultBox from "./ResultBox";

const useStyles = makeStyles(() => ({
  feedback: {
    right: "0px"
  }
}));

const FilterColumns = props => {
  const classes = useStyles();

  return (
    <Grid>
      <Button
        className={classes.feedback}
        color="primary"
        variant="outlined"
        onClick={onclick}
      >
        Get FeedBack
      </Button>
    </Grid>
  );
};

export default FilterColumns;
