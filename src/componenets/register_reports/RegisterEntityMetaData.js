import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { Grid, Card, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getRegisterEntityMetadata } from "../redux/actions/ColumnsActions";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  CardContent,
  CardActions,
  Divider,
  Typography,
  TextField,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
const useStyles = makeStyles((theme) => ({
  registerEntityClass: {
    padding: "20px",
    borderRadius: "10px",
  },
}));
const RegisterEntityMetaData = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [OpenInputDialogueBox, setOpenInputDialogueBox] = useState(true);
  const [OpenResultDialogueBox, setOpenResultDialogueBox] = useState(true);
  const [value, setValue] = useState("");
  const [wcu, setwcu] = useState("");
  const [rcu, setrcu] = useState("");
  const [metadataloading, setmetadataLoading] = useState(false);
  const [jsonPath, setJsonPath] = useState("");
  const entityMetadata = useSelector(
    (state) => state.registerReducer.entityMetadata
  );

  const onHandleInputCloseAndRefresh = () => {
    setOpenInputDialogueBox(false);
    window.location.reload(false);
  };
  const onHandleResultCloseAndRefresh = () => {
    setOpenResultDialogueBox(false);
    window.location.reload(false);
  };

  const inputJsonPath = (e) => {
    const jsonPathValue = e.target.value;
    setJsonPath(jsonPathValue);
  };
  const inputWcu = (e) => {
    setwcu(e.target.value);
  };
  const inputRcu = (e) => {
    setrcu(e.target.value);
  };
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  const onclick = () => {
    setOpenInputDialogueBox(false);
    setmetadataLoading(true);
    const EnvironmentParams = {
      Row_Json: `${jsonPath}`,
      CreateTable: `${value}`,
      wcu: `${wcu}`,
      rcu: `${rcu}`,
    };
    dispatch(getRegisterEntityMetadata(EnvironmentParams));
  };

  return (
    <>
      <Grid>
        {metadataloading ? (
          Object.keys(entityMetadata).length > 0 ? (
            <Dialog
              fullWidth
              open={OpenResultDialogueBox}
              aria-labelledby="form-dialog-title"
            >
              <Card>
                <DialogTitle id="form-dialog-title">Report Result:</DialogTitle>
                <DialogContent>{entityMetadata} </DialogContent>
                <DialogActions>
                  <Button
                    onClick={onHandleResultCloseAndRefresh}
                    color="primary"
                  >
                    Close
                  </Button>
                </DialogActions>
              </Card>
            </Dialog>
          ) : (
            <Dialog
              open={OpenResultDialogueBox}
              aria-labelledby="form-dialog-title"
            >
              <Card>
                <CircularProgress size={80} />
              </Card>
            </Dialog>
          )
        ) : (
          <Dialog
            fullWidth
            open={OpenInputDialogueBox}
            aria-labelledby="form-dialog-title"
          >
            <Card className={classes.registerEntityClass}>
              <Typography variant="h6">Enter JSON Path</Typography>
              <Divider />
              <CardContent>
                <div>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    onChange={inputJsonPath}
                  />
                </div>
              </CardContent>
              <Typography variant="h6">want to Create Table</Typography>
              <Divider />

              <RadioGroup value={value} onChange={handleRadioChange}>
                <FormControlLabel
                  value="true"
                  control={<Radio color="primary" />}
                  label="True"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio color="primary" />}
                  label="False"
                />
              </RadioGroup>
              <Typography variant="h6">Enter WCU</Typography>
              <Divider />
              <CardContent>
                <div>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    onChange={inputWcu}
                    type="number"
                  />
                </div>
              </CardContent>
              <Typography variant="h6">Enter RCU</Typography>
              <Divider />
              <CardContent>
                <div>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    onChange={inputRcu}
                    type="number"
                  />
                </div>
              </CardContent>
              <Divider />
              <CardActions>
                <Button color="primary" variant="contained" onClick={onclick}>
                  Submit
                </Button>
              </CardActions>
              <DialogActions>
                <Button onClick={onHandleInputCloseAndRefresh} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Card>
          </Dialog>
        )}
      </Grid>
    </>
  );
};

export default RegisterEntityMetaData;
