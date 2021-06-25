import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import firebaseApp from "../database/firebase";

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <body>
            <center>
                <div className="container">
                <h1>สมัครสมาชิกเป็นผู้ใช้ Booking Hotel</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">อีเมล</label>
                    <input type="email" name="email" placeholder="อีเมล" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">รหัสผ่าน</label>
                    <input type="password" name="password" placeholder="ตั้งรหัสอย่างน้อย 8 ตัว" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">ลงทะเบียน</button>
                <p style={{marginTop:8,marginBottom:1}}>หรือ</p>
                <Link to="/login" >Log In</Link>
                </form>
                </div>
            </center>
        </body>
    )
}

export default SignUp;
