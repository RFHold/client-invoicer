import React from "react";

function Timestamp({ timestamp }) {
  let formattedTime= "";
  let hours;
  let minutes;

  minutes = `0${Math.floor((timestamp/1000/60) % 60)}`;
  minutes = minutes.substr(minutes.length - 2);
  hours = `0${Math.floor(timestamp/1000/60/60)}`;
  hours = hours.substr(hours.length - 2);

  formattedTime += ` ${hours}:${minutes} `;

  return <React.Fragment>{formattedTime}</React.Fragment>;
}

export default Timestamp;
