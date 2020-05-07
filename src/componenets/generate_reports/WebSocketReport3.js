import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWebsocketReport3 } from "../actions/ColumnsActions";

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   topbar: {
//     maxHeight: "50%",
//     backgroundColor: "#3f51b5",
//     color: "#FFFFFF",
//     fontFamily: "Times New Roman, Times, serif",
//   },
// }));
const WebSocketReport = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const executionData = useSelector((state) => state.executionData);

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
