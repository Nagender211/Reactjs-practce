import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import ShowDeatils from './ShowDeatils';

const DeatilsJob = () => {
  const { id } = useParams();
  const jwtToken = Cookies.get('jwt-token');
  const [deatails, setDetails] = useState({});
  const [similarJobs, setSimlilarJobs] = useState([]);

  useEffect(() => {
    const getDeatils = async () => {
      const url = `https://apis.ccbp.in/jobs/${id}`;
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      const updateDetails = {
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        lifeAtCompany: {
          description: data.job_details.life_at_company.description,
          imageUrl: data.job_details.life_at_company.image_url,
        },
        skills: data.job_details.skills.map(skill => ({
          imageUrl: skill.image_url,
          name: skill.name,
        })),
      };
      setDetails(updateDetails);

      const updatesimilarJobs = data.similar_jobs.map(similar => ({
        companyLogoUrl: similar.company_logo_url,
        employmentType: similar.employment_type,
        id: similar.id,
        jobDescription: similar.job_description,
        title: similar.title,
        location: similar.location,
        rating: similar.rating,
      }));
      setSimlilarJobs(updatesimilarJobs);
    };

    if (jwtToken) {
      getDeatils();
    }
  }, [id, jwtToken]);

  return (
    <div>
      <h1>Details of the Job</h1>
      <ShowDeatils details={deatails} similarJobs={similarJobs} />
    </div>
  );
};

export default DeatilsJob;
