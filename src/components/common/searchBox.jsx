import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      onChange={e => onChange(e.currentTarget.value)}
      value={value}
      name="query"
      placeholder="Search..."
      className="form-control my-3"
    />
  );
};

export default SearchBox;
