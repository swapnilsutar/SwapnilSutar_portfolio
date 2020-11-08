import React from "react";
import "./css/home.css";
import Typical from "react-typical";
// import hero1 from "./images/1234.svg";
import hero1 from "./images/123.svg";
import {Link} from "react-router-dom";
import Projectcardeven from "./Projectcardeven";
import Projectcardodd from "./Projectcardodd";
import Pdata from "./Pdata";
import Footer from "./Footer";

function App(){
    

    return(
        <>
            <div className="home_section">

                <div className="container-fluid welcome">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 320">
                <path fill="#009bca" fill-opacity="0.5" d="M0,96L48,128C96,160,192,224,288,245.3C384,267,480,245,576,218.7C672,192,768,160,864,176C960,192,1056,256,1152,288C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>

                    <div className="row">
                            <span className="col-md-1 col-lg-2"></span>

                            <div className="col-sm-9 col-md-4 col-lg-4">

                                    <div className="head ">
                                        <span style={{ color:'#127eb1',textTransform:'uppercase',fontSize:'20px', }}> Hey!</span> <br/>
                                            <h1>I'm Swapnil Sutar </h1>
                                            <h2 class="d-none d-md-block d-lg-block sub_head">  &nbsp;
                                                <span className="post"> 
                                                    <Typical 
                                                        loop={Infinity}
                                                        wrapper="b"
                                                        steps={[
                                                            'A Web Developer',
                                                            3000,
                                                            'An Engineer',
                                                            3000,
                                                            'A Web Designer',
                                                            3000
                                                        ]}
                                                    /> 
                    
                                                </span> 
                                                </h2>
                                    </div>    
                                        
                                    <div className="row">
                                        
                                        <div className="col-md-9 col-lg-9 conme">
                                            <a href="https://www.linkedin.com/in/swapnilsutar/" target="_blank">
                                                <button class="btn btn-outline-success"> Contact Me</button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        
                                        <div className="col-lg-5">
                                        <div className="media">
                                            <a href="https://www.linkedin.com/in/swapnilsutar/" target="_blank">
                                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                            </a>
                                            <a href="https://github.com/swapnilsutar" target="_blank">
                                                <i class="fa fa-github" aria-hidden="true"></i>
                                            </a>           
                                            <a href="">
                                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                            </a>
                                            <a href="mailto:swapnilsutar902@gmail.com" target="_blank">
                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                            </a>      
                                        </div>
                                        </div>
                                    </div>

                                    {/* <div className="home_contact mx-auto justify-content-center text-center">
                                        
                                        
                                    </div> */}
                                        
                            </div>

                            <div className="d-none d-md-block d-lg-block  col-md-12 col-lg-6 profile_img">
                                <img src={hero1} alt="Logo"/>
                            </div>

                            

                    </div>
                </div>
                
            </div>

                <section className="about">
                    <div className="container">       
                        
                        <div className="title text-center ">
                            About Me
                        </div>

                        <div className="row">


                            <div className="col-lg-12 text-center">
                                    <div className="short_info">
                                    Currently, I am Self-learner. I have good knowledge of web technologies. I love spending time on fixing little details and optimizing web apps, my major area of interest is to make a responsive design. I like working in a team, where you will learn faster and much more.
                                    <br/>
                             
                                        <Link exact to="/about">Read more info... </Link>
                                    </div>
                            </div>

                        </div>
                        

                    </div>
                </section>

            <section className="recent_work">
                <div className="container">
                    <div className="title text-center">
                        Recent Work
                    </div>
                    <div className="view_all ">
                            <Link exact to="/project"> View All projects </Link>
                        </div>

                    <div className="recent_project">
                        <Projectcardeven
                            imgg={Pdata[0].imgg}
                            title={Pdata[0].title}
                            link={Pdata[0].link}
                            domain={Pdata[0].domain}
                            tech={Pdata[0].tech}
                            des={Pdata[0].description}
                        />
                        <Projectcardodd
                            imgg={Pdata[1].imgg}
                            title={Pdata[1].title}
                            link={Pdata[1].link} 
                            domain={Pdata[1].domain}
                            tech={Pdata[1].tech}
                            des={Pdata[1].description}
                        />
                    </div>

                    <br/>

                        
                </div>
                          
            </section>


            <section className="home_contact">
                <Footer />
            </section>

        </>
    );
}

export default App;