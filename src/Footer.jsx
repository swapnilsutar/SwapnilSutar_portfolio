import React from "react";
import "./css/Footer.css";

function Footer(){
    return(
        <>
            <div className="container">
            <div className="contact_me text-center">
                <div className="title">
                        Contact Me
                </div>
                <div className="media ">
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
            
<br/>


            <div className="footer ">
                Copyright &#169; 2020 : Swapnil Sutar
            </div>

            </div>
        </>
    );
}

export default Footer;