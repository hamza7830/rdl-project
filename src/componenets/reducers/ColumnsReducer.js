import {
  GET_COLUMNS_FAILED,
  GET_COLUMNS_STARTED,
  GET_COLUMNS_SUCCEEDED,
  GET_RESULT_STARTED,
  GET_RESULT_SUCCEEDED,
  GET_RESULT_FAILED,
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
  GET_REGISTER_ENVIRONMENT_STARTED,
  GET_REGISTER_ENVIRONMENT_SUCCEEDED,
  GET_REGISTER_ENVIRONMENT_FAILED,
  REGISTER_ENTITY_METADATA_STARTED,
  REGISTER_ENTITY_METADATA_SUCCEEDED,
  REGISTER_ENTITY_METADATA_FAILED,
} from "../actions/ColumnsActions";

const defaultState = {
  isLoading: false,
  isLoadingReport: false,
  isResultLoading: false,
  isLoadingFeedbackQuery: false,
  error: {},
  errorExecutionArn: {},
  columns: [],
  result: {},
  jobId: {},
  key: {},
  filesUrl: [],
  glueJobState: false,
  selectedColumns: [],
  filterValues: {},
  executionData: [],
  WebsocketData: {},
  registerEnvironment: {},
  entityMetadata: {},
};
const columnsReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case REGISTER_ENTITY_METADATA_STARTED:
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;

    case REGISTER_ENTITY_METADATA_FAILED:
      newState = {
        ...state,
        isLoading: false,
        error: action.error,
      };
      return newState;
    case REGISTER_ENTITY_METADATA_SUCCEEDED:
      newState = {
        ...state,
        entityMetadata: action.response.data,
      };
      return newState;

    case GET_REGISTER_ENVIRONMENT_STARTED:
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;

    case GET_REGISTER_ENVIRONMENT_FAILED:
      newState = {
        ...state,
        isLoading: false,
        error: action.error,
      };
      return newState;
    case GET_REGISTER_ENVIRONMENT_SUCCEEDED:
      newState = {
        ...state,
        registerEnvironment: action.response.data,
      };
      return newState;

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
    case GET_COLUMNS_STARTED:
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;

    case GET_COLUMNS_FAILED:
      newState = {
        ...state,
        isLoading: false,
        error: action.error,
      };
      return newState;
    case GET_COLUMNS_SUCCEEDED:
      newState = {
        ...state,
        isLoading: false,
        columns: action.response.data.body,
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

    case GET_RESULT_STARTED:
      newState = {
        ...state,
        isResultLoading: true,
      };
      return newState;

    case GET_RESULT_FAILED:
      newState = {
        ...state,
        isResultLoading: false,
        error: action.error,
      };
      return newState;
    case GET_RESULT_SUCCEEDED:
      newState = {
        ...state,
        isResultLoading: false,
        result: action.response.data.body,
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

export default columnsReducer;
