import React from "react";
import ReactDOM from "react-dom/client"


import './index.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}



const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRating, sla } = props.data;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                alt={name}
            />
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(", ")}</h4> 
            <h4>Rating: {avgRating}</h4>
            <h4>Delivery Time: {sla.deliveryTime} mins</h4> {/* Access deliveryTime inside sla */}
        </div>
    );
}

const resList = [
    {
        "id": "57445",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b81f167b-ccfc-4cc5-98af-571c34e401e6_57445.JPG",
        "locality": "Panampilly Nagar",
        "areaName": "Elamkulam",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "2",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "promoted": true,
        "adTrackingId": "cid=17870870~p=0~adgrpid=17870870#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=57445~eid=379288e6-3eac-4d32-aa7a-26024669ea76~srvts=1725167003257~collid=45995",
        "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 7.9,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "7.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-02 01:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {

                },
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                "description": "Delivery!"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "447055",
        "name": "Sree Muruga Cafe",
        "cloudinaryImageId": "vdm0mf0nwe3st0zhz9ap",
        "locality": "Poonithura",
        "areaName": "Marad",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "South Indian",
            "Biryani",
            "Indian"
        ],
        "avgRating": 4.6,
        "parentId": "193175",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 10.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "10.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 22:45:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textExtendedBadges": {

                },
                "textBased": {

                }
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "747573",
        "name": "Wow! China",
        "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
        "locality": "Kazhutumuttu",
        "areaName": "Thoppumpady",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Tibetan",
            "Chinese",
            "Asian",
            "Snacks",
            "Continental",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "226836",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-02 01:00:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "568239",
        "name": "Dindigul Thalappakatti",
        "cloudinaryImageId": "o90ntbdynv1tbkojsjl3",
        "locality": "Panampilly Nagar",
        "areaName": "Panampilly Nagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Barbecue",
            "South Indian",
            "Chinese",
            "North Indian"
        ],
        "avgRating": 4.6,
        "parentId": "332",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=17843483~p=1~adgrpid=17843483#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=568239~eid=8a1b624b-3667-48e2-954a-3a1a23e4e10d~srvts=1725167003257~collid=45995",
        "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 8.3,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "8.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 23:59:00",
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
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Biryani.png"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.2",
                "ratingCount": "1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "421108",
        "name": "Sukrutham Catering & Restaurant",
        "cloudinaryImageId": "ij5cjia84ibh5ll8pwa6",
        "locality": "Amalabhavan Road",
        "areaName": "Thevara",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Snacks",
            "Sweets",
            "Kerala"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "234325",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 8.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "8.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 23:30:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textExtendedBadges": {

                },
                "textBased": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "78317",
        "name": "Hotel Aryaas Park",
        "cloudinaryImageId": "eo5cam4g7jl9efr5vjpn",
        "locality": "Mig Housing Society",
        "areaName": "Panampilly Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "South Indian"
        ],
        "avgRating": 4.6,
        "parentId": "20778",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 7.9,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "7.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 22:25:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {

                },
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "115412",
        "name": "Hotel lakshmi Nivas",
        "cloudinaryImageId": "a534131b1b22ec1f24d4122ffb6a2ac3",
        "locality": "Raja Park",
        "areaName": "Tripunithura",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "South Indian",
            "North Indian",
            "Chinese"
        ],
        "avgRating": 4.7,
        "parentId": "99900",
        "avgRatingString": "4.7",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 11.4,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "11.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 21:40:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.3",
                "ratingCount": "1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "654504",
        "name": "Sai E Saravanas",
        "cloudinaryImageId": "c99a8184b9522bffdf43b4978a7a1878",
        "locality": "Willingdon Island",
        "areaName": "Thopumpady",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "South Indian",
            "Indian",
            "Chinese",
            "Salads",
            "Snacks"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "393782",
        "avgRatingString": "4.6",
        "totalRatingsString": "500+",
        "promoted": true,
        "adTrackingId": "cid=17775605~p=2~adgrpid=17775605#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=654504~eid=f5a258f4-11a5-4e00-9f7b-7bf2a1a68eb4~srvts=1725167003257~collid=45995",
        "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 22:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "name": " Tiffin Company/Kumbakonam Degree Coffee",
        "cloudinaryImageId": "3ab20ced65255afc431e4e0f25a3700f",
        "locality": "Pallimukku",
        "areaName": "Panampilly Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "South Indian",
            "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "473571",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 8,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "8.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 12:00:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "810722",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/1ec2bd1e-7f19-40af-944a-c80832ae769f_810722.JPG",
        "locality": "Mukkadan Strip Mall",
        "areaName": "Willington Island",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
        ],
        "avgRating": 4.6,
        "parentId": "195515",
        "avgRatingString": "4.6",
        "totalRatingsString": "50+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 23:59:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "59491",
        "name": "Pai Brothers 36 Varieties of Dosa",
        "cloudinaryImageId": "a2tbcok68zq7qimkh6uu",
        "locality": "Elamkulam",
        "areaName": "Kadavanthra",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "South Indian"
        ],
        "avgRating": 4.6,
        "parentId": "5443",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 9.8,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "9.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 23:59:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "description": "",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                },
                "textBased": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹549",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "593666",
        "name": "Canteen By Tandoor",
        "cloudinaryImageId": "vqmjbf0jvcce7xbk43lw",
        "locality": "Layam Road",
        "areaName": "Panampilly Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "South Indian",
            "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "472311",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "promoted": true,
        "adTrackingId": "cid=17855923~p=7~adgrpid=17855923#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=593666~eid=2c149887-7632-4a70-8ef1-ca32a9046a3d~srvts=1725167003257~collid=45995",
        "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 9.1,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "9.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 23:10:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    "description": "OnlyOnSwiggy"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "306314",
        "name": "Akshaya Catering And Restaurant",
        "cloudinaryImageId": "vccrvsxkcm1fygtnxx0s",
        "locality": "Vaikom Road",
        "areaName": "Tripunithura",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "South Indian",
            "Chinese"
        ],
        "avgRating": 4.7,
        "parentId": "20264",
        "avgRatingString": "4.7",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 47,
            "lastMileTravel": 12.7,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "12.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 22:00:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {

                },
                "textBased": {

                },
                "imageBased": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "305096",
        "name": "Ambiswamy Restaurant",
        "cloudinaryImageId": "teyaeczoeafguytsr7io",
        "locality": "Panampilly Nagar",
        "areaName": "Panampilly Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Kerala",
            "South Indian",
            "Beverages"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "31343",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 9.2,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "9.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-01 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {

                }
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => 
                    <RestaurantCard key ={restaurant.id} data={restaurant}/>)
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)