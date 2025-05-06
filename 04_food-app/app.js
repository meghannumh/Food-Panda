import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body 
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Image 
 *      - Name of the Res, Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Address
 *  - Contact
 */

// props: passing argument to a function

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.vectorstock.com/i/500p/11/31/little-panda-cartoon-cute-face-baby-vector-40201131.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const resList = [{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "63048",
                "name": "Sharief Bhai Biryani",
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/21/cdad749f-165b-4aaa-b6b9-1c6f966494b0_a8628830-65ec-43e0-8455-9f4a2ae41001.jpg",
                "locality": "Frazer Town",
                "areaName": "Frazer Town",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Biryani",
                    "South Indian",
                    "Kebabs",
                    "Ramzan Special",
                    "Sweets",
                    "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "469102",
                "avgRatingString": "4.3",
                "totalRatingsString": "47K+",
                "promoted": true,
                "adTrackingId": "cid=28619458~p=2~adgrpid=28619458#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=63048~plpr=COLLECTION~eid=29594d5d-c63c-40b9-bbf6-e662a3753547~srvts=1746467059264~collid=83639",
                "sla": {
                    "deliveryTime": 42,
                    "lastMileTravel": 5.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "5.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-05-05 23:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {},
                        "textBased": {},
                        "imageBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199",
                    "logoCtx": {
                        "text": "BENEFITS"
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {},
                    "commsStyling": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.0",
                        "ratingCount": "2.5K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "campaignId": "28619458"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=63048&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "3241",
                "name": "Meghana Foods",
                "cloudinaryImageId": "iivuhjc2mswi9lublktf",
                "locality": "Residency Road",
                "areaName": "Residency Road",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian",
                    "Chinese",
                    "Seafood"
                ],
                "avgRating": 4.7,
                "parentId": "635",
                "avgRatingString": "4.7",
                "totalRatingsString": "84K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-05-05 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {},
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                        "description": "Delivery!"
                                    }
                                }
                            ]
                        },
                        "textExtendedBadges": {}
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {},
                    "commsStyling": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "21K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=3241&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "583",
                "name": "Hotel Empire",
                "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
                "locality": "Jayanagar",
                "areaName": "Jayanagar",
                "costForTwo": "₹450 for two",
                "cuisines": [
                    "Kebabs",
                    "Biryani"
                ],
                "avgRating": 4.4,
                "parentId": "475",
                "avgRatingString": "4.4",
                "totalRatingsString": "71K+",
                "promoted": true,
                "adTrackingId": "cid=28774917~p=11~adgrpid=28774917#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=583~plpr=COLLECTION~eid=1e14a496-5430-4bf5-bf83-41424447d79d~srvts=1746467059264~collid=83639",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-05-06 02:45:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "15% OFF",
                    "subHeader": "ABOVE ₹3000",
                    "discountTag": "FLAT DEAL",
                    "logoCtx": {
                        "text": "BENEFITS"
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {},
                    "commsStyling": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "37K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "campaignId": "28774917"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=583&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "396750",
                "name": "The Biryani Life",
                "cloudinaryImageId": "wvjsuvqrd6ahqqyhmnrt",
                "locality": "Residency Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Biryani",
                    "Mughlai",
                    "Lucknowi",
                    "Hyderabadi",
                    "Kebabs",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 3.8,
                "parentId": "8496",
                "avgRatingString": "3.8",
                "totalRatingsString": "469",
                "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-05-05 23:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {},
                        "textBased": {},
                        "imageBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹159"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {},
                    "commsStyling": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=396750&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "18972",
                "name": "Nandhana Palace",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/9ea12882-e49f-49d2-92e9-0b2f7cdb79b3_18972.jpg",
                "locality": "Indiranagar",
                "areaName": "Indiranagar",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian",
                    "North Indian"
                ],
                "avgRating": 4.4,
                "parentId": "2120",
                "avgRatingString": "4.4",
                "totalRatingsString": "28K+",
                "promoted": true,
                "adTrackingId": "cid=28774977~p=14~adgrpid=28774977#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=18972~plpr=COLLECTION~eid=36d558e9-4d6e-4dc3-a2bd-c0feca095cf3~srvts=1746467059265~collid=83639",
                "sla": {
                    "deliveryTime": 38,
                    "lastMileTravel": 6.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "6.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-05-06 02:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {},
                        "textBased": {},
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹499",
                    "discountTag": "FLAT DEAL",
                    "logoCtx": {
                        "text": "BENEFITS"
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {},
                    "commsStyling": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.1",
                        "ratingCount": "8.3K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "campaignId": "28774977"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=18972&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "102334",
                "name": "Dindigul Thalappakatti",
                "cloudinaryImageId": "ogidjgqgh5w4otvuiipj",
                "locality": "Mg Road",
                "areaName": "Indiranagar",
                "costForTwo": "₹650 for two",
                "cuisines": [
                    "Biryani",
                    "Barbecue",
                    "South Indian",
                    "Chinese",
                    "North Indian"
                ],
                "avgRating": 4.4,
                "parentId": "332",
                "avgRatingString": "4.4",
                "totalRatingsString": "9.2K+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 3.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-05-05 23:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹179"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {},
                    "commsStyling": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=102334&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "576163",
                "name": "Stories of Kitchen",
                "cloudinaryImageId": "tfzipwjkvvo13dgfmqla",
                "locality": "Race Course Road",
                "areaName": "Malleshwaram",
                "costForTwo": "₹700 for two",
                "cuisines": [
                    "North Indian"
                ],
                "avgRating": 4.6,
                "parentId": "345332",
                "avgRatingString": "4.6",
                "totalRatingsString": "110",
                "promoted": true,
                "adTrackingId": "cid=28713855~p=17~adgrpid=28713855#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=576163~plpr=COLLECTION~eid=33d5f204-0ec8-42f1-b214-ef902edeabb3~srvts=1746467059265~collid=83639",
                "sla": {
                    "deliveryTime": 49,
                    "lastMileTravel": 3.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "3.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-05-05 23:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {},
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "imageId": "newg.png",
                                        "description": "Gourmet"
                                    }
                                }
                            ]
                        },
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹999",
                    "discountTag": "FLAT DEAL",
                    "logoCtx": {
                        "text": "BENEFITS"
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {},
                    "commsStyling": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "campaignId": "28713855"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=576163&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
}]

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.card.info.cloudinaryImageId}/>
            <h3>{resData.card.card.info.name}</h3>
            <h4>{resData.card.card.info.cuisines.join(',')}</h4>
            <h4>{resData.card.card.info.avgRating} stars</h4>
            <h4>{resData.card.card.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/> */}
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
                    )) //to uniquely identify each element key is used here else we would have it would have to rerender all the elements hence optimizing the performance.
                    // react says don't use index as key becuase order can change any time.
                }
                {/* what react does here is these props resName cuisine etc, react wraps it as an object and pass it to the functional component  */}
                {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" rating="3.8" time="24 mins"/> */}
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);

// config driven UI: UI depends upon the location where we are