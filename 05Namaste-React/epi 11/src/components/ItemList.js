import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center"
        >
          {/* Left section: text */}
          <div className="w-full sm:w-8/12">
            <div className="pb-2">
              <span className="font-semibold text-base">
                {item.card.info.name}
              </span>
              <span className="font-semibold ml-2 text-base text-gray-700">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>

          {/* Right section: image and button */}
          <div className="w-full sm:w-4/12 mt-4 sm:mt-0 relative">
            <img
              className="w-full sm:w-40 h-auto object-cover rounded-md"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button className="absolute bottom-2 left-2 bg-white text-green-600 text-sm font-semibold px-3 py-1 rounded shadow-md hover:bg-green-50">
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
