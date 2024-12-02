import React, { useEffect, useState } from 'react'
import ScoreApi from './ScoreApi'

const CricketApp = () => {
  // const [score,setScore]=useState([]);
  // const [match,setMatch]=useState([]);
  useEffect(()=>{
    const fetchCricketScore=async ()=>{
      try {
       const response=await fetch('http://localhost:8080/cricket-scores');
       const data=await response.json();
       console.log(data)
      } catch (error) {
        console.error('Error fetching cricket scores:', error);
      }
    }
    fetchCricketScore();

  },[])
  return (
    <div>
        <h1>WelCome to the Live cricKet Score App</h1>
        <ScoreApi />
    </div>
  )
}

export default CricketApp
