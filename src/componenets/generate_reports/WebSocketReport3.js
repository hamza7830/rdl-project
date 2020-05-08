import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWebsocketReport3 } from "../actions/ColumnsActions";

const WebSocketReport = () => {
  const dispatch = useDispatch();
  const executionData = useSelector(
    (state) => state.reportsReducer.executionData
  );

  useEffect(() => {
    if (Object.keys(executionData).length > 0) {
      const client = new WebSocket(
        "wss://p38gkp53o0.execute-api.us-east-1.amazonaws.com/test"
      );

      var msg = {
        action: "connectionId",
        executionArn: `${executionData["executionArn"]}`,
      };

      client.onopen = function (event) {
        console.log(
          "connection establishing with msg is .................. ",
          msg
        );
        client.send(JSON.stringify(msg));
      };
      client.onmessage = function (event) {
        console.log("After establish a connection", event.data);
        dispatch(setWebsocketReport3(event.data));
      };
      // client.onclose = function (event) {};
    }
    // websocketFunction();
    // keepAlive();
  });

  return <></>;
};

export default WebSocketReport;
