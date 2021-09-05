import React from 'react'
import about1 from '../components/about1.png'
import about2 from '../components/about2.png'
import { NavLink } from 'react-router-dom'


const About = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 aboutimg1">
                        <img src={about1} alt="" />
                    </div>
                    <div className="col-md-7 aboutimg1text">
                        <h1>Our mission</h1>
                        <p>There are three commitments we've made to the world. We've been grounded by these since day one:</p>
                        <ul>
                            <li>Increase access to high-quality education for everyone, everywhere</li>
                            <li>Enhance teaching and learning on campus and online</li>
                            <li>Advance teaching and learning through research</li>

                        </ul>

                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row about2text ">
                    <div className="col">                    Every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential. Yet, access to high-quality education has been a privilege of the few. Back in 2012, we realized it was a time for a seismic shift in learning. From the tried and true to the leading edge. From “for some” to “for all.” By opening the classroom through online learning, edX empowers millions of learners to unlock their potential and become changemakers.groundbreaking stackable credentials expanded access to graduate-level education.Georgia Tech’s Master of Science in Analytics paved the way for master’s degrees on edX.
                    </div>

                </div>
            </div>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-md-7 about3text order-2 order-md-1">
                     <h1>Our story From experiment to global movement</h1>
                     <p>While the internet was enabling innovation at scale across a vast array of industries, higher education was reaching only a tiny fraction of the world’s curious minds. One afternoon in an MIT lab Professor Anant Agarwal and his colleagues from MIT and Harvard sketched out a long shot experiment: a platform that would offer their courses online, open to any person up to the challenge, for free. In February of 2012 Professor Agarwal’s MIT Circuits and Electronics course was launched, and edX.org was born.</p>
                    </div>
                    <div className="col-md-5 about3img order-1 order-md-2">
                     <img src={about2} alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col about4text p-1">
                        <h1>Careers at eduWyse</h1>
                        <p>To explore more about how edX united our global community of learners, addressed urgent needs in higher education, and helped businesses foster resilience and employability, download the full 2021 edX Impact Report.We are building, partnering, and promoting a software platform that brings together the best universities from all around the world to create courses for everyone, everywhere in the world—but we can’t do it without dedicated and talented people.
                        </p>
                     <NavLink to="/"><button className="btn-dark" >Find a position and apply</button></NavLink>    

                    </div>
                </div>
            </div>

        </>
    )
}

export default About
