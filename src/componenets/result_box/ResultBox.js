import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Card, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "2%",
    paddingLeft: "50%",
    display: "flex",
    "& > * + *": {
      marginLeft: "theme.spacing(2)",
    },
  },
  dialog: {
    Width: "100%",
    maxHeight: "50%",
  },
}));
const ResultBox = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const resutlLoading = useSelector(
    (state) => state.generateQueryReducer.isResultLoading
  );
  const resutlLoadingReport42 = useSelector(
    (state) => state.reportsReducer.isLoadingReport
  );
  const result = useSelector((state) => state.generateQueryReducer.result);
  const error = useSelector((state) => state.generateQueryReducer.error);
  const WebsocketData = useSelector(
    (state) => state.reportsReducer.WebsocketData
  );

  let parsedResult = {};
  if (Object.keys(result).length !== 0) {
    parsedResult = JSON.parse(result);
  }

  let errorResult = {};
  if (Object.keys(error).length !== 0) {
    errorResult = JSON.parse(error);
  }

  let report42 = {};
  if (Object.keys(WebsocketData).length !== 0) {
    report42 = JSON.parse(WebsocketData);
  }

  let reportResult = {};
  if (Object.keys(report42).length > 0 && report42["status"] === "SUCCEEDED") {
    reportResult = JSON.stringify(report42["data"])
      .replace(/"/g, "")
      .replace(/]/g, "")
      .replace(/\\/g, "")
      .replace("[", "");
  }

  const onHandleCloseAndRefresh = () => {
    setOpen(false);
    window.location.reload(false);
  };

  return (
    <>
      {resutlLoading ? (
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <Card>
            <CircularProgress size={80} />
          </Card>
        </Dialog>
      ) : (
        (Object.keys(parsedResult).length > 0 ||
          Object.keys(errorResult).length > 0) && (
          <Dialog fullWidth open={open} aria-labelledby="form-dialog-title">
            <Card className={classes.dialog}>
              <DialogTitle id="form-dialog-title">Query Result:</DialogTitle>
              <DialogContent>
                <a
                  href={`${parsedResult["S3_URL"]}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {parsedResult["S3_URL"]
                    ? parsedResult["S3_URL"]
                    : errorResult["message"]}
                </a>
              </DialogContent>
              <DialogActions>
                <Button onClick={onHandleCloseAndRefresh} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Card>
          </Dialog>
        )
      )}

      <Grid>
        {resutlLoadingReport42 ? (
          Object.keys(report42).length > 0 &&
          report42["status"] === "SUCCEEDED" ? (
            <Dialog fullWidth open={open} aria-labelledby="form-dialog-title">
              <Card>
                <DialogTitle id="form-dialog-title">Report Result:</DialogTitle>
                <DialogContent>
                  <a
                    href={`${reportResult}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {reportResult}
                  </a>
                </DialogContent>
                <DialogActions>
                  <Button onClick={onHandleCloseAndRefresh} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Card>
            </Dialog>
          ) : (
            <Dialog open={open} aria-labelledby="form-dialog-title">
              <Card>
                <CircularProgress size={80} />
              </Card>
            </Dialog>
          )
        ) : (
          ""
        )}
      </Grid>
      {Object.keys(report42).length > 0
        ? console.log("result 3 is ", report42)
        : ""}
    </>
  );
};

export default ResultBox;
