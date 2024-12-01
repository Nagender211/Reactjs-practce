import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const ShowDeatils = ({ details, similarJobs }) => {
  return (
    <div className="details-container">
      <h1 className="job-details-heading">Job Details</h1>
      <div className="job-details">
        <div className="job-header">
          <img className="company-logo" src={details.companyLogoUrl} alt="Company Logo" />
          <a
            className="company-website-link"
            href={details.companyWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Company Website
          </a>
        </div>
        <p className="job-description">
          <strong>Description:</strong> {details.jobDescription}
        </p>
        <p><strong>Employment Type:</strong> {details.employmentType}</p>
        <div className="life-at-company">
          <p><strong>Life at Company:</strong> {details.lifeAtCompany?.description}</p>
          <img
            className="life-image"
            src={details.lifeAtCompany?.imageUrl}
            alt="Life at Company"
          />
        </div>
        <h2 className="skills-heading">Skills Required</h2>
        <ul className="skills-list">
          {details.skills?.map((skill, index) => (
            <li className="skill-item" key={index}>
              <img className="skill-icon" src={skill.imageUrl} alt={skill.name} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="similar-jobs-heading">Similar Jobs</h2>
      <ul className="similar-jobs-list">
        {similarJobs.map(job => (
          <li className="similar-job-item" key={job.id}>
            <div className="similar-job-header">
              <h3>{job.title}</h3>
              <img className="company-logo" src={job.companyLogoUrl} alt="Company Logo" />
            </div>
            <p><strong>Description:</strong> {job.jobDescription}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Rating:</strong> {job.rating}</p>
            <p><strong>Employment Type:</strong> {job.employmentType}</p>
            <div className="job-actions">
              <a
                className="visit-website-button"
                href={job.companyWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <Link to={`/jobs/${job.id}`} className="know-more-button">
                Know More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowDeatils;
