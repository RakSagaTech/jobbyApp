import './index.css'

const EmploymentType = props => {
  const {employmentTypeDetails} = props
  const {label, employmentTypeId} = employmentTypeDetails
  return (
    <li className="employment-item">
      <input
        type="checkbox"
        id={employmentTypeId}
        className="employment-checkbox"
      />
      <label htmlFor={employmentTypeId} className="employment-label">
        {label}
      </label>
    </li>
  )
}

export default EmploymentType
