import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <h1>Loading...</h1>;

  if (resInfo === null) return <Shimmer />;
  // not used in ternary operator because, we have use here before destructuring as we set resInfo = null Initially
  // so it cannot destructure name,... of null

  console.log(resInfo);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //No need to add OR condition above ...

  return (
    <div className="menu flex flex-col items-center">
      <div className="infoMenu p-4 m-2 border-2 rounded-xl hover:cursor-pointer flex-col flex items-center hover:shadow-2xl shadow-orange-400 transition-all duration-700 ">
        <h1 className="resName text-6xl text-orange-400 font-medium">{name}</h1>
        <h4 className="text-2xl">{cuisines.join(" ,")}</h4>
        <h4 className="text-xl">{costForTwoMessage}</h4>
        <h2 className="text-3xl font-medium text-pink-500 border border-green-300 mt-2 mb-2 px-4">
          Menu
        </h2>
        <ul>
          {itemCards.map((item) => (
            <li className="text-lg " key={item.card.info.id}>
              {<span className="text-purple-300">{"-> "}</span>}
              {item.card.info.name}{" "}
              {(
                <span className="underline">
                  {`- Rs.  ` + item.card.info.price / 100}
                </span>
              ) || `- Rs.  ` + item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
