import React from 'react'
import coading from '../components/coading3.jpg';
import card1 from '../components/card1.jpg'
import card2 from '../components/card2.jpg'
import uni1 from '../components/uni1.png'
import uni2 from '../components/uni2.png'
import uni3 from '../components/uni3.png'
import uni4 from '../components/uni4.png'
import uni5 from '../components/uni5.png'
import uni6 from '../components/uni6.png'
import uni7 from '../components/uni7.png'

import { Card, Carousel } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';


const Home = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
      
            }
        },
      };
    //#region - start of - number counter animation
    const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
        const target = document.querySelector(qSelector);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            target.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    document.addEventListener("DOMContentLoaded", () => {
        counterAnim("#count1", 10, 300, 1000);
        counterAnim("#count2", 5000, 250, 1500);
        counterAnim("#count3", 1000, 150, 2000);
        counterAnim("#count4", 500, 100, 2500);
    });

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 order-md-1 order-sm-2" id="homeone">
                        <h2>The eduWyse</h2>
                        <h1>build for success</h1>
                        <p>Build a smarter organization with the training platform </p>
                        <p>designed to help great teams grow</p>
                        <NavLink id="homeonebtn" to="/signup"><span>get started</span></NavLink>
                        
                    </div>
                    <div className="col-md-5 order-md-2 order-sm-1 img-fluid" id="coadingimg">
                        <img src={coading} alt="coading" />
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 text-white" id="countdown">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <section class="countdownheading1">
                            <h1 class="text-center">Facts</h1>
                        </section>
                    </div>

                    <div className="col-md-3 pt-4 ">
                        <span ><i className="fas fa-building counticon fa-2x"></i><span id="count1" className="display-4"></span></span>
                        <h2 className="pt-4">Companies</h2>
                    </div>
                    <div className="col-md-3 pt-4">
                        <span><i className="far fa-clipboard counticon fa-2x"></i><span id="count2" className="display-4"></span></span>
                        <h2 className="pt-4">Projects</h2>

                    </div>
                    <div className="col-md-3 pt-4 ">
                        <span><i className="fas fa-award counticon fa-2x"></i><span id="count3" className="display-4"></span></span>
                        <h2 className="pt-4">Internship</h2>

                    </div>
                    <div className="col-md-3 pt-4 ">
                        <span><i className="fas fa-user-tie counticon fa-2x "></i><span id="count4" className="display-4"></span></span>
                        <h2 className="pt-4">Hard Workers</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h1 className="pt-4" id="homereview">What students say</h1>
                    <div className="col-md-7 mt-5">
                        <Carousel variant="dark" controls={false} className="shadow-lg p-3 mb-5 bg-white rounded">
                            <Carousel.Item>
                                <Card>
                                    <div className="row">
                                        <div className="col-sm-8 homecard">
                                            <Card.Img variant="top" src={card1} style={{ height: "15rem", width: "25rem" }} className="homecardimg" />
                                        </div>
                                        <div className="col-sm-4 homestuintro">
                                            <h4>Amita Rani</h4>
                                            <h5>placed in</h5>
                                            <h3>Microsoft</h3>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title><i class="fas fa-quote-left fa-2x"></i></Card.Title>
                                        <Card.Text>
                                            <p>The admin side is really intuitive, really user-friendly, really fast. People really like the way it works. And they find it easy. Since we launched TalentLMS, the number of calls from salespeople and account managers with doubts and questions about products, systems, and processes has decreased.</p>
                                            <p>The beauty of TalentLMS is that we just need to invite new users. And without even telling them how to use it, they log in and immediately know what to do and how to do it. We train 1800 people in the blink of an eye. It’s awesome!Before TalentLMS, we would send an email and hope everyone figures it out. Now we can ensure every person has taken the training. It’s as simple as that.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>

                                <Card className="shadow-lg" >
                                    <div className="row">
                                        <div className="col-sm-8 homecard">
                                            <Card.Img variant="top" src={card2} style={{ height: "15rem", width: "25rem" }} className="homecardimg" />
                                        </div>
                                        <div className="col-sm-4 homestuintro">
                                            <h4>Vishal Pal</h4>
                                            <h5>placed in</h5>
                                            <h3>Google</h3>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title><i class="fas fa-quote-left fa-2x"></i></Card.Title>
                                        <Card.Text>
                                            <p>The admin side is really intuitive, really user-friendly, really fast. People really like the way it works. And they find it easy. Since we launched TalentLMS, the number of calls from salespeople and account managers with doubts and questions about products, systems, and processes has decreased.</p>
                                            <p>The beauty of TalentLMS is that we just need to invite new users. And without even telling them how to use it, they log in and immediately know what to do and how to do it. We train 1800 people in the blink of an eye. It’s awesome!Before TalentLMS, we would send an email and hope everyone figures it out. Now we can ensure every person has taken the training. It’s as simple as that.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-5 otherhalf">
                        <div className="homeselection shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="homeselectionhead">eduWyse</h3>
                            <div className=" mt-4">
                                <div className="row">
                                    <div className="col-md-5 text-center ">
                                        <i className="far fa-check-circle fa-3x text-danger otherhalfpart"></i>
                                    </div>
                                    <div className="col-md-7">
                                        <h5>45,000+</h5>
                                        <p>Active Prime Members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 text-center ">
                                    <i className="fas fa-trophy fa-3x text-warning otherhalfpart"></i>
                                </div>
                                <div className="col-md-7">
                                    <h5>87%</h5>
                                    <p>Prime Members Get Selected</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 homeselection3">
                                    <i className="fas fa-male  fa-3x text-success otherhalfpart"></i>
                                    <i className="fas fa-male fa-3x text-success otherhalfpart"></i>
                                    <i className="fas fa-male fa-3x text-success otherhalfpart"></i>
                                    <i className="fas fa-male fa-3x text-success otherhalfpart"></i>
                                    <i className="fas fa-male fa-3x text-success otherhalfpart"></i>
                                </div>
                                <div className="col-md-7 otherhalfpart1">
                                    <h5>9 out of 10</h5>
                                    <p>Select</p>
                                </div>

                                <div className="col-md-5 homeselection3">
                                    <i className="fas fa-male  fa-3x text-success"></i>
                                    <i className="fas fa-male fa-3x text-success"></i>
                                    <i className="fas fa-male fa-3x text-success"></i>
                                    <i className="fas fa-male fa-3x text-success"></i>
                                    <i className="fas fa-male fa-3x"></i>
                                </div>
                                <div className="col-md-7">
                                    <p>Freshers in Company from eduWyse</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="container carouselsec">
                <div className="row">
                    <h1>Students from more than 1000+ colleges, trust eduWyse ….</h1>
                    <div className="col">
                        <OwlCarousel className='owl-theme mt-5' loop margin={10} items={4} nav {...options}>
                            <div class='item'>
                                <img src={uni1} alt="" style={{width:"13rem"}} />
                            </div>
                            <div class='item'>
                            <img src={uni2} alt="" style={{width:"13rem"}}/>
                                
                            </div>
                            <div class='item'>
                            <img src={uni3} alt="" style={{width:"13rem"}}/>

                            </div>
                            <div class='item'>
                            <img src={uni4} alt="" style={{width:"13rem"}} />

                            </div>
                            <div class='item'>
                                <img src={uni5} alt="" style={{width:"13rem"}}/>
                            </div>
                            <div class='item'>
                                <img src={uni6} alt="" style={{width:"13rem"}}/>
                            </div>
                            <div class='item'>
                                <img src={uni7} alt="" style={{width:"13rem"}}/>
                            </div>
            
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
