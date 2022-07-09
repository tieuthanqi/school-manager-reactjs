import React from "react";
import { ErrorMessage, useField } from "formik";

export const Multiline12Field = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="col-md-12">
      <label htmlFor={field.name}>{label}</label>
      <textarea
        className={`form-control shadow-none  ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
