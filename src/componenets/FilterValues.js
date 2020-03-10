import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { setFilterColumns, getResult } from "./actions/ColumnsActions";

import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Button,
  Typography,
  Grid,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  inputbox: { maxHeight: "60vh", overflow: "auto" },
  textfield: {
    padding: "5px"
  }
}));

const FilterValues = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selectedFilterColumns } = props;
  const [filterValues, setFilterValues] = useState({});
  const selectedColumns = useSelector(state => state.selectedColumns);
  const filteredValues = useSelector(state => state.filterValues);

  const inputFiterValue = e => {
    const filterValue = e.target.value;
    const filterKey = e.target.name;
    filterValues[filterKey] = filterValue;
    setFilterValues(filterValues);
    dispatch(setFilterColumns(filterValues));
  };

  const onclick = () => {
    const queryParams = { where: filteredValues, select: selectedColumns };
    try {
      dispatch(getResult(queryParams));
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
              <Typography variant="h5">Filter Columns</Typography>
              <Divider />
              <CardContent>
                {Object.keys(selectedFilterColumns).map(field => (
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