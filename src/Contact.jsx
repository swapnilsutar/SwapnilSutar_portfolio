import React from "react";
import "./css/Contact.css";
import Footer from "./Footer"

function Contact(){
    return(
        <>
            <section className="section_contact">
     
            <div className="container ">

                <div className="col-lg-6 mx-auto ">
                        <div className="contact_box ">
                            <div className="title text-center"> get in touch</div>
                            
                            <form  action="mailto:swapnilsutar902@gmail.com" method="post">
                                <input className="form-control" type="text" placeholder="NAME" />
                                <br/>
                                <input className="form-control" type="text" placeholder="EMAIL"/>
                                <br/>
                                <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="MESSAGE"></textarea>
                                <br/>
                                
                                <button type="submit" className="btn btn-successs btn-block">Submit your message</button>
                            </form>
                            
                         </div>

                </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#003d66" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,106.7C672,117,768,203,864,224C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>


                <div className="contact_footer">
                    <Footer />
                </div>

            </section>

        </>
    );
}

export default Contact;