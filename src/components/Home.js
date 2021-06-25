import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'

const Home = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <body> 
            <center>
                <div> 
                    <h1 style={{color:'white'}}>Booking</h1>
                    {currentUser ? (
                        <p>คุณล็อคอินอยู่นะ<Link to="/dashboard">กลับไปหน้าแรกของเว็บ</Link></p>
                    ) : (
                            <p>
                                <Link to="/login" className="btn btn-primary" style={{marginTop:10}}>เข้าสู่เว็บไซต์</Link>
                            </p> 
                    )}
                </div>
            </center>
        </body>
    )
}

export default Home;