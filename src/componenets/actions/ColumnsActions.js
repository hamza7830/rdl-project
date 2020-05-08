import Axios from "axios";

export const GET_COLUMNS_STARTED = "GET_COLUMNS_STARTED";
export const GET_COLUMNS_SUCCEEDED = "GET_COLUMNS_SUCCEEDED";
export const GET_COLUMNS_FAILED = "GET_COLUMNS_FAILED";
export const GET_QUERY_RESULT_STARTED = "GET_QUERY_RESULT_STARTED";
export const GET_QUERY_RESULT_SUCCEEDED = "GET_QUERY_RESULT_SUCCEEDED";
export const GET_QUERY_RESULT_FAILED = "GET_QUERY_RESULT_FAILED";

export const GET_JOBID_STARTED = "GET_JOBID_STARTED";
export const GET_JOBID_SUCCEEDED = "GET_JOBID_SUCCEEDED";
export const GET_JOBID_FAILED = "GET_JOBID_FAILED";

export const REGISTER_ENTITY_METADATA_STARTED =
  "REGISTER_ENTITY_METADATA_STARTED";
export const REGISTER_ENTITY_METADATA_SUCCEEDED =
  "REGISTER_ENTITY_METADATA_SUCCEEDED";
export const REGISTER_ENTITY_METADATA_FAILED =
  "REGISTER_ENTITY_METADATA_FAILED";

export const GET_REGISTER_ENVIRONMENT_STARTED =
  "GET_REGISTER_ENVIRONMENT_STARTED";
export const GET_REGISTER_ENVIRONMENT_SUCCEEDED =
  "GET_REGISTER_ENVIRONMENT_SUCCEEDED";
export const GET_REGISTER_ENVIRONMENT_FAILED =
  "GET_REGISTER_ENVIRONMENT_FAILED";

export const GET_FILES_URL_STARTED = "GET_FILES_URL_STARTED";
export const GET_FILES_URL_SUCCEEDED = "GET_FILES_URL_SUCCEEDED";
export const GET_FILES_URL_FAILED = "GET_FILES_URL_FAILED";

export const GET_EXECUTION_ARN_STARTED = "GET_EXECUTION_ARN_STARTED";
export const GET_EXECUTION_ARN_SUCCEEDED = "GET_EXECUTION_ARN_SUCCEEDED";
export const GET_EXECUTION_ARN_FAILED = "GET_EXECUTION_ARN_FAILED";

export const GET_CONNECTION_ESTABLISH_STARTED =
  "GET_CONNECTION_ESTABLISH_STARTED";
export const GET_CONNECTION_ESTABLISH_SUCCEEDED =
  "GET_CONNECTION_ESTABLISH_SUCCEEDED";
export const GET_CONNECTION_ESTABLISH_FAILED =
  "GET_CONNECTION_ESTABLISH_FAILED";

export const GLUE_JOB_RUNNING = "GLUE_JOB_RUNNING";
export const SET_SELECTED_COLUMNS = "SET_SELECTED_COLUMNS";
export const SET_FILTER_COLUMNS = "SET_FILTER_COLUMNS";
export const SET_UUID_KEY = "SET_UUID_KEY";
export const SET_WEBSOCKET_REPORT_3 = "SET_WEBSOCKET_REPORT_3";

const onGetRegisterEntityMetadataStarted = () => ({
  type: REGISTER_ENTITY_METADATA_STARTED,
});

const onGetRegisterEntityMetadataSucceeded = (response) => ({
  type: REGISTER_ENTITY_METADATA_SUCCEEDED,
  response,
});

const onGetRegisterEntityMetadataFailed = (error) => ({
  type: REGISTER_ENTITY_METADATA_FAILED,
  error,
});

const onGetRegisterEnvironmentStarted = () => ({
  type: GET_REGISTER_ENVIRONMENT_STARTED,
});

const onGetRegisterEnvironmentSucceeded = (response) => ({
  type: GET_REGISTER_ENVIRONMENT_SUCCEEDED,
  response,
});

