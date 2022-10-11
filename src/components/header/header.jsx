import React from "react";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { pink } from '@mui/material/colors';
export const Header = () => {
  const style = {
    width: "340px",
    height: "55px",
    display: "flex",
    flexDirection: "row",
    justifyContent : "space-between",
    padding:"10px",
  };

  return (
    <div style={style}>

        <ViewHeadlineIcon sx={{ color: pink[500] }}></ViewHeadlineIcon>

        <CalendarMonthIcon sx={{ color: pink[500]}}></CalendarMonthIcon>

        <AddAlertIcon sx={{ color: pink[500] }}></AddAlertIcon>

    </div>
  );
};
