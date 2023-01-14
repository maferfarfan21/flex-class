import {  Link } from "react-router-dom";
import { Teams } from "../views/export";
import { Navbar } from "../components/Navbar";


export default function Root() {
    return (
      <>
      <Navbar></Navbar>
      <Teams />
      
     
      </>
     
    );
  }