import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info || {};

  return (
    <div className="m-2 p-2 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-sm shadow-gray-50 hover:shadow-black duration-700 flex flex-col">
      <img
        className="rounded-lg w-full h-[150px] object-cover"
        src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : "/fallback-image.jpg"}
        alt={name || "Restaurant Image"}
      />
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="font-bold py-2 text-lg truncate">{name || "Unknown Restaurant"}</h3>
        <h4 className="line-clamp-2">{cuisines?.join(", ") || "N/A"}</h4>
        <h4>{avgRating ?? "No Rating"}</h4>
        <h4>{costForTwo ?? "N/A"}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
