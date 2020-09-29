import './FourthSection.css';
import React from 'react';

const FourthSection = () => {
    return (
        <section className="mb-5">
            <div className="text-center" style={{ marginBottom: "125px" }}>
                <h2 className="fourth-sec-h-text">Sign up early to save more</h2>
                <p className="fourth-sec-para" >Depending on the level of your checking account, you’ll earn between 1.15%<sup>3</sup> to 2.15%<sup>1</sup> bonus rate.</p>
            </div>


            <div className="d-flex justify-content-between">


                <div className="card border-0 shadow card-width">

                    <div class="card-header text-center">
                        <img className="card-header-img" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png" width="80%" alt="" />
                        <h4 className="card-header-text-1">Metal</h4>
                        <h4><span className="card-header-span-1">2.15%<sup className="card-header-span-2">1</sup></span></h4>
                        <p><span className="card-header-span-3">5%</span> cash back</p>
                    </div>


                    <div class="card-body">
                        <div className="d-flex justify-content-between">
                            <p><span className="card-body-span-1">2224</span><span className="card-body-span-2">/2500 spots</span></p>
                            <p className="card-body-slot">276 spots left</p>
                        </div>

                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="2224" aria-valuemin="0" aria-valuemax="2500">
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mt-3">
                            <button type="submit" class="btn btn-info w-100 p-3 card-body-button">Sign Up Now</button>
                        </div>
                        <hr class="my-4"></hr>

                        <h2 className="card-body-h-text">INCLUDES</h2>
                        <p><span className="pr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Charcoal Black Metal Card</span></p>
                        <p><span className="pr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">2.15%<sup>1</sup> Bonus Rate Checking Account</span></p>
                        <p><span className="pr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">5% Cash back on brands you love</span></p>
                        <p><span className="pr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Free Cash Withdrawals</span></p>
                        <p><span className="pr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Phone &amp; Chat Support</span></p>

                        <p className="card-body-p">Fund your account with a minimum opening deposit of <span style={{ fontWeight: "700" }}>$1000</span>. 3 additional free ATM withdrawals per month from out of network ATMs.</p>
                    </div>

                    <div className="card-footer">
                        <div className="ml-3">
                            <p className="d-inline card-footer-p ">
                                <i class="fas fa-dollar-sign card-footer-i"></i>$11.99/m Membership Fee</p>
                            <h4 className="card-footer-h-text">Free for 6 months</h4>
                            <p className="card-footer-p-text">~$72 Savings</p>
                        </div>
                    </div>

                </div>



                {/* Second card */}

                <div className="card border-0 shadow card-width">

                    <div class="card-header text-center" style={{background:"#F7F7FB"}}>
                        <img className="card-header-img" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png" width="80%" alt="" />
                        <h4 className="card-header-text-1">Premium</h4>
                        <h4><span className="card-header-span-1" style={{color:"black"}}>1.65%<sup className="card-header-span-2">2</sup></span></h4>
                        <p><span className="card-header-span-3" style={{background:"#B2B2B2"}}>4%</span> cash back</p>
                    </div>


                    <div class="card-body">
                        <div className="d-flex justify-content-between">
                            <p><span className="card-body-span-1"></span><span className="card-body-span-2">2000 spots</span></p>
                            <p className="card-body-slot">2000 spots left</p>
                        </div>

                        <div className="progress">
                            <div className="progress-bar" style={{background:"#B2B2B2", width:"0"}} role="progressbar" aria-valuenow="2224" aria-valuemin="0" aria-valuemax="2500">
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mt-3">
                            <button type="submit" class="btn btn-info w-100 p-3 card-body-button" style={{background:"#B2B2B2"}}>Up Next</button>
                        </div>
                        <hr class="my-4"></hr>

                        <h2 className="card-body-h-text">INCLUDES</h2>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Free Debit Card</span></p>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">1.65%<sup>2</sup> Bonus Rate Checking Account</span></p>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">4% Cash back on brands you love</span></p>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Free Cash Withdrawals</span></p>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Phone &amp; Chat Support</span></p>

                        <p className="card-body-p">Fund your account with a minimum opening deposit of <span style={{ fontWeight: "700" }}>$500</span>. 2 additional free ATM withdrawals per month from out of network ATMs.</p>
                    </div>

                    <div className="card-footer" style={{background:"#F7F7FB"}}>
                        <div className="ml-3">
                            <p className="d-inline card-footer-p">
                                <i class="fas fa-dollar-sign card-footer-i"></i>$6.99/m Membership Fee</p>
                            <h4 className="card-footer-h-text text-secondary">Coming Soon</h4>
                            <p className="card-footer-p-text" style={{color:"#F7F7FB"}}>~</p>
                            
                        </div>
                    </div>

                </div>


                {/* Third card */}

                <div className="card border-0 shadow card-width">

                    <div class="card-header text-center" style={{background:"#F7F7FB"}}>
                        <img className="card-header-img" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png" width="80%" alt="" />
                        <h4 className="card-header-text-1">Basic</h4>
                        <h4><span className="card-header-span-1" style={{color:"black"}}>1.15%<sup className="card-header-span-2">3</sup></span></h4>
                        <p><span className="card-header-span-3" style={{background:"#B2B2B2"}}>3%</span> cash back</p>
                    </div>


                    <div class="card-body">
                        <div className="d-flex justify-content-between">
                            <p><span className="card-body-span-1"></span><span className="card-body-span-2">10000 spots</span></p>
                            <p className="card-body-slot">10000 spots left</p>
                        </div>

                        <div className="progress">
                            <div className="progress-bar" style={{background:"#B2B2B2", width:"0"}} role="progressbar" aria-valuenow="2224" aria-valuemin="0" aria-valuemax="2500">
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mt-3">
                            <button type="submit" class="btn btn-info w-100 p-3 card-body-button" style={{background:"#B2B2B2"}}>Coming Soon</button>
                        </div>
                        <hr class="my-4"></hr>

                        <h2 className="card-body-h-text">INCLUDES</h2>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Free Debit Card</span></p>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">1.15%<sup>3</sup> Bonus Rate Checking Account</span></p>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">3% Cash back on brands you love</span></p>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Free Cash Withdrawals</span></p>
                        <p><span className="pr-2"><svg style={{color:"#B2B2B2"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg></span><span className="card-body-bullet">Phone &amp; Chat Support</span></p>

                        <p className="card-body-p">Fund your account with a minimum opening deposit of <span style={{ fontWeight: "700" }}>$0</span>.</p>
                    </div>

                    <div className="card-footer" style={{background:"#F7F7FB"}}>
                        <div className="ml-3">
                            <p className="d-inline card-footer-p">
                                <i class="fas fa-dollar-sign card-footer-i"></i>No Membership Fee</p>
                            <h4 className="card-footer-h-text text-secondary">Free Forever</h4>
                            <p className="card-footer-p-text" style={{color:"#F7F7FB"}}>~</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default FourthSection;
