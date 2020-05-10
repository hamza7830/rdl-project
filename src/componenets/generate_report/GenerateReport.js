import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Topbar from "../topbar/TopBar";
import { onGenerateReport } from "../../redux/actions/GenerateReportAction";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    // margin: theme.spacing(2),
    minWidth: 180,
  },
  topbar: {
    maxHeight: "50%",
    backgroundColor: "#3f51b5",
    color: "#FFFFFF",
    fontFamily: "Times New Roman, Times, serif",
  },
}));
const GenerateReport = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [report, setReport] = useState("");
  const generateReportResult = useSelector(
    (state) => state.generateReportReducer.generateReportResult
  );

  const handleReport = (event) => {
    console.log("event is ", event.target.value);
    if (event.target.value === "report") {
      dispatch(onGenerateReport());
    }
    setReport(event.target.value);
  };

  return (
    <>
      <Grid container>
        {/* <Grid item className={classes.topbar} sm={12} md={12} xs={12}>
          <Topbar />
        </Grid>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-native-simple">
            Select Reports
          </InputLabel>
          <Select
            native
            id="age-native-simple"
            value={report}
            onChange={handleReport}
            label="Select Report"
          >
            <option aria-label="None" value="" />
            <option value={"report"}>Report new </option>
          </Select>
        </FormControl> */}
      </Grid>
    </>
  );
};

export default GenerateReport;
