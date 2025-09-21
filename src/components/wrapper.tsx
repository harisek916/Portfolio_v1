import { NavComponent } from "./nav_component/nav"
import { HeroComponent } from "./hero_component/hero";
import { AboutComponent } from "./about_component/about";
import { SkillsComponent } from "./skils_component/skills";
import './wrapper.css'

export function Wrapper(){
    const name:string = "Muhammed";
    return <div>
        {/* <section className="nav-hero-hrs">

        </section>
        <section >
        </section> */}
            <HeroComponent/>
            <NavComponent name={name}/>
            <AboutComponent/>
            <SkillsComponent/>
    </div>
}