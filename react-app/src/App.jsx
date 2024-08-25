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



import userGreeting from './userGreeting'

function App() {
  return(
    // <Button/>
    <>
      <userGreeting isLoggedIn = {true} username = "Abin"/>
    </>
  );
}

export default App
