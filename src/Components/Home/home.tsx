import React from "react";
import "./home.css"
import Image from "next/image";
import profile from "../../../public/profile.jpg";

const HomeM = () => {
    return (
                <div className="main-box-area">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="main-box-area-left-content-para">
                                <h2 className="main-box-area-left-content-heading-text">About me</h2>
                                <p className="main-box-area-left-content-para-text"> "Hello, I'm Pranjal Singh! Originally from Gorkhpur, I bring a vibrant blend of experiences and passions to everything I do. With a curious and adventurous spirit, I'm constantly seeking new knowledge and embracing diverse perspectives. Integrity, empathy, and creativity are at the core of my being, shaping the way I interact with others and navigate the world. I find great joy in exploring the intersection of art and technology, as well as promoting sustainable practices for a greener future. In my free time, you'll often find me immersed in photography, capturing the beauty of everyday moments. Thank you for taking the time to get to know me!"</p>

                            </div>
                        </div>
                        <div className="col-md-6  order-md-last" ><Image className="profile-picture" src={profile} alt="hello" /></div>
                    </div>
                </div>
    )
}

export default HomeM;