const onGetRegisterEnvironmentFailed = (error) => ({
  type: GET_REGISTER_ENVIRONMENT_FAILED,
  error,
});

const onGetExecutionArnStarted = () => ({
  type: GET_EXECUTION_ARN_STARTED,
});

const onGetExecutionArnSucceeded = (response) => ({
  type: GET_EXECUTION_ARN_SUCCEEDED,
  response,
});

const onGetExecutionArnFailed = (error) => ({
  type: GET_EXECUTION_ARN_FAILED,
  error,
});

const onGetColumnsStarted = () => ({
  type: GET_COLUMNS_STARTED,
});

const onGetColumnsSucceeded = (response) => ({
  type: GET_COLUMNS_SUCCEEDED,
  response,
});

const onGetColumnsFailed = (error) => ({
  type: GET_COLUMNS_FAILED,
  error,
});
const onGetJobIdStarted = () => ({
  type: GET_JOBID_STARTED,
});

const onGetJobIdSucceeded = (response) => ({
  type: GET_JOBID_SUCCEEDED,
  response,
});

const onGetJobIdFailed = (error) => ({
  type: GET_JOBID_FAILED,
  error,
});
const onGetFilesUrlStarted = () => ({
  type: GET_FILES_URL_STARTED,
});

const onGetFilesUrlSucceeded = (response) => ({
  type: GET_FILES_URL_SUCCEEDED,
  response,
});

const onGetFilesUrlFailed = (error) => ({
  type: GET_FILES_URL_FAILED,
  error,
});

const onGetResultStarted = () => ({
  type: GET_QUERY_RESULT_STARTED,
});

const onGetResultSucceeded = (response) => ({
  type: GET_QUERY_RESULT_SUCCEEDED,
  response,
});

const onGetResultFailed = (error) => ({
  type: GET_QUERY_RESULT_FAILED,
  error,
});

const onSetSelectedColumns = (columns) => ({
  type: SET_SELECTED_COLUMNS,
  columns,
});

const onGlueJobStatus = (state) => ({
  type: GLUE_JOB_RUNNING,
  state,
});

const onSetUuidKey = (key) => ({
  type: SET_UUID_KEY,
  key,
});

const onSetWebsocketReport3 = (data) => ({
  type: SET_WEBSOCKET_REPORT_3,
  data,
});

const onSetFilterColumns = (columns) => ({
  type: SET_FILTER_COLUMNS,
  columns,
});

export const setGlueJobStatus = (state) => (dispatch) => {
  dispatch(onGlueJobStatus(state));
};
export const setSelectedColumns = (columns) => (dispatch) => {
  dispatch(onSetSelectedColumns(columns));
};

export const setUuidKey = (key) => (dispatch) => {
  dispatch(onSetUuidKey(key));
};

export const setWebsocketReport3 = (data) => (dispatch) => {
  dispatch(onSetWebsocketReport3(data));
};

export const setFilterColumns = (columns) => (dispatch) => {
  dispatch(onSetFilterColumns(columns));
};

const token = "ok";
export const getColumns = () => (dispatch) => {
  dispatch(onGetColumnsStarted());
  const getUrl =
    "https://5umr66kn2j.execute-api.us-east-1.amazonaws.com/dev/candidates/attributes";
  return Axios.get(getUrl, {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      dispatch(onGetColumnsSucceeded(response));
      return response;
    })
    .catch((error) => {
      dispatch(onGetColumnsFailed(error.message));
      throw error;
    });
};
export const getJobId = (params) => (dispatch) => {
  dispatch(onGetJobIdStarted());
  const getUrl =
    "https://5umr66kn2j.execute-api.us-east-1.amazonaws.com/dev/start-glue-job";
  return Axios.post(getUrl, params, {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log("job ID is ", response);
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      dispatch(onGetJobIdSucceeded(response));
      return response;
    })
    .catch((error) => {
      dispatch(onGetJobIdFailed(error.message));
      throw error;
    });
};

