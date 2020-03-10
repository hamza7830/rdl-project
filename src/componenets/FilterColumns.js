import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";

import {
  Card,
  CardContent,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography
} from "@material-ui/core";
import FilterValues from "./FilterValues";
import ResultBox from "./ResultBox";

const useStyles = makeStyles(() => ({
  filtercolumns: { maxHeight: "60vh", overflow: "auto", padding: "10px" },
  item: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5%"
  },
  resultSelection: {
    padding: "5%"
  }
}));

const FilterColumns = props => {
  const classes = useStyles();
  const { processedColumns } = props;
  const [selectedFilterColumns, setSelectedFilterColumns] = useState({});

  const onFilterSelected = async event => {
    const { name, value } = event.target;
    if (event.target.checked) {
      const selected = { ...selectedFilterColumns };
      selected[name] = { name, value };
      setSelectedFilterColumns(selected);
    } else {
      const selected = { ...selectedFilterColumns };
      if (name in selected) {
        delete selected[name];
      }
      setSelectedFilterColumns(selected);
    }
  };

  return (
    <Grid container>
      <Grid item className={classes.filtercolumns} md={6} sm={12} xs={12}>
        <Card>
          <CardContent>
            <Grid className={classes.item}>
              <Typography gutterBottom variant="h5">
                Filter Columns
              </Typography>
              <Divider />
              {Object.keys(processedColumns).map(field => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onFilterSelected}
                        name={processedColumns[field].Name}
                        value={processedColumns[field].label}
                        color="primary"
                      />
                    }
                    key={processedColumns[field].Name}
                    label={processedColumns[field].label}
                  />
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item className={classes.filterValues} md={4} sm={12} xs={12}>
        <FilterValues selectedFilterColumns={selectedFilterColumns} />
      </Grid>
      <Divider />
      <Grid item className={classes.resultSelection} md={12} sm={12} xs={12}>
        <ResultBox selectedFilterColumns={selectedFilterColumns} />
      </Grid>
    </Grid>
  );
};

export default FilterColumns;
