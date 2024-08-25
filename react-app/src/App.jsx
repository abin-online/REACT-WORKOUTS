// import Header from "./Header"
// import Footer from "./footer"
// import Food from "./Food"
// import Card from "./Card"
// import Button from "./Button"
// import Student from "./Student"

{/* <Student name ="Abin Babu" age = {30} isStudent = {false}/>
<Student name ="Patrick" age = {42} isStudent = {true}/>
<Student name ="Fedrick" age = {23} isStudent = {true}/>
<Student name ="Rozario" age = {32} isStudent = {false}/>
<Student name ="Milan" age = {33} isStudent = {true}/>
<Student name = "Arjun"/> */}



// import UserGreeting from './UserGreeting.jsx'

// function App() {
//   return(
//     <>
//       <UserGreeting isLoggedIn = {false} username = "Abin"/>
//     </>
//   );
// }

// export default App



import List from './List.jsx'

function App() {

  const fruits = [{id : 1, name: "apple" , calories: 95},
                  {id : 2,name: "orange" , calories: 45},
                  {id : 3,name: 'banana' , calories : 45 },
                  {id : 4, name : 'pineapple', calories : 76},
                  {id : 5,name : 'coconut' ,  calories : 37}]

  const vegetables = [{id : 6, name: "potatoes" , calories: 110},
                      {id : 7,name: "celery" , calories: 15},
                      {id : 8,name: 'carrots' , calories :25 },
                      {id : 9, name : 'corn', calories : 63},
                      {id : 10,name : 'broccoli' ,  calories : 50}]
  return(

    <>
            <List items = {fruits} category = 'Fruits'/>
            <List items = {vegetables} category = 'Vegetables'/>
    </>
  
  );
}

export default App

