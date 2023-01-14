import {  Link } from "react-router-dom";
import { Landingpage } from "../views/export";
import { Navbar } from "../components/Navbar";

export default function Root() {
    return (
      <>
      <Navbar></Navbar>
      <Landingpage />
      
      <nav>
            <ul>
              <li>
              <Link to={`contacts/1`}>Your Name</Link>
              </li>
              <li>
              <Link to={`contacts/2`}>Your Friend</Link>
              </li>
            </ul>
        </nav>
        
      </>
     
    );
  }