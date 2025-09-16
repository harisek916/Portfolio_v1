import "./about.css"
import harisImage from "./../../assets/images/haris.jpg"


export function AboutComponent() {

    const aboutDetails={
        name:"Muhammed Haris",
        age:"23",
        phone:"8921690875",
        address:"Palakkad,Kerala",
        experience:"6 Years",
        freelance:"Available",
        linkedin:"Muhammed Haris",
        instagram:"mhd_haris"
    }
    return (
        <div className="about-container-hrs">
            <div className="about-hrs" id="about">

                <div className="about-child-hrs about-img-hrs">
                    <img src={harisImage} alt="" />
                </div>

                <div className="about-2-hrs">

                    <div className="about-child-hrs about-heading-hrs">
                        <span className="text-crimson-hrs">Discover</span>
                        <h2>About Me</h2>
                        <hr className="my-0"/>
                    </div>
                    <p className="about-child-hrs about-note-hrs">
                        My name is Muhammed Haris.I'm a Freelance Full Stack Developer based in Palakkad,Kerala and
                        {/* <br />   */}
                        I'm very passionate and dedicated to my work.With 1.3 years experience as a professional 
                        {/* <br /> */}
                        Full Stack Developer, I have acquired the skills necessary to build great and premium 
                        {/* <br /> */}
                        websites.                    </p>
                    <div className="about-child-hrs about-detail-hrs  rounded border-warm-pinkish-red-hrs">
                        <div className="detail-left-hrs">
                            <span>Name : {aboutDetails.name}</span>
                            <br />
                            <span>Phone :  {aboutDetails.phone}</span>
                            <br />
                            <span>Experience : {aboutDetails.experience}</span>
                            <br />
                            <span>Linkedin : {aboutDetails.linkedin}</span>
                            <br />
                        </div>
                        <div className="detail-right-hrs">
                            <span>Age : {aboutDetails.age}</span>
                            <br />
                            <span>Address : {aboutDetails.address}</span>
                            <br />
                            <span>Freelance : {aboutDetails.freelance}</span>
                            <br />
                            <span>Instagram : {aboutDetails.instagram}</span>
                            <br />
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-danger mt-3">Download Cv</button>
                    </div>
                </div>



            </div>
        </div>
    )
}