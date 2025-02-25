import RestarauntCard from "../components/RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);


  //useEffect()
  useEffect(()=>{

    fetchData();

  },[]);
  
  const fetchData=async()=>{
    const data =await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" );
    
      const json=await data.json();

      console.log("Fetched")
      // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

      setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
  }


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        
        {listOfRestaurants.map((restaurant) => (
          <RestarauntCard key={restaurant.info.id} resData={restaurant} />
        ))}

      </div>
    </div>
  );
};

export default Body;
