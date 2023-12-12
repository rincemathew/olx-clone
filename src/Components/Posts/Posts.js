import React,{useState,useContext,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/postContext';

function Posts() {
  const {firebase}=useContext(FirebaseContext)
  const [products,setProducts]=useState([])
  const{setPostDetails}=useContext(postContext)
  const history=useHistory()
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allpost=snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
      setProducts(allpost)
    })
  },[])

  return (
    <div className="postParentDiv">
      
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
      {products.map(product=>{
        return(
        <div className="card"
        onClick={()=>{
          setPostDetails(product)
          history.push('/viewpost')
        }}
        >
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image">
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">{product.price}</p>
          <span className="kilometer">{product.category}</span>
          <p className="name">{product.name}</p>
        </div>
        <div className="date">
          <span>{product.createdAt}</span>
        </div>
      </div>
        )
      })
          }
        </div>
      </div>
    </div>
  );
}

export default Posts;
