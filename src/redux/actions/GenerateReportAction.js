import Axios from "axios";

export const GENERATE_REPORT_STARTED = "GENERATE_REPORT_STARTED";
export const GENERATE_REPORT_SUCCEEDED = "GENERATE_REPORT_SUCCEEDED";
export const GENERATE_REPORT_FAILED = "GENERATE_REPORT_FAILED";

const onGetGenerateReportStarted = () => ({
  type: GENERATE_REPORT_STARTED,
});

const onGetGenerateReportSucceeded = (response) => ({
  type: GENERATE_REPORT_SUCCEEDED,
  response,
});

const onGetGenerateReportFailed = (error) => ({
  type: GENERATE_REPORT_FAILED,
  error,
});

const token = "ok";

export const onGenerateReport = (params) => (dispatch) => {
  dispatch(onGetGenerateReportStarted());
  console.log(
    "onGetRegisterEntityMetadataStarted Payload is >>>>>>>>>>>>>>>>>>>>>> ",
    params
  );
  const url =
    "https://5umr66kn2j.execute-api.us-east-1.amazonaws.com/dev/reports";
  return Axios.get(url, {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log(
        "responce is of get onGetGenerateReportStarted is >>>>>>>>> ",
        response
      );
      if (response.status !== 200) {
        throw Error(response.data.body);
      }
      dispatch(onGetGenerateReportSucceeded(response));
      return response;
    })
    .catch((error) => {
      dispatch(onGetGenerateReportFailed(error.message));
      return error;
    });
};
