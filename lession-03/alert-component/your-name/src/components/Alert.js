import React from "react";
import Proptype from "prop-types";

const Alert = ({ text }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {text}
    </div>
  );
};

Alert.Proptype = {
  text: Proptype.string.isRequired,
};

export default Alert;
