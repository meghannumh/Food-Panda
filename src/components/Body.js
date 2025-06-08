import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // state variables - super powerful variables

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState('')

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.452716108997187&lng=77.08378527313471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json(); 

        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            //Optional chaining allows you to safely access deeply nested properties of an object without having to check each level manually.
            // If any part of the chain is null or undefined, the entire expression short-circuits and returns undefined instead of throwing an error.
    }

    console.log("Body Rendered");

    //conditional rending
    if(listOfRestaurant.length === 0){
        return <Shimmer/>
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searchBox" value={searchText} /> 
                    <button onClick={() => {
                        //Filter the restaurant cards and update the UI
                        console.log(searchText);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    //Filter logic here
                    const filteredList = listOfRestaurant.filter((res) => 
                         res.info.avgRating>4
                    );
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/> */}
                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) //to uniquely identify each element key is used here else we would have it would have to rerender all the elements hence optimizing the performance.
                    // react says don't use index as key becuase order can change any time.
                } 
                {/* what react does here is these props resName cuisine etc, react wraps it as an object and pass it to the functional component  */}
                {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" rating="3.8" time="24 mins"/> */}
            </div>
        </div>
    );
};

export default Body;