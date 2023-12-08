import React from 'react';

const MySelect = ({options, defaultVal}) => {
  return (
      <select
      >
        <option disabled>{defaultVal}</option>

        {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
        ))}
      </select>
  );
};

export default MySelect;