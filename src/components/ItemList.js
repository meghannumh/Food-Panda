const ItemList = ({ items }) => {
  console.log("data items:", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p2 m-2 border-b-2 border-gray-200 text-left flex justify-between pb-7 pt-5"
        >
          <div className="w-9/12">
            <div className="items-center">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-2/12 p-4 justify-center flex items-center">
            <div className="">
              <button className="px-3 py-1 bg-white border-none rounded shadow-sm hover:bg-gray-100 cursor-pointer">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
