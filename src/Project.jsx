import React from "react";
import "./css/Projects.css";
import Projectcardeven from "./Projectcardeven";
import Projectcardodd from "./Projectcardodd";
import Pdata from "./Pdata";
import Footer from "./Footer";

function Project(){
    return(
       <>
            <section className="project">

                    <div className="title text-center"> 
                        All Projects
                    </div>

                { Pdata.map((val,index)=>{
                            return(

                                (index%2 == 0 ) ?
                                        <Projectcardodd 
                                            imgg={val.imgg}
                                            title={val.title}
                                            link={val.link}
                                            tech={val.tech}
                                            domain={val.domain}
                                            des={val.description}
                                        />:
                                        <Projectcardeven 
                                        imgg={val.imgg}
                                        title={val.title}
                                        link={val.link}
                                        tech={val.tech}
                                        domain={val.domain}
                                        des={val.description}
                                    />
                            );
                })}

                <div className="contact_project">
                    <Footer/>
                </div>

            </section>
            


        </>
    );
}

export default Project;