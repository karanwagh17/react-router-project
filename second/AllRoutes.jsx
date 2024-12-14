import React from "react";
import { Routes, Route } from "react-router";
import Home from "./src/Components/Home";
import Product from "./src/Components/Product";
import Addproduct from "./src/Components/Addproduct";
import Description from "./src/Components/Description";
import Login from "./src/Components/Login";
import Private from "./src/Private";
import Edit from "./src/Components/Edit";

const Allrotes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        ></Route>
        <Route path="/description/:id" element={<Description />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>

        <Route
          path="/Product"
          element={
            <Private>
              <Product />
            </Private>
          }
        ></Route>
        <Route
          path="/Addproduct"
          element={
            <Private>
              <Addproduct />
            </Private>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Allrotes;
