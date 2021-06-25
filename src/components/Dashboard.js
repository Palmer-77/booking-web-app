import React, { useState,useContext,useEffect } from 'react'
import { Redirect,Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseApp from "../database/firebase";







const DashBoard = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
      return <Redirect to="/login" />;
  }

  return (
    <body style={{ 
      backgroundImage: 'url("https://img3.goodfon.com/wallpaper/nbig/1/28/sunrise-rain-sun-mountain.jpg")',backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <div>
        <center>
          <div > 
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom:10}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Booking Hotel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">หน้าแรก</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ห้องพัก</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ห้องที่จองไว้</a>
        </li>
      </ul>
      <form class="d-flex">
        <Link to="/login" className="btn btn-outline-light" style={{marginRight:5}}>{currentUser.email}</Link>
        <button onClick={() => firebaseApp.auth().signOut()} class="btn btn-danger">ออกจากระบบ</button>
      </form>
    </div>
  </div>
</nav>
            
              <h1>ยินดีต้อนรับสู่ Booking</h1>
              <p>This is the dashboard, if you can see this you're logged in.</p>
              

            

          </div>
          </center>
      </div>
    </body>
  )
}

export default DashBoard;