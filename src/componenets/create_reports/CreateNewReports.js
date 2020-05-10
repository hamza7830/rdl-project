import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import Topbar from "../topbar/TopBar";
import { Grid } from "@material-ui/core";

import SelectionColumns from "./SelectionColumns";
import FilterColumns from "./FilterColumns";
import { getColumns } from "../../redux/actions/ColumnsActions";

const useStyles = makeStyles((theme) => ({
  root: {},
  topbar: {
    maxHeight: "50%",
    backgroundColor: "#3f51b5",
    color: "#FFFFFF",
    fontFamily: "Times New Roman, Times, serif",
  },
}));
const CreateNewReports = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const columnNames = useSelector(
    (state) => state.generateQueryReducer.columns
  );
  const [processedColumns, setProcessedColumns] = useState([]);

  useEffect(() => {
    try {
      dispatch(getColumns());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    let columns, columnsNew;
    if (columnNames.length > 0) {
      columns = JSON.parse(columnNames);
      const columnsField = Object.values(columns) || [];
      columnsNew = columnsField.map((obj) => ({
        ...obj,
        label: obj.Name.split("_")
          .map((subObj) => subObj.charAt(0).toUpperCase() + subObj.slice(1))
          .join(" "),
      }));
      setProcessedColumns(columnsNew);
    }
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

export default CreateNewReports;
