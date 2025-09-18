import { CDN_URL } from "../utils/constants";

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

export const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 max-w-sm max-h-max bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

//Higher Order Component

//input - RestaurantCard => promoted(if avg rating > 4.5)

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative z-0">
        {/* <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label> */}
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md z-10">
          Promoted
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
