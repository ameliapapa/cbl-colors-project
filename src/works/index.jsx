import React from "react";
import { Navbar1 } from "../about-me/components/Navbar1";
import { Header103 } from "./components/Header103";

export default function WorksPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar1 />
      </div>
      <Header103 />
    </div>
  );
}
