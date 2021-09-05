import React from 'react'
import { NavLink } from 'react-router-dom'
import course from '../components/course.jpg'
import course1 from '../components/course7.jpg'
import course2 from '../components/course8.jpg'
import course3 from '../components/course9.jpg'
import course4 from '../components/course4.png'
import course5 from '../components/course5.jpg'
import course6 from '../components/course10.jpg'
import certi1 from '../components/certi1.jpg'
import certi2 from '../components/certi2.jpg'
import certi3 from '../components/certi5.jpg'
import certi4 from '../components/certi4.jpg'
import addition1 from '../components/addition1.jpg'
import addition2 from '../components/addition2.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Courses = () => {
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
   
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <h1 className="text-center coursehead">High-impact skill development for all teams</h1>
                    <div className="col coursecard">
                        <OwlCarousel className='owl-theme' loop margin={10} nav items={4}  {...options}>
                            <div class='item' >

                                <div className="card mt-4 zoom" style={{ width: "16.7rem", height: "22rem" }}>
                                    <img className="card-img-top" src={course} alt="Card image cap" />
                                    <div className="card-body ">
                                        <h5 className="card-title">Cybersecurity Course</h5>
                                        <p className="card-text mt-4">Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.</p>
                                        <NavLink to="/login" className="mt-5">Learn more</NavLink>
                                    </div>
                                </div>

                            </div>
                            <div class='item'>
                                <div className="card mt-4 zoom" style={{ width: "16.7rem", height: "22rem" }}>
                                    <img className="card-img-top" src={course1} alt="Card image cap" />
                                    <div className="card-body ">
                                        <h5 className="card-title">Machine Learning Course</h5>
                                        <p className="card-text mt-4">Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.</p>
                                        <NavLink to="/login" className="mt-5">Learn more</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card mt-4 zoom" style={{ width: "16.7rem", height: "22rem" }}>
                                    <img className="card-img-top" src={course2} alt="Card image cap" />
                                    <div className="card-body ">
                                        <h5 className="card-title"> Web Development Course</h5>
                                        <p className="card-text mt-4">Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.</p>
                                        <NavLink to="/login" className="mt-5">Learn more</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card mt-4 zoom" style={{ width: "16.7rem", height: "22rem" }}>
                                    <img className="card-img-top" src={course3} alt="Card image cap" />
                                    <div className="card-body ">
                                        <h5 className="card-title">Web Designing</h5>
                                        <p className="card-text mt-4">Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.</p>
                                        <NavLink to="/login" className="mt-5">Learn more</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card mt-4 zoom" style={{ width: "16.7rem", height: "22rem" }}>
                                    <img className="card-img-top" src={course4} alt="Card image cap" />
                                    <div className="card-body ">
                                        <h5 className="card-title">Search engine optimization Course</h5>
                                        <p className="card-text mt-4">Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.</p>
                                        <NavLink to="/login" className="mt-5">Learn more</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card mt-4 zoom" style={{ width: "16.7rem", height: "22rem" }}>
                                    <img className="card-img-top" src={course5} alt="Card image cap" />
                                    <div className="card-body ">
                                        <h5 className="card-title">Python Course</h5>
                                        <p className="card-text mt-4">Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.</p>
                                        <NavLink to="/login" className="mt-5">Learn more</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card mt-4 zoom" style={{ width: "16.7rem", height: "22rem" }}>
                                    <img className="card-img-top" src={course6} alt="Card image cap" />
                                    <div className="card-body ">
                                        <h5 className="card-title">Digital Marketing Course</h5>
                                        <p className="card-text mt-4">Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.</p>
                                        <NavLink to="/login" className="mt-5">Learn more</NavLink>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>;
                    </div>
                </div>
            </div>
            <div className="course2">
                <div className="container">
                    <div className="row">
                        <h1>Explore MasterTrack® Certificates</h1>
                        <div class="card m-1 mt-4" style={{ width: "17rem" }}>
                            <div class="front">
                                <img class="card-img-tNavLinkp" src={certi1} alt="Card image cap" style={{ height: "9rem" }}/>
                                <div class="card-body">
                                    <h5 class="card-title">Cybersecurity MasterTrack Certificate</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="classpara">Professional Certificate</p>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-4 m-1 " style={{ width: "17rem" }}>
                            <img class="card-img-top" src={certi2} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">AI MasterTrack Certificate</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="classpara">Professional Certificate</p>

                            </div>
                        </div>
                        <div class="card mt-4 m-1" style={{ width: "17rem" }}>
                            <img class="card-img-top" src={certi3} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Big Data MasterTrack Certificate</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="classpara">Professional Certificate</p>
                            </div>
                        </div> <div class="card mt-4 m-1" style={{ width: "17rem" }}>
                            <img class="card-img-top" src={certi4} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">SEO MasterTrack Certificate</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="classpara">Professional Certificate</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 coures2 bg-light">
                <div className="row">
                    <div className="col m-2">
                        <div className="row shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="col-md-7">
                                <small>GOOGLE CLOUD</small>
                                <h5 className="course3head1">20% off Google Cloud certificate exams</h5>
                                <p className="course3para">Complete a Google Cloud  Certificate and save on  certificate exam</p>
                                <NavLink to="/login"><button type="button" className="btn btn-outline-primary course3btn">find out how</button></NavLink> 
                            </div>
                            <div className="col-md-5">
                                <img src={addition1} alt="img" />
                            </div>
                        </div>

                    </div>
                    <div className="col m-2">
                        <div className="row shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="col-md-7">
                                <small>UNIVERSITY OF NORTH TEXAS</small>
                                <h5 className="course3head1">Transfer credits to earn your bachlor's degree</h5>
                                <p className="course3para">Complete a Google Cloud  Certificate and save on  certificate exam</p>
                                <NavLink to="/login"><button type="button" className="btn btn-outline-primary course3btn">find out how</button></NavLink>
                            </div>
                            <div className="col-md-5">
                                <img src={addition2} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4 course4">
                <div className="row">
                    <div className="col-md-7 text-secondary">
                    <h2>7 million students got their 1st job with our help !!! Would you dare to dream ?</h2>

                    </div>
                    <div className="col-md-5 text-center">
                        <h1>eduWyse</h1>
                      <NavLink to="/signup">  <button className="btn btn-outline-primary">Sign Up</button>
                      </NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Courses
