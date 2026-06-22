import React from "react";
import Navigation from "./Navigation";
import PageTransition from "./PageTransition";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navigation />
      <PageTransition />
    </div>
  );
};

export default AppLayout;
