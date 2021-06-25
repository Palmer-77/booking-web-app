import React, { useContext,useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebase from "firebase/app";
import { Link } from 'react-router-dom'

var uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: async (authResult) => {
        const userInfo = authResult.additionalUserInfo;
        if (userInfo.isNewUser && userInfo.providerId === "password") {
          try {
            await authResult.user.sendEmailVerification();
            console.log("Check your email.");
          } catch (e) {
            console.log(e);
          }
        }
        return false;
      },
    },
  };


const LogIn = () => {

    const [user, setUser] = useState(null);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return authObserver;
  });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {
          firebase.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }


    return (
        <body>
          <center>
            <div className="container" >
            <h1>เข้าสู่ระบบ Booking</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">อีเมล</label>
                <input type="email" name="email" placeholder="อีเมล" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">รหัสผ่าน</label>
                <input type="password" name="password" placeholder="รหัสผ่าน" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">เข้าสู่ระบบ</button>
            <p style={{marginTop:8,marginBottom:1}}>
              หรือ
            </p>
            <Link to="/signup">สมัครสมาชิก</Link>
            </form>
            </div>
          </center>
        </body>
    )
}

export default LogIn;