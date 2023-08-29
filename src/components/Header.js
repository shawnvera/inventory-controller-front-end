'use client'

import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";


function Header() {

  return (
    <div>
      <h1 className="container-fluid p-3 mb-2 bg-dark-subtle text-dark text-center">Inventory Controller</h1>
      <div className="Container-flex">
        <div className="col-md"></div>
        <div className="col-md text-center">
          <img height="125" width="125" className="mx-auto pb-2" src="https://cdn.pixabay.com/photo/2021/11/22/22/53/inventory-6817561_1280.png" />
        </div>
        <div className="col-md"></div>
      </div>
    </div>
  );
}

export default Header;