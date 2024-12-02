import React, { useEffect, useState } from 'react'
import ScoreApi from './ScoreApi'

const CricketApp = () => {
  // const [score,setScore]=useState([]);
  // const [match,setMatch]=useState([]);
  useEffect(()=>{
    const fetchCricketScore=async ()=>{
      try {
        const apiKey='2d368239-1f63-490e-8773-7d78c9b5f3de';
        const url = `https://cricapi.com/api/matches?apikey=${apiKey}`;
        const response=await fetch(url,{
          method: 'GET',
          mode: 'no-cors'
        });
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
