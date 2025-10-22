import './index.css'

const EmploymentType = props => {
  const {employmentTypeDetails, updateEmploymentType} = props
  const {label, employmentTypeId} = employmentTypeDetails

  const onChangeEmploymentType = () => {
    updateEmploymentType(employmentTypeId)
  }

  return (
    <li className="employment-item">
      <input
        type="checkbox"
        id={employmentTypeId}
        className="employment-checkbox"
        onChange={onChangeEmploymentType}
      />
      <label htmlFor={employmentTypeId} className="employment-label">
        {label}
      </label>
    </li>
  )
}

export default EmploymentType
