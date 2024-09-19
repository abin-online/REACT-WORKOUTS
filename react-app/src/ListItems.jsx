import React, { useEffect, useState } from 'react'

const ListItems = ({getItems}) => {

    const [items , setItems] = useState([])

    useEffect(() => {
        setItems(getItems());

    }, [getItems])
  return (
    <div>
        {
            items.map((item, index)=> {
                return <p key={index}>{item}</p>
            })
        }
    </div>
  )
}

export default ListItems
