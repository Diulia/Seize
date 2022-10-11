import React from "react";
import { Header } from "../header/header";
import { Dia } from "../dia/dia";
import { Footer } from "../footer/footer";
import { Adicionar } from "../add-menu/addMenu";

export const Container = () => {
    return (
        <div>
            <Header></Header>
            <Dia></Dia>
            <Adicionar></Adicionar>
            <Footer></Footer>
        </div>
    )
}