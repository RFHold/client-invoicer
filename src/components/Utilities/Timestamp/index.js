import React from "react";

function Timestamp({ timestamp }) {
  const timeStampObject = new Timestamp(timestamp);

  let formattedTime;
  let hours;
  let minutes;

  minutes = `0${timeStampObject.getMinutes()}`;
  minutes = minutes.substr(minutes.length - 2);

  if ((timeStampObject.getHours() + 1) % 12 === 0) {
    hours = 12;
  } else {
    hours = `0${(timeStampObject.getHours() % 12) + 1}`;
    hours = hours.substr(hours.length - 2);
  }

  formattedTime += ` ${hours}:${minutes} `;

  return <React.Fragment>{formattedTime}</React.Fragment>;
}

export default Date;
