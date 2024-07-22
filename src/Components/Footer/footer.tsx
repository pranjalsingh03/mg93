import React from "react";
import "./footer.css";
import "../../app/globals.css";


const Footer = () => {
    return (
        <footer className="text-center">
        <div>
            <ul className="list-inline">
                <li className="list-inline-item me-4"><a className="link-secondary" href="/">Web design</a></li>
                <li className="list-inline-item me-4"><a className="link-secondary" href="/">Development</a></li>
                <li className="list-inline-item"><a className="link-secondary" href="/">Hosting</a></li>
            </ul>
            <ul className="list-inline">
                <li className="list-inline-item me-4"> <a href="https://www.linkedin.com/in/pranjalsingh03/"><img className="image-foot" src="/linkedin.svg" alt="linkedin" /></a></li>
                <li className="list-inline-item me-4"><a href="/"><img className="image-foot" src="/twitter.svg" alt="" /></a></li>
                        
                <li className="list-inline-item"><a href="https://github.com/pranjalsingh03"><img className="image-foot" src="/github.svg" alt="" /></a></li>
            </ul>
            <p className="text-center">Design and Build by Pranjal singh</p>
        </div>
    </footer>
    );
}

export default Footer;