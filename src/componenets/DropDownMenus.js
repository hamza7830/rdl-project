// import React, { useState } from "react";
// import uuid from "react-uuid";
// import { makeStyles } from "@material-ui/core/styles";

// import { Grid } from "@material-ui/core";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getJobId,
//   setUuidKey,
//   getexecutionArn,
// } from "./actions/ColumnsActions";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import WebSocketReport3 from "./WebSocketReport3.js";
// import RegisterEnvironments from "./RegisterEnvironments.js";
// import RegisterEntityMetaData from "./RegisterEntityMetaData.js";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(2),
//     minWidth: 160,
//   },
// }));

// const DropDownMenus = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const [report, setReport] = useState("");
//   const [environmentsAndGroup, setEnvironmentsAndGroup] = useState(false);
//   const [entityMetadata, setEntityMetadata] = useState(false);
//   const filteredValues = useSelector((state) => state.filterValues);
//   const executionData = useSelector((state) => state.executionData);

//   const onFeedback = () => {
//     let key = uuid();
//     const filteredAttributes = JSON.stringify(filteredValues)
//       .replace(/:/g, "=")
//       .replace(/{/g, "")
//       .replace(/}/g, "")
//       .replace(/,/g, "&")
//       .replace(/"/g, "");
//     const params = {
//       Arguments: {
//         "--uuid": key,
//         "--report": "Report 2",
//         "--where": filteredAttributes ? filteredAttributes : " ",
//         "--primary_entity": "report2_candidates_zohaa",
//         "--secondary_entity": "report2_candidates_feedback",
//       },
//       JobName: "candidates-query",
//     };
//     try {
//       dispatch(getJobId(params));
//       dispatch(setUuidKey(key));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // let email = ["muhammad.hamza@northbaysolutions.net"];

//   const onExecutionArn = (reportName) => {
//     let executionKey = uuid();
//     const msg = {
//       glueJob: "AthenaQueryReport",
//       glueJobArguments: {
//         "--uuid": `${executionKey}`,
//         "--table_name": "DLA_Reports",
//         "--report": `${reportName}`,
//         "--email_addresses": "[]",
//         //JSON.stringify(email).replace(/\\/g, ""),
//       },
//       // type: "signedUrl",
//       // bucket_name: "rdl-faizan-cdc",
//     };

//     const Input = JSON.stringify(msg);

//     const executionParams = {
//       input: `${Input}`,
//       // name: `${executionKey}`,
//       stateMachineArn:
//         "arn:aws:states:us-east-1:777929656848:stateMachine:rdl-websocket-workflow",
//       // "arn:aws:states:us-east-1:777929656848:stateMachine:rdl-glue-job-state-machine",
//     };
//     try {
//       console.log("execution is ", executionParams);
//       dispatch(getexecutionArn(executionParams));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleReport = (event) => {
//     console.log("event is ", event.target.value);
//     if (event.target.value === "feedbackReport") {
//       onFeedback();
//     } else {
//       onExecutionArn(event.target.value);
//     }
//     setReport(event.target.value);
//   };

//   const handleRegister = (event) => {
//     console.log("event is ", event.target.value);
//     if (event.target.value === "environmentsGroup") {
//       setEnvironmentsAndGroup(true);
//     } else if (event.target.value === "metaData") {
//       setEntityMetadata(true);
//     }
//     setReport(event.target.value);
//   };

//   return (
//     <>
//       <Grid>
//         <FormControl variant="outlined" className={classes.formControl}>
//           <InputLabel id="demo-simple-select-outlined-label">
//             Select Reports
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             value={report}
//             onChange={handleReport}
//             label="Select Report"
//           >
//             <MenuItem value={"feedbackReport"}>FeedBack Report</MenuItem>
//             <MenuItem value={"Report 4.2"}>Report 4.2</MenuItem>
//             <MenuItem value={"Report 5.2A"}>Report 5.2A</MenuItem>
//           </Select>
//         </FormControl>
//         {/* {Object.keys(jobId).length > 0 && <FilesUrl jobId={jobId} />} */}
//         {Object.keys(executionData).length > 0 ? <WebSocketReport3 /> : ""}
//         {/* {console.log("executionData is >>>>>>>.", executionData["executionArn"])} */}
//       </Grid>
//       <Grid>
//         <FormControl variant="outlined" className={classes.formControl}>
//           <InputLabel id="demo-simple-select-outlined-label">
//             Register
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             value={report}
//             onChange={handleRegister}
//             label="Register"
//           >
//             <MenuItem value={"environmentsGroup"}>
//               Register Environments and Groups
//             </MenuItem>
//             <MenuItem value={"metaData"}>Register Entity Metadata</MenuItem>
//           </Select>
//         </FormControl>
//         {environmentsAndGroup ? <RegisterEnvironments /> : ""}
//         {entityMetadata ? <RegisterEntityMetaData /> : ""}
//       </Grid>
//     </>
//   );
// };

// export default DropDownMenus;
