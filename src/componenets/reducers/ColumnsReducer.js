import {
  GET_COLUMNS_FAILED,
  GET_COLUMNS_STARTED,
  GET_COLUMNS_SUCCEEDED,
  GET_RESULT_STARTED,
  GET_RESULT_SUCCEEDED,
  GET_RESULT_FAILED,
  SET_SELECTED_COLUMNS,
  SET_FILTER_COLUMNS
} from "../actions/ColumnsActions";

const defaultState = {
  isLoading: false,
  error: {},
  columns: [],
  result: {},
  selectedColumns: [],
  filterValues: {}
};
const columnsReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case GET_COLUMNS_STARTED:
      newState = {
        ...state,
        isLoading: true
      };
      return newState;

    case GET_COLUMNS_FAILED:
      newState = {
        ...state,
        isLoading: false,
        error: action.error
      };
      return newState;
    case GET_COLUMNS_SUCCEEDED:
      newState = {
        ...state,
        isLoading: false,
        columns: action.response.data.body
      };
      return newState;

    case GET_RESULT_STARTED:
      newState = {
        ...state,
        isLoading: true
      };
      return newState;

    case GET_RESULT_FAILED:
      newState = {
        ...state,
        isLoading: false,
        error: action.error
      };
      return newState;
    case GET_RESULT_SUCCEEDED:
      newState = {
        ...state,
        isLoading: false,
        result: action.response.data.body
      };
      return newState;
    case SET_SELECTED_COLUMNS:
      newState = {
        ...state,
        selectedColumns: action.columns
      };
      return newState;
    case SET_FILTER_COLUMNS:
      newState = {
        ...state,
        filterValues: action.columns
      };
      return newState;

    default:
      return state;
  }
};

export default columnsReducer;
