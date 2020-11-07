import React from "react";
import './css/Certificates.css'

function Certificates(props){
    return(
        <>
            
                <div className="col-sm-6 col-md-4 col-lg-3  d-flex  justify-content-center certis">

                    <div className="certi text-center card">
                        
                        <div className="c_title">{props.titles}</div>

                        <img src={props.images} alt="company logo"/>
                    
                        <div className="c_link">
                            <a href={props.links} target="_blank">View Certificate</a>
                        </div>
                    </div>

                </div>
            
        </>
    );
}

export default Certificates;