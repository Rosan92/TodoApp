import React from "react";

const CustomDatePicker = ({ data, handleChange }) => (
  <input
    type="date"
    value={data}
    onChange={(event) => handleChange(event.target.value)}
  />
);

export default CustomDatePicker;
