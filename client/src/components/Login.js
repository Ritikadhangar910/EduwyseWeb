import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import login from '../components/login.jpg'
const Login = () => {
    const history = useHistory();
    const [email, changeemail] = useState('');
    const [password, changepassword] = useState('');
    const signupform = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("invalid")
            console.log("invalid")
        } else {
            history.push('/preparation')
        }
    }
    return (
        <section class="vh-100 mb-5">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11 mb-5">
                        <div class="card text-black">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-md-3">Sign in</p>

                                        <form method="POST" class="mx-1 mx-md-4">


                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" class="form-control" value={email} onChange={(e) =>
                                                        changeemail(e.target.value)} />
                                                    <label class="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" class="form-control" value={password} onChange={(e) =>
                                                        changepassword(e.target.value)
                                                    }
                                                    />
                                                    <label class="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>
                                           

                                            <div class="loginbtn">
                                                <button type="submit" class="btn btn-primary btn-lg ml-4" value="Log In" onClick={signupform} >Sign in</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src={login} class="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    )
}

export default Login
