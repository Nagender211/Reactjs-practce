import React, { useEffect, useState } from 'react'
import Profile from './Profile'

import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';
import AllJobs from './AllJobs';

const Jobs = () =>{
  const [ProfileDetails,setProfileDetails] = useState([]);
  const [jobs,setJobs] = useState([]);
  
  const jwtToken = Cookies.get('jwt-token');
  useEffect(() => {
    const fetchProfile  = async ()=>{
      
      const url='https://apis.ccbp.in/profile';
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      const response = await fetch(url,options);
      const data = await response.json();
      console.log(data);
      const updateProfileDeatils={
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio
      }
      setProfileDetails(updateProfileDeatils);
    }
  
    const getApiJobs= async ()=>{
      const url='https://apis.ccbp.in/jobs';
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      const response = await fetch(url,options);
      const data = await response.json();
      console.log(data);
      const updatejobs=data.jobs.map(job=>(
        {
          companyLogoUrl: job.company_logo_url,
          employmentType: job.employment_type,
          id: job.id,
          jobDescription: job.job_description,
          location: job.location,
          packagePerAnnum: job.package_per_annum,
          rating: job.rating,
          title: job.title
        }
      ))
      setJobs(updatejobs);
    }
    if(jwtToken){
      fetchProfile();
      getApiJobs();
     
    }
  

  },[jwtToken])
  if(!jwtToken){
    return <Navigate to='/login' />
  }
  
  return (
    <div>
      <h1>Jobs</h1>
      <Profile
        name={ProfileDetails.name}
        profileImageUrl={ProfileDetails.profileImageUrl}
        shortBio={ProfileDetails.shortBio}
      />
      {
        jobs.map(job => (
          <AllJobs
            companyLogoUrl={job.companyLogoUrl}
            employmentType={job.employmentType}
            id={job.id}
            jobDescription={job.jobDescription}
            location={job.location}
            packagePerAnnum={job.packagePerAnnum}
            rating={job.rating}
            title={job.title}
            key={job.id}
           
          />
        ))
      }
      
      
    </div>
  )
}

export default Jobs
