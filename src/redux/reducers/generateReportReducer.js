import {
  GENERATE_REPORT_FAILED,
  GENERATE_REPORT_SUCCEEDED,
  GENERATE_REPORT_STARTED,
} from "../actions/GenerateReportAction";

const defaultState = {
  generateResultLoading: false,
  error: {},
  generateReportResult: {},
};
const generateReportReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case GENERATE_REPORT_STARTED:
      newState = {
        ...state,
        generateResultLoading: true,
      };
      return newState;

    case GENERATE_REPORT_FAILED:
      newState = {
        ...state,
        generateResultLoading: false,
        error: action.error,
      };
      return newState;
    case GENERATE_REPORT_SUCCEEDED:
      newState = {
        ...state,
        generateReportResult: action.response.data.body,
      };
      return newState;

    default:
      return state;
  }
};

export default generateReportReducer;
