import React, { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Card,
  CardContent,
  Checkbox,
  Typography,
  Divider,
  FormControlLabel
} from "@material-ui/core";

import { setSelectedColumns } from "./actions/ColumnsActions";

const useStyles = makeStyles(theme => ({
  root: { overflow: "auto", maxHeight: "70%" },
  item: {
    display: "flex",
    flexDirection: "column"
  }
}));

const SelectionColumns = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { processedColumns } = props;
  const [selectedColumns, setSelectionColumns] = useState([]);

  const onColumnsSelected = async event => {
    const { name } = event.target;
    if (event.target.checked) {
      const selected = [...selectedColumns];
      selected.push(name);
      setSelectionColumns(selected);
      dispatch(setSelectedColumns(selected));
    } else {
      const selected = [...selectedColumns];
      const index = selected.indexOf(name);
      if (index > -1) {
        selected.splice(index, 1);
      }
      setSelectionColumns(selected);
      dispatch(setSelectedColumns(selected));
    }
  };

  return (
    <Grid container>
      <Grid item className={classes.item} md={12} sm={12} xs={12}>
        <Card className={clsx(classes.root)}>
          <CardContent>
            <Grid item className={classes.item} md={10} sm={12} xs={12}>
              <Typography variant="h5">Selection Columns</Typography>
              <Divider />
              {Object.keys(processedColumns).map(field => {
                return (
                  <FormControlLabel
                    control={
                      <div
                        className="checkbox-inline"
                        key={processedColumns[field].Name}
                      >
                        <Checkbox
                          onChange={onColumnsSelected}
                          name={processedColumns[field].Name}
                          value={processedColumns[field].Name}
                          color="primary"
                        />
                      </div>
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
    </Grid>
  );
};

export default SelectionColumns;
