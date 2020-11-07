import React from "react";
import "./css/About.css";
import Footer from "./Footer";
import Certificates from "./Certificates";
import Cerdata from "./Cerdata";
import hero from "./images/Swapnilpp.jpg";

function About(){
    return(
        <>
                <section className="main_about">

                    <div className="intro">

                    <div className="title text-center">About me</div>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="photo mx-auto text-center">
                                    <img src={hero} alt=""/>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                    <div className="short_info">
                                     Hello my name is <b>Swapnil Sutar</b> and currently, I am Self-learner. I have good knowledge of web technologies. 
                                
                                    I love spending time on fixing little details and optimizing web apps, my major area of interest is to make a responsive design.  <br/>
                                    I like working in a team, where you will learn faster and much more.
                                    <br/>
                                    I looking for opportunities to apply my skills in real-world problem-solving. And I am looking for a full-time position in Web Development. 
                                    
                                    </div>
                            </div>

                        </div>
                       </div>
                    </div>

                    <div className="about_skills">
                        <div className="container">

                        <div className="title text-center">Skills</div>

                        <div className="skills_tags text-center">

                            <div className="btn btn-primary">HTML5</div>
                            <div className="btn btn-primary">Bootstrap</div>
                            <div className="btn btn-primary">php</div>
                            <div className="btn btn-primary">css</div>
                            <div className="btn btn-primary">Javascript</div>
                            <div className="btn btn-primary">ReactJs</div>
                            <div className="btn btn-primary">Laravel</div>
                            <div className="btn btn-primary">python</div>
                            <div className="btn btn-primary">Mysql</div>
                            <div className="btn btn-primary">responsive Design</div>

                        </div>

                        </div>
                    </div>

                    <div className="certificates">
                        <div className="container">
                            <div className="title text-center"> Certificates </div> 

                        
                            <div className="row c_data justify-content-center">
                            
                                {
                                Cerdata.map((val,index)=>{
                                    return(
                                        <Certificates 
                                        images={val.image}
                                        titles={val.title}
                                        links={val.link}
                                        />
                                        );
                                    })
                                }
                            </div>
                            
                                
                        </div>
                    </div>

                    <div className="about_contact">
                        <Footer/>
                    </div>

                </section>
        </>
    );
}

export default About;