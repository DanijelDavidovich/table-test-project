import "./preloader.css";
import PuffLoader from "react-spinners/PuffLoader";

const Preloader = (props) => {
  return (
    <div className="loading-spinner">
      <PuffLoader
        color={"#40c057"}
        loading={props.loading}
        cssOverride={{ margin: "0 auto" }}
        size={50}
      />
    </div>
  );
};

export default Preloader;
