import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";

const ResultBox = () => {
  const result = useSelector(state => state.result);
  const error = useSelector(state => state.error);
  let parsedResult = {};
  if (Object.keys(result).length !== 0) {
    parsedResult = JSON.parse(result);
  }
  return (
    <>
      <Divider />
      {(Object.keys(parsedResult).length > 0 || error.length > 0) && (
        <Card>
          <CardContent>
            <Typography variant="h5">Result :</Typography>
            <a href={`${parsedResult["S3_URL"]}`}>
              {parsedResult["S3_URL"] ? parsedResult["S3_URL"] : error}
            </a>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ResultBox;
