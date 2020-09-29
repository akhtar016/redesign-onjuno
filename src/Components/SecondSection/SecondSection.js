import "./SecondSection.css";
import React from 'react';



const SecondSection = () => {
    return (
        <section style={{marginTop: "100px", marginBottom:"100px"}}>
            <h2 className="text-center text-uppercase h-text">backed by the best</h2>
            <div className="row" style={{marginTop: "50px"}}>
                <div className="col-lg-4 text-center p-3">
                <img className="img-sec" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png" alt=""/>
                </div>
                <div className="col-lg-4 text-center p-3">
                <img className="img-sec" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png" alt=""/>
                </div>
                <div className="col-lg-4 text-center p-3">
                <img className="img-sec" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png" alt=""/>
                </div>
            </div>
        </section>
    )
}


export default SecondSection;