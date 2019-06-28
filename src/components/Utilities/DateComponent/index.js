import React from "react";

function DateComponent(props) {
    console.log(props);
    const date = props.projectdate;
  const dateObject = new Date(date);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  let formattedDate = `${
    months[dateObject.getMonth()]
  } ${dateObject.getDate()}, ${dateObject.getFullYear()}`;

  if (dateObject.getTime() % 86400000 != 0) {
    let hours;
    let minutes;

    minutes = `0${dateObject.getMinutes()}`;
    minutes = minutes.substr(minutes.length - 2);

    if(((dateObject.getHours() + 1) % 12) === 0){
        hours = 12;
    }
    else{
        hours = `0${(dateObject.getHours() % 12) +1}`;
        hours = hours.substr(hours.length - 2);
    }

    formattedDate += ` ${hours}:${minutes} ${(dateObject.getHours() > 11)? "PM":"AM"} `;
  }
  
  return <React.Fragment>{formattedDate}</React.Fragment>
}

export default DateComponent;