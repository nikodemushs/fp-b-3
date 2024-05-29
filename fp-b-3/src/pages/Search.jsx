import { useState } from "react";
import NavbarLogoBiru from "../components/Navbar2";
import CariTiketLain from "../components/CariTiketLain";

export default function Search() {
  return (
    <div>
      <NavbarLogoBiru />
      <div className="mt-20">
        <CariTiketLain />
      </div>
    </div>
  );
}