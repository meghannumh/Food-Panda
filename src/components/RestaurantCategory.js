import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  console.log("categories data", data);
  console.log(data.title);

  const handleClick = () => {
    console.log("clicked");
    // setShowItems(!showItems);
    showItems == true ? setShowIndex(null) : setShowIndex(index);
  };

  // const [showItems, setShowItems] = useState(false);

  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆" : "⬇"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
