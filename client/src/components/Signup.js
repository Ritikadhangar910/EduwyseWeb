import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const [user, setuser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: "",state:""
    })
    let value, name;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value })
    }
    const registrationform = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, state, password, cpassword } = user;
        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, state, password, cpassword
            })
        })
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("invalid registration")
            console.log("invalid registration");
        } else {
            window.alert("successfully registration")
            history.push("/login")
        }

    }

    return (
        <>
            <div className="container-fluid signupcon">
                <div className="row">
                    <h1 className="mt-3 text-center">Sign up Now</h1>
                    <div className="col-md-5 mt-3 shadow-lg p-3 mb-5 bg-white rounded" style={{float:"none",margin:"auto"}} >
                        <form method="POST" >
                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                    <label for="name">Your name</label>
                                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="your name"
                                    name="name" value={user.name} onChange={handleInputs} />
                            </div>
                                    <div className="col-md-6 mt-3">              
                                    <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={user.email} onChange={handleInputs} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>      
                                    </div>
                            <div className="form-group mt-1">
                                <label for="name1">Contact No</label>
                                <input type="tel" class="form-control" id="name1" aria-describedby="emailHelp" placeholder="Contact No" name="phone" value={user.phone} onChange={handleInputs} />
                            </div>
                            <div className="form-group mt-3">
                                <label for="name3">Your Profession</label>
                                <input type="text" class="form-control" id="name3" aria-describedby="emailHelp" placeholder="your profession" name="work" value={user.work} onChange={handleInputs} />
                            </div>
                            <div className="form-group mt-3">
                                <label for="inputState" class="form-label" >Prepare For</label>
                                <select id="inputState" class="form-select" name="state"
                                value={user.state} onChange={handleInputs}>
                                    <option >Choose...</option>
                                    <option >TCS NQT</option>
                                    <option>Infosys</option>
                                    <option>Microsoft</option>
                                    <option>Google</option>
                                    <option>Amazon</option>
                                    <option>Facebook</option>

                                </select>
                            </div>

                            <div className="form-group mt-3">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={user.password} onChange={handleInputs} />
                            </div>
                            <div className="form-group mt-3">
                                <label for="exampleInputPassword2">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" name="cpassword" value={user.cpassword} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Sign up" name="signup"
                                    className="form-submit btn btn-block
                                    btn-primary mt-3 mb-2" onClick={registrationform} />
                            </div>
                    

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
