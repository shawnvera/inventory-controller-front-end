'use client'

import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import LoginButton from "../components/LoginButton";

export default function Page() {
  return (
    // <MyApp>
    <>
      <div id="myapp" className="container-fluid text-center">
        <div className="row text-center">
          <div className="col-md-4"></div>
          <div className="col-md-4">

            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />

            <LoginButton />
            <div className="col-md-4">

            
            </div>
          </div>
        </div>
      </div>

    </>
    // </MyApp>
  )
}