import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";

import Topbar from "./TopBar";
import SelectionColumns from "./SelectionColumns";
import FilterColumns from "./FilterColumns";

import { Grid } from "@material-ui/core";
import { getColumns } from "./actions/ColumnsActions";

const useStyles = makeStyles(theme => ({
  root: {},
  topbar: {
    maxHeight: "50%",
    backgroundColor: "#3f51b5",
    color: "#FFFFFF",
    fontFamily: "Times New Roman, Times, serif"
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const columnNames = useSelector(state => state.columns);
  const [processedColumns, setProcessedColumns] = useState([]);

  useEffect(() => {
    try {
      dispatch(getColumns());
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const columns = Object.values(columnNames);
    const columnsNew = columns.map(obj => ({
      ...obj,
      label: obj.Name.split("_")
        .map(subObj => subObj.charAt(0).toUpperCase() + subObj.slice(1))
        .join(" ")
    }));
    setProcessedColumns(columnsNew);
  }, [columnNames]);

  return (
    <>
      <Grid container>
        <Grid item className={classes.topbar} sm={12} md={12} xs={12}>
          <Topbar />
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <Grid container>
            <Grid item sm={12} md={3}>
              <SelectionColumns processedColumns={processedColumns} />
            </Grid>
            <Grid item md={9} sm={12} xs={12}>
              <FilterColumns processedColumns={processedColumns} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
