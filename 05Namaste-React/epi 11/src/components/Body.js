import RestarauntCard, { withDeliverytimeLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router"; 
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantDelivery = withDeliverytimeLabel(RestarauntCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants && Array.isArray(restaurants)) {
      setlistOfRestaurants(restaurants);
      setfilteredRestaurant(restaurants);
    } else {
      console.error("Restaurants not found in API response");
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-24 text-xl font-semibold">
        Looks like you're offline! Please check your internet connection
      </h1>
    );

  const { loggedUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-4 sm:px-6 md:px-8">
      <div className="filter flex flex-col md:flex-row md:flex-wrap justify-between items-start gap-4 my-4">
        <div className="search w-full md:w-auto">
          <input
            type="text"
            className="w-full md:w-64 border border-solid border-black px-3 py-2 rounded-md mb-2"
            placeholder="Search restaurant"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="w-full md:w-auto px-4 py-2 bg-green-100 rounded-xl hover:bg-green-200"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="search flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => setfilteredRestaurant(listOfRestaurants)}
          >
            View All Restaurants
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <label className="text-base sm:text-lg font-medium">User Name:</label>
            <input
              className="border border-black rounded-sm px-2 py-1 w-full sm:w-auto"
              maxLength={20}
              value={loggedUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
          >
            {restaurant.info.isOpen ? (
              <RestaurantDelivery resData={restaurant} />
            ) : (
              <RestarauntCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
