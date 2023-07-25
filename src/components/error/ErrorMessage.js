import "./errorMessage.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const ErrorMessage = (props) => {
  return (
    <div
      className="error-container"
      style={{ visibility: `${props.errorState ? "" : "hidden"}` }}
    >
      <BsFillExclamationTriangleFill className="error-icon" />

      <p className="error-message">Network Error</p>

      <p className="error-text">
        An error occurred while fetching data from the given URL.
      </p>
    </div>
  );
};

export default ErrorMessage;
