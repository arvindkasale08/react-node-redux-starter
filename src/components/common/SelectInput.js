/**
 * Created by arvindkasale on 4/17/17.
 */
import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, errors, options}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">

          <option value="">{defaultOption}</option>
          {
            options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
              })
          }
        </select>
        {errors && <div className="alert alert-danger">{errors}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
