import React from "react";

const SurveyField = ({
  input,
  label,
  placeholder,
  meta: { error, isInvalid, touched }
}) => {
  return (
    <div className="mb-3">
      <label>{label}</label>
      <input {...input} className="form-control" placeholder={placeholder} />
      <span className="text-danger small">{touched && error}</span>
    </div>
  );
};

export default SurveyField;
