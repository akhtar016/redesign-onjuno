import React from 'react';
import './FirstSection.css';

const FirstSection = () => {
    return (
        <section className="clearfix">
            <div className="col-md-7 col-12 float-left" style={{marginTop:"70px"}}>
                <h1 className="main-header">The Most Powerful Checking Account</h1>
                <p className="lead secondary-header">Our checking account gives you higher returns than a savings account with no hidden fees.</p>

                <form className="d-flex justify-content-between w-100 border p-3 mt-5">   
                <div>
                <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg" alt=""/>
                <input className="p-3 border-0" id="subscription-input"type="email" required="required" placeholder="Enter Email Address" />
                </div>
                <button type="submit" className="btn-sign-up sign-up-btn-animation d-block ml-0 mt-2" id="input-button"><span >Join Now</span></button>
                </form>
                <div className="mt-3 p-3">
                <img className="flag" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png" alt=""/>
                <p  className="d-inline-block flag-text">276 spots left for Priority Access</p>
                </div>
                <div className="d-flex p-3">
                    <img src="https://i.ibb.co/K0G9HqJ/fdio.png" border="0" alt="" 
                    className="fdic-img"/>
               
                    <p className="fdic">Banking Services Provided By <br/>
                            Evolve Bank &amp; Trust; Member FDIC</p>
                </div>
               
            </div>
            <div className="col-md-5 float-right pt-5">
                <img width="100%" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-mobile-app%403x.png" alt=""/>
            </div>
        </section>


    )
}

export default FirstSection;