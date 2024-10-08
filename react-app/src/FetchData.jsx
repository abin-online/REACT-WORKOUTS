import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [searchItem, setSearchItem] = useState(users)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e)=> {
                e.preventDefault();
                const filteredItem = users.filter((data)=> {
                    return data.name.toUpperCase().includes(searchItem.toUpperCase())
                })
            setUsers(filteredItem)   
  }
  return (
    <div>
        <form>
        <input placeholder="Search items" value={searchItem} onChange={(e)=> setSearchItem(e.target.value)}  />
        <button onClick = { 
            handleSearch} > Search</button>
        </form>
      <ol >
        {users.map((user, index) => {
          return (<li key={index}>{user.name}</li>)
        })}
      </ol>
    </div>
  );
};

export default FetchData;
