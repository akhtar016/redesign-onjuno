import './ThirdSection.css';
import React from 'react';

const ThirdSection = () => {
    return (
       <section className="row" style={{marginBottom:"150px"}}>
           <div className="col-md-7 order-md-2 order-lg-1 order-sm-2 order-2">
                <h2 className="h-text-third">Start saving for a rainy day fund</h2>
                <h2 className="h2-text-third">Use Our Checking Account to Achieve Your Financial Goals</h2>
                <p className="lead mt-3 p-third">With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our banking partner Evolve Bank and Trust. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.</p>
           </div>

           <div className="col-md-5 mt-5 order-md-1 order-lg-2 order-sm-1 mt-5 mb-5 order-1">
                <img width="100%" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg" alt=""/>
            </div>

       </section>
    )
}

export default ThirdSection;