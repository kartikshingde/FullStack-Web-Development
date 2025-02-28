import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

  const [resInfo, setResinfo] = useState(null);

  const {resId}=useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
     MENU_API + resId +"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setResinfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  // not used in ternary operator because, we have use here before destructuring as we set resInfo = null Initially
  // so it cannot destructure name,... of null

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <div className="infoMenu">
        <h1 className="resName">{name}</h1>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{costForTwoMessage}</h4>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}> {item.card.info.name} {<span>{`- Rs.  `+item.card.info.price/100}</span> || `- Rs.  `+item.card.info.defaultPrice/100}</li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default RestaurantMenu;
