import React, {useEffect, useState}  from 'react'
import prepare1 from '../components/prepare1.png'
import prepare2 from '../components/prepara2.jpg'
import logo3 from '../components/prepare3.png'
import logo4 from '../components/logo4.png'
import logo2 from '../components/logo2.png'
import prepare3 from '../components/prepare4.png';

import { NavLink, useHistory } from "react-router-dom";

const Preparation = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/preparation', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
           <div className="container-fluid preparecon">
               <div className="row">
               { (()=>{ 
                          if(userData.state==="TCS NQT"){
                        return(    <div className="col-md-10" style={{float:"none",margin:"auto"}}>
                        <div className="card mt-4 p-4 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "48rem",margin:"auto"}}>
                            <h1 className="text-center">How to Prepare for TCS</h1>
                            <p className="pt-2">TCS CodeVita is going to kick start soon. In this article, we will be discussing how to prepare for TCS.TCS is ranked as the world’s 10th largest If you are aiming to  punched card service to Tata Steel this article will give you a better insight.</p>
                            <img src={prepare1} alt="err" className="img1pre"/>
                           <ul>
                               <li className="mt-3 mt-md-2"><NavLink className="preplink" to="">TCS NQT Questions | TCS NQT Placement Papers with solutions</NavLink></li>
                               <li><NavLink to="" className="preplink"> TCS NQT Interview Questions for National Questions Test| Technical and HR Questions</NavLink></li>
                               <li><NavLink to="" className="preplink">TCS Coding Questions And Answer (Latest)</NavLink></li>
                               <li><NavLink to="" className="preplink">TCS NQT Numerical Ability Questions And Answer</NavLink></li>
                               <li><NavLink to="" className="preplink">TCS NQT Questions | Reasioning Ability</NavLink></li>
                               <li><NavLink to="" className="preplink">TCS NQT Verbal Ability Questions and Answer</NavLink></li>
     
     
                           </ul>
     
                            </div> 
                        </div>
                      
                        )
    
                        }else if(userData.state==="Infosys"){
                           return(   <div className="col-md-10" style={{float:"none",margin:"auto"}}>
                           <div className="card mt-4 p-4 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "48rem",margin:"auto"}}>
                               <h1 className="text-center">How to Prepare for Infosys</h1>
                               <p className="pt-2">Infosys is going to kick start soon. In this article, we will be discussing how to prepare for TCS.TCS is ranked as the world’s 10th largest If you are aiming season 10, punched card service to Tata Steel this article will give you a better insight.</p>
                               <img src={prepare2} alt="err"  className="img2pre"/>
                              <ul>
                                  <li className="mt-3 mt-md-2"><NavLink className="preplink" to="">Infosys Questions | Infosys Placement Papers with solutions</NavLink></li>
                                  <li><NavLink to="" className="preplink">Infosys Interview Questions for National Questions Test| Technical and HR Questions</NavLink></li>
                                  <li><NavLink to="" className="preplink">Infosys Coding Questions And Answer (Latest)</NavLink></li>
                                  <li><NavLink to="" className="preplink">Infosys Numerical Ability Questions And Answer</NavLink></li>
                                  <li><NavLink to="" className="preplink">Infosys Questions | Reasioning Ability</NavLink></li>
                                  <li><NavLink to="" className="preplink">Infosys Verbal Ability Questions and Answer</NavLink></li>
        
        
                              </ul>
        
                               </div> 
                           </div>
                                                    )
                        }
                        else if(userData.state==="Microsoft"){
                            return(   <div className="col-md-10" style={{float:"none",margin:"auto"}}>
                            <div className="card mt-4 p-4 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "48rem",margin:"auto"}}>
                                <h1 className="text-center">How to Prepare for Microsoft</h1>
                                <p className="pt-2">Microsoft is going to kick start soon. In this article, we will be discussing how to prepare for TCS.TCS is ranked as the world’s 10th largest If you are aiming season 10, punched card service to Tata Steel this article will give you a better insight.we will be discussing how to prepare for TCS.TCS is ranked as the world’s 10th largest If you are aiming season 10, punched card service to Tata Steel this article will give you a better insight.</p>
                                <img src={logo3} alt="err" className="mb-5 img3prep"/>
                              <ul>
                                   <li ><NavLink className="preplink" to="">Microsoft Questions | Microsoft Placement Papers with solutions</NavLink></li>
                                   <li><NavLink to="" className="preplink"> Microsoft Interview Questions for National Questions Test| Technical and HR Questions</NavLink></li>
                                   <li><NavLink to="" className="preplink">Microsoft Coding Questions And Answer (Latest)</NavLink></li>
                                   <li><NavLink to="" className="preplink">Microsoft Numerical Ability Questions And Answer</NavLink></li>
                                   <li><NavLink to="" className="preplink">Microsoft Questions | Reasioning Ability</NavLink></li>
                                   <li><NavLink to="" className="preplink">Microsoft Verbal Ability Questions and Answer</NavLink></li>
         
         
                               </ul>
         
                                </div> 
                            </div>
                         
                            )
                         }else if(userData.state==="Google"){
                            return(  <div className="col-md-10" style={{float:"none",margin:"auto"}}>
                            <div className="card mt-4 p-4 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "48rem",margin:"auto"}}>
                                <h1 className="text-center">How to Prepare for Google</h1>
                                <p className="pt-2">Google is going to kick start soon. In this article, we will be discussing how to prepare for TCS.TCS is ranked as the world’s 10th largest If you are aiming to service to Tata Steel this article will give you a better insight.</p>
                                <img src={logo4} alt="err" className="img4prep"/>
                               <ul>
                                   <li className="mt-3 mt-md-2"><NavLink className="preplink" to="">Google Questions | Google Placement Papers with solutions</NavLink></li>
                                   <li><NavLink to="" className="preplink"> Google Interview Questions for National Questions Test| Technical and HR Questions</NavLink></li>
                                   <li><NavLink to="" className="preplink">Google Coding Questions And Answer (Latest)</NavLink></li>
                                   <li><NavLink to="" className="preplink">Google Numerical Ability Questions And Answer</NavLink></li>
                                   <li><NavLink to="" className="preplink">Google Questions | Reasioning Ability</NavLink></li>
                                   <li><NavLink to="" className="preplink">Google Verbal Ability Questions and Answer</NavLink></li>
         
         
                               </ul>
         
                                </div> 
                            </div>
                           
                            )
                         }else if(userData.state==="Amazon"){
                            return(    <div className="col-md-10" style={{float:"none",margin:"auto"}}>
                            <div className="card mt-4 p-4 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "48rem",margin:"auto"}}>
                                <h1 className="text-center">How to Prepare for Amazon</h1>
                                <p className="pt-2">Amazon is going to kick start soon. In this article, we will be discussing how to prepare for TCS.TCS is ranked as the world’s 10th largest If you are aiming 10, punched card service to Tata Steel this article will give you a better insight.</p>
                                <img src={logo2} alt="err" className="img5prep"/>
                               <ul>
                                   <li className="mt-3 mt-md-2"><NavLink className="preplink" to="">Amazon Questions | Amazon Placement Papers with solutions</NavLink></li>
                                   <li><NavLink to="" className="preplink"> Amazon Interview Questions for National Questions Test| Technical and HR Questions</NavLink></li>
                                   <li><NavLink to="" className="preplink">Amazon Coding Questions And Answer (Latest)</NavLink></li>
                                   <li><NavLink to="" className="preplink">Amazon Numerical Ability Questions And Answer</NavLink></li>
                                   <li><NavLink to="" className="preplink">Amazon Questions | Reasioning Ability</NavLink></li>
                                   <li><NavLink to="" className="preplink">Amazon Verbal Ability Questions and Answer</NavLink></li>
         
         
                               </ul>
         
                                </div> 
                            </div>
                         )
                         }
                         else{
                            return(   <div className="col-md-10" style={{float:"none",margin:"auto"}}>
                            <div className="card mt-4 p-4 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "48rem",margin:"auto"}}>
                                <h1 className="text-center">How to Prepare for Facebook</h1>
                                <p className="pt-2">Facebook is going to kick start soon. In this article, we will be discussing how to prepare for TCS.TCS is ranked as the world’s 10th largest If season 10, punched card service to Tata Steel this article will give you a better insight.</p>
                                <img src={prepare3} alt="err" className="img6prep" />
                               <ul>
                                   <li className="mt-3 mt-md-2"><NavLink className="preplink" to="">Facebook Questions | Facebook Placement Papers with solutions</NavLink></li>
                                   <li><NavLink to="" className="preplink"> Facebook Interview Questions for National Questions Test| Technical and HR Questions</NavLink></li>
                                   <li><NavLink to="" className="preplink">Facebook Coding Questions And Answer (Latest)</NavLink></li>
                                   <li><NavLink to="" className="preplink">Facebook Numerical Ability Questions And Answer</NavLink></li>
                                   <li><NavLink to="" className="preplink">Facebook Questions | Reasioning Ability</NavLink></li>
                                   <li><NavLink to="" className="preplink">Facebook Verbal Ability Questions and Answer</NavLink></li>
         
         
                               </ul>
         
                                </div> 
                            </div>
                     )              
                              }
                    }
                      )()
                    }

                 
               </div>
           </div>
        </>
    )
}

export default Preparation
