import React from "react";
import "./footer.css";
import Image from "next/image";
import Gihtub from "../../../public/github.svg";
import Twitter from "../../../public/twitter.svg";
import Linkedin from "../../../public/linkedin.svg";
import "../../app/globals.css";


const Footer = () => {
    return (
        <footer className="text-center">
        <div className="p-2">
            <ul className="list-inline p-2">
                <li className="list-inline-item me-4"><a className="link-secondary" href="/">Web design</a></li>
                <li className="list-inline-item me-4"><a className="link-secondary" href="/">Development</a></li>
                <li className="list-inline-item"><a className="link-secondary" href="/">Hosting</a></li>
            </ul>
            <ul className="list-inline p-2">
                <li className="list-inline-item me-4"> <a href="https://www.linkedin.com/in/pranjalsingh03/"><Image className="image-foot" src={Linkedin} alt="linkedin" /></a></li>
                <li className="list-inline-item me-4"><a href="/"><Image className="image-foot" src={Twitter} alt="twitter" /></a></li>
                        
                <li className="list-inline-item"><a href="https://github.com/pranjalsingh03"><Image className="image-foot" src={Gihtub} alt="github"  width={50}
    height={50}/></a></li>
            </ul>
            <p className="text-center p-2">Design and Build by Pranjal singh</p>
        </div>
    </footer>
    );
}

export default Footer;