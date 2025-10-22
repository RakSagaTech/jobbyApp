import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Profile from '../Profile'
import EmploymentType from '../EmploymentType'
import SalaryRange from '../SalaryRange'
import JobsList from '../JobsList'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    jobsList: [],
  }

  componentDidMount() {
    this.fetchJobsListDetails()
  }

  fetchJobsListDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const dbData = await response.json()
      const formattedJobsListData = dbData.jobs.map(eachJobsList => ({
        companyLogoUrl: eachJobsList.company_logo_url,
        employmentType: eachJobsList.employment_type,
        id: eachJobsList.id,
        jobDescription: eachJobsList.job_description,
        location: eachJobsList.location,
        packagePerAnnum: eachJobsList.package_per_annum,
        rating: eachJobsList.rating,
        title: eachJobsList.title,
      }))
      this.setState({
        jobsList: formattedJobsListData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => (
    <div className="jobslist-failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobslist-failure-img"
      />
      <h1 className="jobslist-failure-heading">Oops! Something Went Wrong</h1>
      <p className="jobslist-failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" className="jobslist-retry-btn">
        {' '}
        Retry{' '}
      </button>
    </div>
  )

  renderNoJobsView = () => (
    <div className="nojobs-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="nojobs-img"
      />
      <h1 className="nojobs-heading"> No Jobs Found</h1>
      <p className="nojobs-description">
        We could not find any jobs. Try other filters.
      </p>
    </div>
  )

  renderJobsListView = () => {
    const {jobsList, apiStatus} = this.state
    if (jobsList.length === 0) {
      return this.renderNoJobsView()
    }
    return (
      <ul className="jobslist-container">
        {jobsList.map(eachJob => (
          <JobsList
            key={eachJob.id}
            jobsListDetails={eachJob}
            apiStatus={apiStatus}
          />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <>
      <div className="jobslist-loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </>
  )

  renderJobsListFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderJobsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderSalaryRangeView = () => (
    <div className="salary-range-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-list">
        {salaryRangesList.map(eachSalaryRange => (
          <SalaryRange
            key={eachSalaryRange.salaryRangeId}
            salaryRangeDetails={eachSalaryRange}
          />
        ))}
      </ul>
    </div>
  )

  renderTypeOfEmploymentView = () => (
    <div className="employment-container">
      <h1 className="employment-heading">Type of Employment</h1>
      <ul className="employment-list">
        {employmentTypesList.map(eachEmployment => (
          <EmploymentType
            key={eachEmployment.employmentTypeId}
            employmentTypeDetails={eachEmployment}
          />
        ))}
      </ul>
    </div>
  )

  render() {
    return (
      <>
        <Header />
        <div className="jobs-container">
          <div className="profile-options-container">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <button type="button" className="search-icon">
                <BsSearch size={17} />
              </button>
            </div>
            <Profile />
            <hr className="hr-line" />
            {this.renderTypeOfEmploymentView()}
            <hr className="hr-line" />
            {this.renderSalaryRangeView()}
          </div>
          <div className="jobs-list-container">
            <div className="jobslist-search-input-container">
              <input
                type="text"
                placeholder="Search"
                className="joblist-search-input"
              />
              <button type="button" className="joblist-search-icon">
                <BsSearch size={17} />
              </button>
            </div>
            {this.renderJobsListFinalView()}
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
