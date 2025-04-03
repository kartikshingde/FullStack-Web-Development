import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-1 text-left flex items-center max-sm:flex-col"
        >
          <div className="md:w-9/12 w-6/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-semibold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="lg:w-3/12 max-sm:w-9/12 p-4">
            <div className="absolute">
              <button className="sm:p-2 p-0 text-center sm:font-semibold text-5px sm:text-[15px]  rounded-[2px] sm:rounded-[3px] shadow-lg bg-white text-[#1BA672] sm:hover:bg-white sm:hover:cursor-pointer sm:hover:shadow-2xs sm:hover:text-green-600">
                ADD +
              </button>
            </div>
            <img
              className="rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
