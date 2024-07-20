import React from "react";
import Intro from "../Components/Intro/intro";
import "../app/globals.css"

export default function Home() {
  return (
    <>
    <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      <Intro/>  </div>
    </>
  );
}
