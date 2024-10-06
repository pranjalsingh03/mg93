"use client";
import React, { FC } from 'react';
import './header.css';
import logo from "../../../public/logo1.png"
import { useState, useEffect } from "react";
import Sun from "../../app/Sun.svg";
import Moon from "../../app/Moon.svg";
import Image from 'next/image';


const Header: FC=()=> {

  const [theme ,setTheme]= useState("dark-theme");
  const togglethemes = () =>{
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
  };

  useEffect(()=>{
    document.body.className=theme;
  },[theme]);
  return (
<>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://github.com/pranjalsingh03">
        <Image src="https://i.ibb.co/bb1zNvQ/logo1.png" alt='logo' className='image-logo-header' width={60} height={60} unoptimized/>
      </a>
      <div className='dark_mode'>
        <input
          className='dark_mode_input'
          type='checkbox'
          id='darkmode-toggle'
          onClick={() => togglethemes()}
        />
        <label className='dark_mode_label' htmlFor='darkmode-toggle'>
          <Moon className="moon"/><Sun className="sun" />
        </label>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <button className="button contactus-button">
          <a className="nav-a" href="/">Resume</a>
        </button>
      </div>
    </div>
  </nav>
    </>
  );
}

export default Header