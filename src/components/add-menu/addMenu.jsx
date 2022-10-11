import React from "react";
import { Square } from "../square/square";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { pink } from '@mui/material/colors';

export const Adicionar = () => {
  const style = {
   padding: "10px",
   color: "#622569",
   display: "flex",
   flexDirection: "row",
   justifyContent : "space-between",
   marginTop: "60px",
  };

  return (
    <div style={style}>
        <Square>
            <p>Registrar Crises</p>
            <AddCircleOutlineIcon sx={{ color: pink[500] }}></AddCircleOutlineIcon>
        </Square>
        <Square></Square>

        <Square></Square>
    </div>
  );
};
