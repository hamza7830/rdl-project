import {
  SET_SELECTED_COLUMNS,
  SET_FILTER_COLUMNS,
  SET_UUID_KEY,
  GET_JOBID_STARTED,
  GET_JOBID_SUCCEEDED,
  GET_JOBID_FAILED,
  GET_FILES_URL_STARTED,
  GET_FILES_URL_SUCCEEDED,
  GET_FILES_URL_FAILED,
  GLUE_JOB_RUNNING,
  GET_EXECUTION_ARN_SUCCEEDED,
  GET_EXECUTION_ARN_STARTED,
  GET_EXECUTION_ARN_FAILED,
  SET_WEBSOCKET_REPORT_3,
} from "../actions/ColumnsActions";

const defaultState = {
  isLoadingReport: false,
  isLoadingFeedbackQuery: false,
  error: {},
  errorExecutionArn: {},
  jobId: {},
  key: {},
  filesUrl: [],
  glueJobState: false,
  selectedColumns: [],
  filterValues: {},
  executionData: [],
  WebsocketData: {},
};
const ReportsReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case GET_EXECUTION_ARN_STARTED:
      newState = {
        ...state,
        isLoadingReport: true,
      };
      return newState;

    case GET_EXECUTION_ARN_FAILED:
      newState = {
        ...state,
        isLoadingReport: false,
        errorExecutionArn: action.error,
      };
      return newState;
    case GET_EXECUTION_ARN_SUCCEEDED:
      newState = {
        ...state,
        // isLoadingReport: false,
        executionData: action.response.data,
      };
      return newState;

    case GET_JOBID_STARTED:
      newState = {
        ...state,
        isLoadingFeedbackQuery: true,
      };
      return newState;

    case GET_JOBID_FAILED:
      newState = {
        ...state,
        // isLoadingFeedbackQuery: false,
        error: action.error,
      };
      return newState;
    case GET_JOBID_SUCCEEDED:
      newState = {
        ...state,
        // isLoadingFeedbackQuery: false,
        jobId: action.response.data,
      };
      return newState;
    case GET_FILES_URL_STARTED:
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;

    case GET_FILES_URL_FAILED:
      newState = {
        ...state,
        isLoading: false,
        error: action.error,
      };
      return newState;
    case GET_FILES_URL_SUCCEEDED:
      newState = {
        ...state,
        isLoading: false,
        filesUrl: action.response,
      };
      return newState;

    case SET_SELECTED_COLUMNS:
      newState = {
        ...state,
        selectedColumns: action.columns,
      };
      return newState;
    case SET_FILTER_COLUMNS:
      newState = {
        ...state,
        filterValues: action.columns,
      };
      return newState;

    case SET_UUID_KEY:
      newState = {
        ...state,
        key: action.key,
      };
      return newState;

    case SET_WEBSOCKET_REPORT_3:
      newState = {
        ...state,
        WebsocketData: action.data,
      };
      return newState;

    case GLUE_JOB_RUNNING:
      newState = {
        ...state,
        glueJobState: action.state,
      };
      return newState;

    default:
      return state;
  }
};

export default ReportsReducer;
