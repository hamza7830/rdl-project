import Axios from "axios";

export const GET_COLUMNS_STARTED = "GET_COLUMNS_STARTED";
export const GET_COLUMNS_SUCCEEDED = "GET_COLUMNS_SUCCEEDED";
export const GET_COLUMNS_FAILED = "GET_COLUMNS_FAILED";
export const GET_RESULT_STARTED = "GET_RESULT_STARTED";
export const GET_RESULT_SUCCEEDED = "GET_RESULT_SUCCEEDED";
export const GET_RESULT_FAILED = "GET_RESULT_FAILED";
export const SET_SELECTED_COLUMNS = "SET_SELECTED_COLUMNS";
export const SET_FILTER_COLUMNS = "SET_FILTER_COLUMNS";

const onGetColumnsStarted = () => ({
  type: GET_COLUMNS_STARTED
});

const onGetColumnsSucceeded = response => ({
  type: GET_COLUMNS_SUCCEEDED,
  response
});

const onGetColumnsFailed = error => ({
  type: GET_COLUMNS_FAILED,
  error
});

const onGetResultStarted = () => ({
  type: GET_RESULT_STARTED
});

const onGetResultSucceeded = response => ({
  type: GET_RESULT_SUCCEEDED,
  response
});

const onGetResultFailed = error => ({
  type: GET_RESULT_FAILED,
  error
});

const onSetSelectedColumns = columns => ({
  type: SET_SELECTED_COLUMNS,
  columns
});

const onSetFilterColumns = columns => ({
  type: SET_FILTER_COLUMNS,
  columns
});

export const setSelectedColumns = columns => dispatch => {
  dispatch(onSetSelectedColumns(columns));
};

export const setFilterColumns = columns => dispatch => {
  dispatch(onSetFilterColumns(columns));
};

export const getColumns = () => dispatch => {
  dispatch(onGetColumnsStarted());
  const getUrl = `https://z324goejp9.execute-api.us-east-1.amazonaws.com/dev/candidates`;
  return Axios.get(getUrl)
    .then(response => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      dispatch(onGetColumnsSucceeded(response));
      return response;
    })
    .catch(error => {
      dispatch(onGetColumnsFailed(error.message));
      throw error;
    });
};

export const getResult = params => dispatch => {
  dispatch(onGetResultStarted());
  const url = `https://z324goejp9.execute-api.us-east-1.amazonaws.com/dev/runquery`;
  return Axios.post(url, params)
    .then(response => {
      if (response.data.statusCode !== 200) {
        throw Error(response.data.body);
      }
      dispatch(onGetResultSucceeded(response));
      return response;
    })
    .catch(error => {
      dispatch(onGetResultFailed(error.message));
      return error;
    });
};
