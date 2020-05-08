import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { Grid, Card, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getRegisterEnvironmentGroup } from "../actions/ColumnsActions";
import {
  CardContent,
  CardActions,
  Divider,
  Typography,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  registerEnvironmentClass: {
    padding: "20px",
    borderRadius: "10px",
  },
}));

const RegisterEnvironments = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [OpenInputDialogueBox, setOpenInputDialogueBox] = useState(true);
  const [OpenResultDialogueBox, setOpenResultDialogueBox] = useState(true);
  const [loading, setLoading] = useState(false);
  const [jsonPath, setJsonPath] = useState("");
  const registerEnvironment = useSelector(
    (state) => state.registerReducer.registerEnvironment
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

  const onclick = () => {
    setOpenInputDialogueBox(false);
    setLoading(true);
    const EnvironmentParams = {
      json: `${jsonPath}`,
    };
    dispatch(getRegisterEnvironmentGroup(EnvironmentParams));
  };

  return (
    <>
      <Grid>
        {loading ? (
          Object.keys(registerEnvironment).length > 0 ? (
            <Dialog
              fullWidth
              open={OpenResultDialogueBox}
              aria-labelledby="form-dialog-title"
            >
              <Card>
                <DialogTitle id="form-dialog-title">Report Result:</DialogTitle>
                <DialogContent>{registerEnvironment["message"]} </DialogContent>
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
            <Card className={classes.registerEnvironmentClass}>
              <Typography variant="h5">Enter JSON Path</Typography>
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

export default RegisterEnvironments;
