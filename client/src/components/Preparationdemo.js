import React from 'react'
import { Carousel } from 'react-bootstrap'
import logo1 from '../components/logo1.png'
import logo2 from '../components/logo2.png'
import logo4 from '../components/logo4.png'
import logo5 from '../components/logo5.png'
import logo7 from '../components/logo7.png'
import smartboard from '../components/smartboard.png'
import { NavLink } from 'react-router-dom'



const Preparationdemo = () => {
    return (
        <>
            <h1 className=" text-md-start text-center premainheading mt-md-4 mt-2">Companies Preparation Courses</h1>
                <Carousel variant="dark" indicators={false} className="shadow-lg p-3 mb-5 bg-white rounded">
  <Carousel.Item>
  <div className="container mt-md-5 mt-2">       
          <div className="row">
            <div className="col-md-2 offset-md-2 preparationdemo1img">
              <img src={logo1} alt="" />
              <h1 className="text-center">Apple</h1>
            </div>
             <div className="
             col-md-6">
               <div className="preparationdemo1text text-center text-md-start">
                   <h2>Let's Prepare For Apple</h2>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae eius modi dolorum commodi, ratione cum perspiciatis dignissimos enim dolor sed rerum, ea velit! Placeat, labore! Ipsum itaque, repudiandae magni, earum unde blanditiis eligendi voluptates temporibus quasi impedit commodi id qui illum fugiat praesentium cumque quaerat debitis quam consequatur tempora voluptas!</p>
             <NavLink to="/login" ><button className="btn btn-primary">Learn More</button></NavLink>
             </div>
            </div>
          </div>
        </div>
       
     </Carousel.Item>

  <Carousel.Item>
  <div className="container mt-5">       
          <div className="row">
            <div className="col-md-2 offset-md-2 preparationdemo1img">
              <img src={logo5} alt="" style={{width:"10rem",height:"4rem"}} className="mt-5"/>
              <h1 className="text-center mt-4">Infosys</h1>
            </div>
             <div className="
             col-md-6">
               <div className="preparationdemo1text">
                   <h2>Let's Prepare For Infosys</h2>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae eius modi dolorum commodi, ratione cum perspiciatis dignissimos enim dolor sed rerum, ea velit! Placeat, labore! Ipsum itaque, repudiandae magni, earum unde blanditiis eligendi voluptates temporibus quasi impedit commodi id qui illum fugiat praesentium cumque quaerat debitis quam consequatur tempora voluptas!</p>
             <NavLink to="/login" ><button className="btn btn-primary">Learn More</button></NavLink>

             </div>
            </div>
          </div>
        </div>
   
  </Carousel.Item>
  <Carousel.Item>
  <div className="container mt-5">       
          <div className="row">
            <div className="col-md-2 offset-md-2 preparationdemo1img">
              <img src={logo4} alt="" style={{width:"10rem",height:"5rem"}} className="mt-5"/>
              <h1 className="text-center">Google</h1>
            </div>
             <div className="
             col-md-6">
               <div className="preparationdemo1text">
                   <h2>Let's Prepare For Google</h2>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae eius modi dolorum commodi, ratione cum perspiciatis dignissimos enim dolor sed rerum, ea velit! Placeat, labore! Ipsum itaque, repudiandae magni, earum unde blanditiis eligendi voluptates temporibus quasi impedit commodi id qui illum fugiat praesentium cumque quaerat debitis quam consequatur tempora voluptas!</p>
             <NavLink to="/login" ><button className="btn btn-primary">Learn More</button></NavLink>

             </div>
            </div>
          </div>
        </div>
 
   
  </Carousel.Item>
       
  <Carousel.Item>
  <div className="container mt-5">       
          <div className="row">
            <div className="col-md-2 offset-md-2 preparationdemo1img">
              <img src={logo2} alt="" />
              <h1 className="text-center">Amazon</h1>
            </div>
             <div className="
             col-md-6">
               <div className="preparationdemo1text">
                   <h2>Let's Prepare For Amazon</h2>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae eius modi dolorum commodi, ratione cum perspiciatis dignissimos enim dolor sed rerum, ea velit! Placeat, labore! Ipsum itaque, repudiandae magni, earum unde blanditiis eligendi voluptates temporibus quasi impedit commodi id qui illum fugiat praesentium cumque quaerat debitis quam consequatur tempora voluptas!</p>
             <NavLink to="/login" ><button className="btn btn-primary">Learn More</button></NavLink>

             </div>
            </div>
          </div>
        </div>

   
   </Carousel.Item><Carousel.Item>
   <div className="container mt-5">       
          <div className="row">
            <div className="col-md-2 offset-md-2 preparationdemo1img">
               <img src={logo7} alt="" style={{width:"11rem"}} />
              <h1 className="text-center">TCS</h1>
            </div>
             <div className="
             col-md-6">
               <div className="preparationdemo1text">
                   <h2>Let's Prepare For TCS</h2>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae eius modi dolorum commodi, ratione cum perspiciatis dignissimos enim dolor sed rerum, ea velit! Placeat, labore! Ipsum itaque, repudiandae magni, earum unde blanditiis eligendi voluptates temporibus quasi impedit commodi id qui illum fugiat praesentium cumque quaerat debitis quam consequatur tempora voluptas!</p>
             <NavLink to="/login" ><button className="btn btn-primary">Learn More</button></NavLink>

             </div>
            </div>
          </div>
        </div>  
 
   
   </Carousel.Item>
</Carousel>
<div className="container-fluid pt-4 predemo2 bg-light">
  <div className="row">
    <div className="col-md-5 offset-md-1">
      <h1 className="text-center text-md-start">Live Classes</h1>
      <p className="mt-5 text-center text-md-start">Company Specific online classes and much more</p>
      <p className="text-center text-md-start">you will get in it</p>
      <NavLink to="/login"><button className="btn-lg btn btn-primary">Enroll now</button></NavLink>
    </div>
    <div className="col-md-6 predemo2part2 ">
        <span className="div one shadow-lg p-3 mb-5 bg-white rounded d-inline-block">
        <i className="far fa-check-circle fa-2x text-danger"></i>
      <span className="iconline ">  PrepInsta Online Classes are now PrepInsta Prime Video Courses
      </span>
        </span>
        <br />
        <div className=" pt-5 ">
        <span className="div shadow-lg p-3 mb-5 bg-white rounded d-inline-block">
        <i className="far fa-check-circle fa-2x text-danger"></i>
     <span className="iconline">  Highly rated courses, taken by more than 1 million students every year
     </span>
        </span>
        </div>
    </div>
  </div>
  </div>  
  <div className="container-fluid mt-5 bg-light">
    <div className="row">
    <div className="col-md-6 predemo2part2 ">
        <span className="div shadow-lg p-3 mb-5 bg-white rounded d-inline-block">
        <i className="far fa-check-circle fa-2x text-danger"></i>
      <span className="iconline ">PrepInsta Paid Materials are now PrepInsta Prime Mocks
      </span>
        </span>
        <br />
        <div className=" pt-5 ">
        <span className="div shadow-lg p-3 mb-5 bg-white rounded d-inline-block">
        <i className="far fa-check-circle fa-2x text-danger"></i>
     <span className="iconline">  20+ Full Mocks 300+ Topic wise Mocks for each company
     </span>
        </span>
        </div>
    </div>
        <div className="col-md-5 offset-md-1 predemo2">
        <span className="div predemo3 ">
        <span className="myhead ">Previous Paper</span>
        <i className="fas fa-clipboard-list fa-3x"></i>
                </span>    
      <p className="mt-3 mt-md-5">Company Specific topic wise and full mocks and much more</p>
      <p className="text-start text-center text-md-start">you will get in it</p>
      <NavLink to="/login"><button className="btn-lg btn btn-primary">Enroll now</button></NavLink>
      </div>
    </div>
    </div>    
    <div className="container smartboard pt-5">
      <div className="row">
        <h1 className="smartboardhead text-center text-md-start">Smart Dashboard</h1>
        <div className="col-md-6 ">
        <img src={smartboard} alt="" />
        </div>
        <div className="col-md-6 smartboard2">
          <h1 className="text-center text-md-start">Question Level Analytics</h1>
          <p>Check how other students performed, in comparison to you for a question</p>
          <NavLink to="/login"><button className="btn-lg btn btn-primary">Enroll now</button></NavLink>

        </div>

      </div>
      </div> 
      <div className="container mt-5 text-center demolast">
        <div className="row">
          <div className="col">
            <h1>70,000+ teams</h1>
            <h2>find training success with TalentLMS</h2>
            </div></div></div> 
        </>
    )
}

export default Preparationdemo
