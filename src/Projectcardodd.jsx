import React from "react";
import "./css/Projects.css";

function Projectcardodd(props) {

    return(
    <>
            <div className="container">
                <div className="row row_card">

                        <div className="col-sm-7 col-md-7 col-lg-6 card_odd">

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

                        <div className="col-sm-5 col-md-5 col-lg-6s">

                            <div className="project_card ">
                                <img src={props.imgg} alt="Project Image"/>
                            </div>

                        </div>

                    </div>
            </div>
    </>
    );
}
export default Projectcardodd;
