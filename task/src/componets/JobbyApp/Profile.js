import React from 'react'

const Profile = ({name,profileImageUrl,shortBio})=>{
  return(
    <div>
      <h1>Profile</h1>
      <p>This is my profile page.</p>
      
      <img src={profileImageUrl} alt="Profile Pic" />
      <h2>Name: {name}</h2>
      <p>Short Bio: {shortBio}</p>
    </div>
  )
}
export default Profile
