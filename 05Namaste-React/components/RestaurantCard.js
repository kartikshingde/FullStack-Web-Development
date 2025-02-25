import { CDN_URL } from "../utils/constants";

const RestarauntCard = (props) => {

    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;
    // Optional Chaining here not used because cloudinary link is different for restaurantes
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        
        <img
          className="res-logo"
          src={CDN_URL+ cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestarauntCard;