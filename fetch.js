const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=9.91850&lng=76.25580");
    const json = await data.json();

    console.log(json);
}

fetchData()