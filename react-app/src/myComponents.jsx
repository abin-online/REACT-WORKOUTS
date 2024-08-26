// import React,{useState} from "react"

// function MyComponent(){
//     let [name, setName] = useState('Guest');

//     const [age, setAge] = useState(0)

//     const [isEmployed, setIsEmployed] = useState(false)
//     const updateName = () => {
//     //   name = 'Abin';
//     //   console.log(name);
//         setName('Abin')
//     }

//     const incrementAge = () => {
//         setAge(age+1)
//     }

//     const toggleEmployedStatus = () => {
//         setIsEmployed(!isEmployed)
//     }

//     return(
//       <div>
//         <p>Namee: {name}</p>
//         <button onClick={updateName}>Set Name</button>

//         <p>Age: {age}</p>
//         <button onClick={incrementAge}>Increment age</button>
        
//         <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
//         <button onClick={toggleEmployedStatus}>Toggle Status</button>
//       </div>
//     )
// }

// export default MyComponent


import React, {useState} from 'react'

function MyComponent(){
  const [name, setName]         = useState("Guest")
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment]   = useState("")
  const [payment, setPayment]   = useState("visa")
  const [shipping, setShipping] = useState('')

  function handleChangeName(event){
      setName(event.target.value);
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value)
  }

  function handleCommentChange(event){
    setComment(event.target.value)
  }

  function handlePaymentChange(event){
    setPayment(event.target.value)
  }

  function handleShippingChange(event){
    setShipping(event.target.value)
  }
  return( <div>
              <input value= {name} onChange={handleChangeName} />
              <p>Name: {name}</p>
              <input value={quantity} onChange={handleQuantityChange} type='number'/>
              <p>Quantity: {quantity}</p>

              <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instruction'/>
              <p>Comment: {comment}</p>

              <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Master card</option>
                <option value="GiftCard">GiftCard</option>
              </select>
              <p>Payment : {payment}</p>

              <label>
                <input type="radio" value = 'pickup' checked={shipping === 'pickup'} onChange={handleShippingChange}/>
                      Pickup
              </label>
              <label>
                <input type="radio" value = 'Delivery' checked={shipping === 'Delivery'} onChange={handleShippingChange}/>
                      Delivery
              </label>

          </div>)
}

export default MyComponent