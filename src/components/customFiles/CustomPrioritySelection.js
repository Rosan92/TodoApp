import React from "react";

const CustomPrioritySelection = ({ data, options, handleChange }) => {
  return (
    <select value={data} onChange={(event) => handleChange(event.target.value)}>
      {options.enumOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomPrioritySelection;
