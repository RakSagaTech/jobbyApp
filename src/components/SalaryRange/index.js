import './index.css'

const SalaryRange = props => {
  const {salaryRangeDetails} = props
  const {label, salaryRangeId} = salaryRangeDetails
  return (
    <li className="salary-item">
      <input type="radio" id={salaryRangeId} className="salary-radio" />
      <label htmlFor={salaryRangeId} className="salary-label">
        {label}
      </label>
    </li>
  )
}

export default SalaryRange
