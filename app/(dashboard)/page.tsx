import UserGrowthDashboard from "@/components/overview/Chartbar";
import React from "react";
import Navbar from "../share/Navbar";

export default function page() {
  return (
    <div className="">
      <Navbar />
      <UserGrowthDashboard />
    </div>
  );
}
