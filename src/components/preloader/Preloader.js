import "./preloader.css";
import PuffLoader from "react-spinners/PuffLoader";

const Preloader = (props) => {
  return (
    <div className="loading-spinner">
      <PuffLoader
        color={"#74c0fc"}
        loading={props.loading}
        cssOverride={{ margin: "0 auto" }}
        size={50}
      />
    </div>
  );
};

export default Preloader;
