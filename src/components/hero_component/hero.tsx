// import { useState } from "react";

import "./hero.css"
import harisImage from "../../assets/images/haris1.jpg"

export function HeroComponent(){
    return (
        <section className="hero-hrs" id="home">
            <div className="hero-sub-section-hrs">
                <div className="hero-img-wrapper-hrs">
                <img src={harisImage} alt="" className="hero-img-hrs"/>
            </div>
            <div className="hero-logo-hrs">
                <div className="logo-hrs text-center">Muhammed Haris</div>
                <div className="">A Creative Freelancer & Full Stack Developer</div>
            </div>
            </div>
            
        </section>
    )
}