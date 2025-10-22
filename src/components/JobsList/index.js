import {FaStar} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'

import './index.css'

const JobsList = props => {
  const {jobsListDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    rating,
    packagePerAnnum,
    jobDescription,
    location,
    title,
  } = jobsListDetails

  return (
    <li className="jobs-list-item">
      <div className="job-details-container">
        <div className="logo-title-rating-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div className="title-rating-container">
            <h1 className="title">{title}</h1>
            <div className="rating-container">
              <FaStar className="star-icon" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-employment-package-container">
          <div className="location-employment-container">
            <div className="location-container">
              <MdLocationOn className="location-icon" />
              <p className="location">{location}</p>
            </div>
            <div className="employment-type-container">
              <BsBriefcaseFill className="briefcasefill-icon" />
              <p className="employment-type">{employmentType}</p>
            </div>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <hr className="horizontal-line" />
        <h1 className="description-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </div>
    </li>
  )
}

export default JobsList
