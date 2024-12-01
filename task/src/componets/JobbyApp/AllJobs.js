import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const AllJobs = ({
  companyLogoUrl,
  employmentType,
  jobDescription,
  location,
  packagePerAnnum,
  rating,
  title,
  id
//   getId
}) => {
    const knowDetails = (id) =>{
        console.log(id);
    }
  return (
    <div className="job-card">
      <img className="job-card-logo" src={companyLogoUrl} alt="Company Logo" />
      <h2 className="job-card-title">{title}</h2>
      
      <h4 className="job-card-type">Employment Type: {employmentType}</h4>
      <p className="job-card-description">
        <strong>Description:</strong> {jobDescription}
      </p>
      <p className="job-card-location">Location: {location}</p>
      <p className="job-card-package">Package: {packagePerAnnum}</p>
      <p className="job-card-rating">Rating: {rating}</p>
      <h4>{id}</h4>
      <Link to={`/jobs/${id}`}>
      <button onClick={()=> knowDetails(id)}>Know More</button>
      </Link>
    </div>
  );
};

export default AllJobs;
