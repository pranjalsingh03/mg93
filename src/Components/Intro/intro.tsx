"use client";
import React, { useEffect, useRef, FC } from "react";
import Image from 'next/image';
import './intro.css';
import "./stars.css";
import Github from "../../app/github.svg";
import Twitter from "../../app/twitter.svg";
import Linkedin from "../../app/linkedin.svg";
import Facebook from "../../app/facebook.svg";
import Instagram from "../../app/instagram.svg";
import Typed from 'typed.js';

// Define the type for the ref
type TypedSpanRef = HTMLSpanElement | null;

const Intro: FC = () => {
    const el = useRef<TypedSpanRef>(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Full stack developer",
                "UI/UX Designer",
                "Student"
            ],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="main-box">
            <div className="main-box-content-left">
                <span className="first-name">Pranjal Singh</span>
                <div className="about-user">
                    <p className="about-me">Brings ideas to life with code.</p>
                    <h1 className="typed-component">
                        I am a <span className="typed-span" ref={el}></span>{" "}
                    </h1>
                    <div className="jsUDeb">
                        <a href="https://github.com/pranjalsingh03">
                            <Github alt="github" className="responsive-logo-intro" />
                        </a>
                        <a href="https://www.linkedin.com/in/pranjalsingh03/">
                            <Linkedin alt="linkedin" className="responsive-logo-intro" />
                        </a>
                        <a href="https://twitter.com/pranjal_magan09">
                            <Twitter alt="twitter" className="responsive-logo-intro" />
                        </a>
                    </div>
                </div>
                <div className="gXnnBS">
                    <div className="email__StyledLinkWrapper-sc-1fu3fru-0 dvseSq fade-enter-done">
                        <a href="https://github.com/pranjalsingh03">
                            <Github alt="github" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://www.linkedin.com/in/pranjalsingh03/">
                            <Linkedin alt="linkedin" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://www.instagram.com/sanatani_magan09/">
                            <Instagram alt="instagram" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://twitter.com/pranjal_magan09">
                            <Twitter alt="twitter" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://www.facebook.com/magan728">
                            <Facebook alt="facebook" className="facebook-logo imagelogo" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="lbtSgG">
                <div className="email__StyledLinkWrapper-sc-1fu3fru-0 dvseSq fade-enter-done">
                    <a href="mailto:pranjalmagansingh9304@gmail.com" className="email__StyledEmailLink-sc-1fu3fru-1 gduzAh">
                        pranjalmagansingh9304@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;
