import React from "react";
import Intro from "../Components/Intro/intro";
import Header from "../Components/Header/header";
import HomeM from "../Components/Home/home"
import "../app/globals.css"
import Lang from "@/Components/Languages/Lang";

export default function Home() {
  return (
    <>
    <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      <Header/>
      <Intro/>  </div>
      <HomeM/>
      <Lang/>
    </>
  );
}2
