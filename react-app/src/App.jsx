// // import Header from "./Header"
// // import Footer from "./footer"
// // import Food from "./Food"
// // import Card from "./Card"
// // import Button from "./Button"
// // import Student from "./Student"

// //import { useState } from "react";

// {
//   /* <Student name ="Abin Babu" age = {30} isStudent = {false}/>
// <Student name ="Patrick" age = {42} isStudent = {true}/>
// <Student name ="Fedrick" age = {23} isStudent = {true}/>
// <Student name ="Rozario" age = {32} isStudent = {false}/>
// <Student name ="Milan" age = {33} isStudent = {true}/>
// <Student name = "Arjun"/> */
// }

// import { Container } from 'postcss'
// // import UserGreeting from './UserGreeting.jsx'

// // function App() {
// //   return(
// //     <>
// //       <UserGreeting isLoggedIn = {false} username = "Abin"/>
// //     </>
// //   );
// // }

// // export default App

// // import List from './List.jsx'

// // function App() {

// //   const fruits = [{id : 1, name: "apple" , calories: 95},
// //                   {id : 2,name: "orange" , calories: 45},
// //                   {id : 3,name: 'banana' , calories : 45 },
// //                   {id : 4, name : 'pineapple', calories : 76},
// //                   {id : 5,name : 'coconut' ,  calories : 37}]

// //   const vegetables = [{id : 6, name: "potatoes" , calories: 110},
// //                       {id : 7,name: "celery" , calories: 15},
// //                       {id : 8,name: 'carrots' , calories :25 },
// //                       {id : 9, name : 'corn', calories : 63},
// //                       {id : 10,name : 'broccoli' ,  calories : 50}]
// //   return(

// //     <>
// //             {fruits.length > 0 && <List category = 'Fruits'/> }
// //             {vegetables.length > 0 && <List items = {vegetables} category = 'Vegetables'/>}
// //     </>

// //   );
// // }

// // List.defaultProps = {
// //   category: "Category",
// //   items : []

// // }

// // import Button from './Button'
// // import ProfilePicture from './profilePicture'

// // function App(){
// //   return(<>
// //   <ProfilePicture/>
// //   </>)
// // }

// // export default App

// // import MyComponent from "./myComponents"

// // function App(){
// //     return(<MyComponent/>)
// // }

// // export default App

// // import Counter from "./Counter"

// // function  App() {
// //     return(<Counter/>)
// // }

// // export default App

// // import MyComponent from './myComponents'

// // function  App() {
// //     return(<MyComponent/>)
// // }

// // export default App

// // import ColorPicker from "./ColorPicker"

// // function  App() {
// //     return(<ColorPicker/>)
// // }

// // export default App

// // import DivShow from "./div";
// // import Header from "./HeaderName";

// // function App(){
// //     const data = "Abin"
// //     return(

// //                 <Header data={data}/>

// //         )
// // }

// // export default App

// // import { useState } from "react"

// // function App() {

// //     const [count , setCount] = useState(0)
// //     const addButton = ()=>{
// //         setCount(count+1)
// //     }
// //     const subButton = ()=>{
// //         setCount(count-1)
// //     }
// //     const resetButton = ()=>{
// //         setCount(0)
// //     }
// //     return(
// //           <div className="counter">
// //             <h1>{count}</h1>
// //             <button onClick={addButton}>INCREMENT</button>
// //             <button onClick={resetButton}>RESET</button>
// //             <button onClick={subButton}>DECREMENT</button>
// //             </div>

// //     )

// // }

// // export default App

// // import Counter from "./Counter"

// // function App() {
// //   const [count, setCount] = useState(0);
// //   const [message , setMessage] = useState('')
// //   return (
// //     <div>
// //       <h1>{count}</h1>
// //       <button onClick={() => setCount(count + 1)}>INCREMENT</button>
// //       <button onClick={() => setCount(count - 1)}>DECREMENT</button>
// //     </div>
// //   );
// // }

// // export default App;

// // function App() {
// //   const [username , setUsername] = useState('')
// //   const [submit , setSubmit ] = useState(false)
// //   const handleSubmit = (e)=> {
// //     e.preventDefault()
// //     if(username.length < 6){
// //       setSubmit(true)
// //     }
// //   }
// //   return (
// //     <div style={{textAlign: 'center' , marginTop: '400px' , display: 'flex'}}>
// //       <form oncLick={handleSubmit}>
// //         <div>
// //           <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
// //           { username.length < 6 && <p style={{color: 'red'}}>username should have atleast 6 letters</p>}
// //           {submit && <p style={{color: 'green'}}>submitted</p>}
// //           <button style={{width:'60px' , height: '30px'}} disabled={username.length < 6}>submit</button>
// //         </div>
// //       </form>
// //     </div>
// //   )
// // }

// // export default App

// // import Dashboard from "./Toggle";
// //  import ParentComponent from "./ParentComponent";

// // function App () {

// //     return(
// //       <>
// //          <ParentComponent/>
            
// //       </>

// //     )
// // }

// // export default App



// // import React, { useCallback, useState } from 'react'
// // import IncrementButton from './IncrementButton'

// // const App = () => {
// //   const [count , setCount] = useState(0)
// //   const increment = useCallback(()=>{
// //     setCount((prevCount)=> prevCount+1)
// //   },[])
// //   return (
// //     <div>
// //       <h3>{count}</h3>
// //       <IncrementButton increment={increment}/>
// //     </div>
// //   )
// // }

// // export default App

// // import React, { useMemo, useState } from 'react'

// // const App = () => {
// //   const [array, setArray] = useState([1,2,3,4,5,6])
// //   const memoized = useMemo(()=> {
// //     return array.reduce((acc,curr)=> acc+curr)
// //   },[array])
// //   return (
// //     <div>
// //         <h2>{memoized}</h2>
// //         <button onClick={()=> setArray([2,4,5,3,8])}>Change Array</button>
// //     </div>
// //   )
// // }

// // export default App



// // App.js

// // import React from 'react'
// // import { ParentProvider } from './ParentProvider'

// // const App = () => {
// //   return (
// //     <div>
// //         <ParentProvider />
// //     </div>
// //   )
// // }

// // export default App

// // import React from 'react'
// // import Parent from './Parent'

// // const App = () => {
// //   return (
// //     <div>
// //       <Parent/>
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react'
// import RedCounter from './RedCounter'

// const App = () => {
//   return (
//     <div>
//       <RedCounter />
//     </div>
//   )
// }

// export default App





import React from 'react'
import ReduceCounter from './ReduceCounter'

const App = () => {
  return (
    <div>
      <ReduceCounter/>
    </div>
  )
}

export default App
