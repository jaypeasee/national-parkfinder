import './StateDropdown.scss'

type StateDropdownProps = { setStateSelect: (stateSelection: string) => void }

const StateDropdown: React.FC<StateDropdownProps> = props => {
  const { setStateSelect } = props as StateDropdownProps
  
  const handleChange = (event: any) => {
    setStateSelect(event.target.value)
  }

  return (
    <form 
      className='dropdown-form'
      data-testid='dropdown-form'>
      <fieldset>
        <select
          id="state"
          name="state"
          onChange={handleChange}
          data-testid="select-form">
          <option value="---">Select a state</option>
          <option value="AL" disabled>Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT" disabled>Connecticut</option>
          <option value="DE" disabled>Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA" disabled>Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL" disabled>Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA" disabled>Iowa</option>
          <option value="KS" disabled>Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA" disabled>Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD" disabled>Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS" disabled>Mississippi</option>
          <option value="MO" disabled>Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE" disabled>Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH" disabled>New Hampshire</option>
          <option value="NJ" disabled>New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY" disabled>New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK" disabled>Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA" disabled>Pennsylvania</option>
          <option value="RI" disabled>Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT" disabled>Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI" disabled>Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </fieldset>
    </form>
  )
}

export default StateDropdown