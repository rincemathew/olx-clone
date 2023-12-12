import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context'
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const history = useHistory()
    const handleLogIN=(e)=>{
      e.preventDefault()
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        alert('Loggin successfull')
        history.push('/')
      }).catch((error)=>{
        alert(error.message)
      })
    }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogIN}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
