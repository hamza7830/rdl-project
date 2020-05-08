import {
  GET_COLUMNS_FAILED,
  GET_COLUMNS_STARTED,
  GET_COLUMNS_SUCCEEDED,
  GET_QUERY_RESULT_STARTED,
  GET_QUERY_RESULT_SUCCEEDED,
  GET_QUERY_RESULT_FAILED,
} from "../actions/ColumnsActions";

const defaultState = {
  isLoading: false,
  isResultLoading: false,
  columns: [],
  error: {},
  result: {},
};
const GenerateQueryReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
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

    case GET_QUERY_RESULT_STARTED:
      newState = {
        ...state,
        isResultLoading: true,
      };
      return newState;

    case GET_QUERY_RESULT_FAILED:
      newState = {
        ...state,
        isResultLoading: false,
        error: action.error,
      };
      return newState;

    case GET_QUERY_RESULT_SUCCEEDED:
      newState = {
        ...state,
        isResultLoading: false,
        result: action.response.data.body,
      };
      return newState;

    default:
      return state;
  }
};

export default GenerateQueryReducer;
