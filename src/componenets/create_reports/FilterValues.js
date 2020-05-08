import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Button,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";

import { setFilterColumns, getResult } from "../actions/ColumnsActions";

const useStyles = makeStyles(() => ({
  inputbox: { maxHeight: "60vh", overflow: "auto" },
  textfield: {
    padding: "5px",
  },
}));

const FilterValues = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selectedFilterColumns } = props;
  let [filterValues, setFilterValues] = useState({});
  const selectedColumns = useSelector(
    (state) => state.reportsReducer.selectedColumns
  );
  const filteredValues = useSelector(
    (state) => state.reportsReducer.filterValues
  );

  const inputFiterValue = (e) => {
    const filterValue = e.target.value;
    const filterKey = e.target.name;
    filterValues[filterKey] = filterValue;
    setFilterValues(filterValues);
    dispatch(setFilterColumns(filterValues));
  };

  const onclick = () => {
    const selectedAttributes = selectedColumns.toString();
    const filteredAttributes = JSON.stringify(filteredValues)
      .replace(/:/g, "=")
      .replace(/{/g, "")
      .replace(/}/g, "")
      .replace(/,/g, "&")
      .replace(/"/g, "");
    const queryParams = {
      where: filteredAttributes,
      select: selectedAttributes,
    };
    const payload = JSON.stringify(queryParams);
    try {
      dispatch(getResult(payload));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {selectedFilterColumns && Object.keys(selectedFilterColumns).length > 0 && (
        <>
          <Card>
            <Grid item className={classes.inputbox} md={12} xs={12}>
              <Typography variant="h5">Filter Candidates</Typography>
              <Divider />
              <CardContent>
                {Object.keys(selectedFilterColumns).map((field) => (
                  <div
                    className={classes.textfield}
                    key={selectedFilterColumns[field].name}
                  >
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label={selectedFilterColumns[field].value}
                      name={selectedFilterColumns[field].name}
                      variant="outlined"
                      onChange={inputFiterValue}
                    />
                  </div>
                ))}
              </CardContent>
              <Divider />
            </Grid>
          </Card>
          <CardActions>
            <Button color="primary" variant="outlined" onClick={onclick}>
              Submit
            </Button>
          </CardActions>
        </>
      )}
    </>
  );
};

export default FilterValues;
