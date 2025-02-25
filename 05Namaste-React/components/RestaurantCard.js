import { CDN_URL } from "../utils/constants";

const RestarauntCard = (props) => {

    const {resData}=props;
    // const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.data;
    // Optional Chaining here not used because cloudinary link is different for restaurantes
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        
        <img
          className="res-logo"
          src={CDN_URL+ resData.card.card.info.cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{resData.card.card.info.name}</h3>
        <h4>{resData.card.card.info.cuisines.join(" ,")}</h4>
        <h4>{resData.card.card.info.avgRating}</h4>
        <h4>{resData.card.card.info.costForTwo}</h4>
      </div>
    );
  };

  export default RestarauntCard;