const instance = Axios.create({
  baseURL: "https://5umr66kn2j.execute-api.us-east-1.amazonaws.com/dev",
  timeout: 10000,
  headers: { Authorization: `${token}` },
});

export const getFilesUrl = (params) => (dispatch) => {
  dispatch(setGlueJobStatus(false));
  dispatch(onGetFilesUrlStarted());
  console.log("Params for Files URL is ", params);
  const getUrl = "/get-all-files-path-s3-folder";
  instance
    .post(getUrl, params)
    .then((response) => {
      console.log("Files URL is ", response);
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      if (response.data.body === "Currently job is in RUNNING state") {
        dispatch(setGlueJobStatus(true));
      } else {
        dispatch(setGlueJobStatus(false));
      }
      dispatch(onGetFilesUrlSucceeded(response));
      return response;
    })
    .catch((error) => {
      dispatch(onGetFilesUrlFailed(error.message));
      throw error;
    });
};

export const getResult = (params) => (dispatch) => {
  dispatch(onGetResultStarted());
  console.log("result Payload is ", params);
  const url = `https://5umr66kn2j.execute-api.us-east-1.amazonaws.com/dev/candidates/query`;
  return Axios.post(url, params, {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      if (response.data.statusCode !== 200) {
        throw Error(response.data.body);
      }
      dispatch(onGetResultSucceeded(response));
      return response;
    })
    .catch((error) => {
      dispatch(onGetResultFailed(error.message));
      return error;
    });
};
export const getexecutionArn = (params) => (dispatch) => {
  dispatch(onGetExecutionArnStarted());
  console.log("executionArn Payload is >>>>>>>>>>>>>>>>>>>>>> ", params);
  const url =
    "https://xc2o24eztg.execute-api.us-east-1.amazonaws.com/poc/stepfunctions/startexecution";
  return Axios.post(url, params)
    .then((response) => {
      console.log(
        "responce is of get execution payload is >>>>>>>>> ",
        response
      );
      if (response.status !== 200) {
        throw Error(response.data.body);
      }
      dispatch(onGetExecutionArnSucceeded(response));
      return response;
    })
    .catch((error) => {
      dispatch(onGetExecutionArnFailed(error.message));
      return error;
    });
};

export const getRegisterEnvironmentGroup = (params) => (dispatch) => {
  dispatch(onGetRegisterEnvironmentStarted());
  console.log(
    "getRegisterEnvironmentGroup Payload is >>>>>>>>>>>>>>>>>>>>>> ",
    params
  );
  const url =
    "https://5umr66kn2j.execute-api.us-east-1.amazonaws.com/dev/metadata/register/environments-groups";
  return Axios.post(url, params, {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log(
        "responce is of get eenvironmenttttttttt is >>>>>>>>> ",
        response
      );
      if (response.status !== 200) {
        throw Error(response.data.body);
      }
      dispatch(onGetRegisterEnvironmentSucceeded(response));
      return response;
    })
    .catch((error) => {
      dispatch(onGetRegisterEnvironmentFailed(error.message));
      return error;
    });
};
export const getRegisterEntityMetadata = (params) => (dispatch) => {
  dispatch(onGetRegisterEntityMetadataStarted());
  console.log(
    "onGetRegisterEntityMetadataStarted Payload is >>>>>>>>>>>>>>>>>>>>>> ",
    params
  );
  const url =
    "https://5umr66kn2j.execute-api.us-east-1.amazonaws.com/dev/metadata/register/entity";
  return Axios.post(url, params, {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log(
        "responce is of get onGetRegisterEntityMetadataStarted is >>>>>>>>> ",
        response
      );
      if (response.status !== 200) {
        throw Error(response.data.body);
      }
      dispatch(onGetRegisterEntityMetadataSucceeded(response));
      return response;
    })
    .catch((error) => {
      dispatch(onGetRegisterEntityMetadataFailed(error.message));
      return error;
    });
};
