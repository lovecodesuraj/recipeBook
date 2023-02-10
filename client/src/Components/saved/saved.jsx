import { CircularProgress, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Paper} from "@material-ui/core"
import "./styles.css";

const Saved = () => {
    // const user=localStorage.getItem('profile');
    const [loading,setLoading]=useState(true);
    const {id}=useParams();
    const [user,setUser]=useState({});

    useEffect(()=>{

      const getUser=async()=>{
        try {        
        setLoading(true);
        const {data}= await axios.get(`http://localhost:5000/users/${id}`);
        setUser(data);
        console.log(user);
        setLoading(false);
        } catch (error) {
          console.log(error);   
        }
      }
      getUser();
    },[])
  return <>
   {loading?<CircularProgress/>:<div className='container'>

      {user.savedRecipes.map(recipe=>
     <div className='recipeCard' >
        <img className='recipeCardImage'  src={recipe.image}/>
        <p className='recipeCardName'> {recipe.label}</p>
    </div>
    )}
    </div>
    }
  </>
}

export default Saved