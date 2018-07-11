import React from "react";

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return <p key={i}> *{formErrors[fieldName]}</p>;
      } else {
        return '';
      }//ESLint was throwing a warning without a secondary return statement
    })}
  </div>
);

export default FormErrors;
