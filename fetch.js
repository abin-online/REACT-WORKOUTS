
const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    let fetchedArray = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    let dataArray = []
    for (let i = 0; i < fetchedArray.length; i++) {
        dataArray.push(fetchedArray[i].info)
    }

    console.log(dataArray)

};

fetchData()