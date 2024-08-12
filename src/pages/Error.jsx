import React from "react";
import ErrorBgImage from "../../public/404.jpg"

const Error = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <img src={ErrorBgImage} className="errorImg" alt="Error" />
    </div>
  );
};

export default Error;