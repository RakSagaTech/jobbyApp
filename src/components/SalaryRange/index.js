import './index.css'

const SalaryRange = props => {
  const {salaryRangeDetails, updateSalarayRangeId} = props
  const {label, salaryRangeId} = salaryRangeDetails

  const onChangeSalaryRange = () => {
    updateSalarayRangeId(salaryRangeId)
  }

  return (
    <li className="salary-item">
      <input
        type="radio"
        id={salaryRangeId}
        className="salary-radio"
        name="salary"
        onChange={onChangeSalaryRange}
      />
      <label htmlFor={salaryRangeId} className="salary-label">
        {label}
      </label>
    </li>
  )
}

export default SalaryRange
