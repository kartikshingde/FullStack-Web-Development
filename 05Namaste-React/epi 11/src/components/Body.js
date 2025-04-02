import RestarauntCard, { withDeliverytimeLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable ->Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestaurantDelivery = withDeliverytimeLabel(RestarauntCard);

  //WhenEver state variable update, react trigger Reconcilation cycle(i.e. re-renders component)***
  // console.log("Body Rendered");

  console.log(listOfRestaurants);

  //useEffect()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log("Fetched");
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    //optional Chaining
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering -> rendering on the basis of condition
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Looks like you're offline! Please check your internet connection
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-wrap">
        <div className="search m-2 p-4">
          <input
            type="text"
            className="border border-solid border-black px-2 rounded-md"
            placeholder="search restaurant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl hover:cursor-pointer"
            onClick={() => {
              //filter the res Cards and update the UI
              //need searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center gap-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setfilteredRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:cursor-pointer"
            onClick={() => {
              setfilteredRestaurant(listOfRestaurants);
            }}
          >
            View All Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* * If the restaurant have discount , add it to card... */}

            {restaurant.info.sla.deliveryTime ? (
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
