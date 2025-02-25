import RestarauntCard from "../components/RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  //   Normal JS Variable
  let listOfRestaurantsJS = [
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "934678",
            name: "Charcoal Eats - Biryani & Beyond",
            cloudinaryImageId:
              "FOOD_CATALOG/IMAGES/CMS/2024/9/29/50292730-b59a-4519-8a48-057dc89f93e4_c6b0cf1b-ee74-4376-855b-76531d564602.jpg",
            locality: "Kothrud",
            areaName: "Kothrud",
            costForTwo: "₹500 for two",
            cuisines: ["Biryani", "Kebabs", "North Indian", "Desserts"],
            avgRating: 3.8,
          },
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "934678",
            name: "Dominos",
            cloudinaryImageId:
              "FOOD_CATALOG/IMAGES/CMS/2024/9/29/50292730-b59a-4519-8a48-057dc89f93e4_c6b0cf1b-ee74-4376-855b-76531d564602.jpg",
            locality: "Kothrud",
            areaName: "Kothrud",
            costForTwo: "₹500 for two",
            cuisines: ["Pizza", "Burger", "North Indian", "Desserts"],
            avgRating: 4.5,
          },
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "934678",
            name: "Mac D",
            cloudinaryImageId:
              "FOOD_CATALOG/IMAGES/CMS/2024/9/29/50292730-b59a-4519-8a48-057dc89f93e4_c6b0cf1b-ee74-4376-855b-76531d564602.jpg",
            locality: "Kothrud",
            areaName: "Kothrud",
            costForTwo: "₹500 for two",
            cuisines: ["Pizza", "Burger", "North Indian", "Desserts"],
            avgRating: 4.1,
          },
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.3
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestarauntCard resData={restaurant} />
        ))}

        {/* <RestarauntCard resName="KFC" cuisine="Burger,Fastfood" /> */}
      </div>
    </div>
  );
};

export default Body;
