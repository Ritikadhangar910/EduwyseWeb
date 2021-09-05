import React, { useEffect, useState } from 'react'

const Contact = () => {

    const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

    const userContact = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            console.log(data);
            setUserData({...userData, name:data.name, email:data.email, phone:data.phone });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userContact();
    }, []);

    // we are storing data in states 

        const handleInputs = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            setUserData({ ...userData, [name]:value });
        }   

       //  send the data to backend 

        const contactForm = async (e) => {
            e.preventDefault();

            const { name, email, phone, message } = userData;

            const res = await fetch('/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, message
                })
            });

            const data = await res.json();

            if (!data) {
                console.log("message not send ");
            } else {
                alert("Message has sucessfully Send");
                setUserData({ ...userData, message:"",name:"",email:"",phone:""});
            }

        }


    return (
        <>
           <div className="container mt-4">
                <div className="row">

                    <div className="col-md-3 offset-md-0">
                        <div className="row shadow-lg p-3 mb-5 bg-white rounded ">
                            <div className="col-2">
                                <i class="fas fa-map-marker-alt fa-2x mt-2"></i>
                            </div>
                            <div className="col-10 ">
                                <h3 className="">Location: </h3>
                                <small className="inline">S-51 CCS University, Campus </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <div className="row shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="col-2">
                                <i class="fas fa-envelope fa-2x mt-2"></i>
                            </div>
                            <div className="col-10">
                            <h3>Email: </h3>
                            <small>dhangarritika91@gmail.com</small>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1 ">
                        <div className="row shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="col-2">
                                <i class="fas fa-phone fa-2x mt-2 "></i>
                            </div>
                            <div className="col-10">
                                <h3>Call: </h3>
                                <small >+1 5589 55488 55</small>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
       
            {/* contact us form  */}

            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Contact Us</h1>
                        <div className="col-md-8 offset-lg-1 shadow-lg p-3 mb-5 bg-white rounded"  style={{float:"none",margin:"auto"}}>
                            <div className="contact_form_container py-5">
                                <form method="POST" id="contact_form"> 
                                <div className="row">
                                    <div className="col-md-6">
                                    <label for="email">Your Name</label>
                                    <input type="text" id="contact_form_name"
                                            className="form-control"
                                                name="name"
                                            value={userData.name}
                                            onChange={handleInputs}
                                             required />
                                    </div>
                                    <div className="col-md-6">
                                    <label for="email">Your Email</label>
                                    <input type="email" id="contact_form_email"
                                            className="form-control"
                                                name="email"
                                            value={userData.email}
                                            onChange={handleInputs}
                                            required />

                                    </div>
                                </div>
                                    <label for="contact_form_phone" className="mt-3">Contact No.</label>
                                         <input type="tel" id="contact_form_phone"
                                            className="form-control"
                                            name="phone"
                                        value={userData.phone}
                                        onChange={handleInputs}
                                        required  />

                                        <label for="Message" className="mt-3">Your Message</label>
                                    <div className="contact_form_text">
                                        <textarea className="form-control"
                                        id="Message"
                                            name="message"
                                           value={userData.message}
                                           onChange={handleInputs}
                                            cols="30" rows="10"></textarea>
                                    </div>

                                    <div className="contact_form_button">
                                        <button type="submit" className="btn btn-outline-primary mt-4"
                                        onClick={contactForm}>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                     </div>
                 </div>   
        </div>
         
        </>
    )
}

export default Contact
