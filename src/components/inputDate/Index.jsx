import React from "react";

const InputDate = ({ title,value,inputRef }) => {
  return (
    <div className="form-item-group">
      <p className="form-label">{title}</p>
      <input  ref={inputRef} type="date" className="form-control" value={value} />
    </div>
  );
};

export default InputDate;
