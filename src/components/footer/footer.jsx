import React from "react";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { pink } from '@mui/material/colors';
import BookIcon from '@mui/icons-material/Book';
import DeleteIcon from '@mui/icons-material/Delete';

export const Footer = () => {
  const style = {
    width: "360px",
    height: "62px",
    display: "flex",
    flexDirection: "row",
    justifyContent : "space-around",
    backgroundColor: "#B8A9C9",
    marginTop: "170px",

  };

  return (
    <div style={style}>
 
       <div style={{padding: 5}}>
       <AssignmentIndIcon sx={{ color: pink[500] }}></AssignmentIndIcon>
        <BookIcon sx={{ color: pink[500] }}></BookIcon>
        <DeleteIcon sx={{ color: pink[500] }}></DeleteIcon>
       </div>

    </div>
  );
};
