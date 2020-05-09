import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilesUrl } from "../actions/ColumnsActions";
import { Grid, Card, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";

const FilesUrl = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const glueJobStatus = useSelector(
    (state) => state.reportsReducer.glueJobState
  );
  const jobId = useSelector((state) => state.reportsReducer.jobId);

  const key = useSelector((state) => state.reportsReducer.key);
  const filesUrl = useSelector((state) => state.reportsReducer.filesUrl);
  const feedbackQueryLoading = useSelector(
    (state) => state.reportsReducer.isLoadingFeedbackQuery
  );

  const onHandleCloseAndRefresh = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const getFilesUrlCallback = useCallback(async () => {
    console.log("job id is  ", jobId);
    if (jobId["JobRunId"].length > 0) {
      const params = {
        job_name: "candidates-query",
        report: "report2",
        run_id: jobId["JobRunId"],
        uuid: `${key}`,
      };
      try {
        dispatch(getFilesUrl(params));
      } catch {}
    }
  }, [dispatch, jobId, key]);

  useEffect(() => {
    if (glueJobStatus === true) {
      getFilesUrlCallback();
    }
  }, [getFilesUrlCallback, glueJobStatus]);

  useEffect(() => {
    getFilesUrlCallback();
  }, [getFilesUrlCallback]);

  return (
    <>
      <Grid>
        {feedbackQueryLoading ? (
          filesUrl.data &&
          filesUrl.data["body"] !== "Currently job is in RUNNING state" ? (
            <Dialog fullWidth open={open} aria-labelledby="form-dialog-title">
              <Card>
                <DialogTitle id="form-dialog-title">Query Result:</DialogTitle>
                <DialogContent>
                  <a
                    href={`${filesUrl.data["body"]}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {filesUrl.data["body"].length === 0
                      ? "Empty Array Return"
                      : filesUrl.data["body"]}
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
    </>
  );
};

export default FilesUrl;
