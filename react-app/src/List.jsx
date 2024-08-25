
// function List(){
//     const fruits = [{id : 1, name: "apple" , calories: 95},
//                     {id : 2,name: "orange" , calories: 45},
//                     {id : 3,name: 'banana' , calories : 45 },
//                     {id : 4, name : 'pineapple', calories : 76},
//                     {id : 5,name : 'coconut' ,  calories : 37}]

//     fruits.sort((a,b)  =>  a.name.localeCompare(b.name))
    
//     const listItems = fruits.map(fruit  =><li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li> )
//     return (<ol>{listItems}</ol>)
// }

// export default List

import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    
    const itemList = props.items;

    //fruits.sort((a,b)  =>  a.name.localeCompare(b.name))
    
    const listItems = itemList.map(item  =><li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li> )
    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>)
}
List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(PropTypes.shape({id:PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
export default List



