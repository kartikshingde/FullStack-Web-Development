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

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
    //No need to add OR condition above ...

  return (
    <div className="menu">
      <div className="infoMenu">
        <h1 className="resName">{name}</h1>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{costForTwoMessage}</h4>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name}{" "}
              {<span>{`- Rs.  ` + item.card.info.price / 100}</span> ||
                `- Rs.  ` + item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
