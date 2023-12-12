import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/Context'
import Post from './store/postContext'


import Home from './Pages/Home';


function App() {
  const{setUser}=useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/viewpost" element={<View />} />
          </Routes>
        </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
