import React from "react";
import "./css/Projects.css";
import Tilt from "react-tilt";

function Projectcardodd(props) {

    return(
    <>
            <div className="container">
                <div className="row row_card Tilt" options={{ max : 25,reset:false  }}>

                    {/* <div className="col-lg-1"></div> */}
                        <div className="col-sm-7 col-md-6 col-lg-6 card_odd">

              
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"> {props.domain} </h6>
                                    <p className="card-text">
                                    {props.des}
                                </p>
                                <p className="card-text">
                                    <b>Technologies : </b>
                                {props.tech}
                                </p>
                                    <button className="btn btn-outline-primary">
                                    <a href={props.link} target="_blank" className="card-link">Live Project Link</a>
                                    </button>

                                </div>
                            </div>
                 

                        </div>

                        <div className="d-none d-md-block d-lg-block col-md-5 col-lg-6 odd">
                        <Tilt>

                            <div className="project_card ">
                                <img src={props.imgg} alt="Project Image"/>
                            </div>
                        </Tilt>

                        </div>

                    </div>
            </div>
    </>
    );
}
export default Projectcardodd;
