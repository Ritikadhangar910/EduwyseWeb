import React from 'react'
import footer1 from '../components/footer1.png'
import footer2 from '../components/footer2.png'
import footer3 from '../components/footer3.png'
import smi1 from '../components/smi1.png'
import smi2 from '../components/smi2.png'
import smi3 from '../components/smi3.png'
import smi4 from '../components/smi4.png'
import smi5 from '../components/smi5.png'





const Footer = () => {
    return (
        <>
        <hr className="newhr"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8" >
                    <table className="table mt-4" >
  <tr >
    <th>eduWyse</th>
    <th>Learners</th>
    <th>More</th>
  </tr>
  <tr>
    <td className="pt-3">About</td>
    <td className="pt-3">Partners</td>
    <td className="pt-3">Press</td>
  </tr>
  <tr>
    <td>What We Offer</td>
    <td>Developers</td>
    <td>Investors</td>
  </tr>
  <tr>
    <td>Leadership</td>
    <td>Beta Testers</td>
    <td>Terms</td>
  </tr>
  <tr>
    <td>Careers</td>
    <td>Translators</td>
    <td>Privacy</td>
  </tr>
  <tr>
    <td>Catalog</td>
    <td>Blog</td>
    <td>Help</td>
  </tr>
  <tr>
    <td>Certificates</td>
    <td>Accessibility</td>
    <td>Contact</td>

  </tr>
  <tr>
    <td>Degrees</td>
    <td>Teaching Center</td>
    <td>Articles</td>
  </tr>
  <tr>
    <td>For Campus</td>
    <td>Teaching Center</td>
    <td>IBM</td>
  </tr>
  <tr>
    <td>Refund Policy</td>
    <td>Wipro</td>

  </tr>
  <tr>
    <td>Disclaimer</td>
  </tr>

</table>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="footerhalf ">
                      <h5>Mobile App</h5>
                       <img src={footer1} alt="" className="mt-4"/>
                       <img src={footer2} alt="" className="mt-4" style={{width:"8.3rem",height:"2.5rem"}}/>
                       <img src={footer3} alt="" className="mt-4" style={{width:"5.3rem",height:"5.3rem"}}/>
                       </div>
                     

                    </div>
                </div>
                <hr className="newhr"/>
                <div className="row">
                  <div className="col-md-8">
                    <p>© 2021 eduWyse Inc. All rights reserved.</p>

                  </div>
                  <div className="col-md-4 footer_below">
                  <div class="d-flex justify-content-between d-md-inline">
                   <a href="https://www.facebook.com/"> <img src={smi1} alt="" /></a>
                   <a href="https://www.linkedin.com/"> <img src={smi2} alt="" /></a>
                   <a href="https://twitter.com/"> <img src={smi3} alt="" /></a>
                   <a href="https://www.youtube.com/"><img src={smi4} alt="" /></a>
                   <a href="https://www.instagram.com/"> <img src={smi5} alt="" /></a>
                          </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Footer
