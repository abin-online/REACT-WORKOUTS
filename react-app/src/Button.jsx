 
 //inline styling

//  function Button(){
//     const styles = {
//             backgroundColor: "hsl(200, 100%, 50%)",
//             color: "white",
//             padding: "10px 20px",
//             borderRadius: "10px",
//             border: "none",
//             cursor: "pointer",
//            }
//     return (<button style={styles}>Click Me</button>)
// }

let count = 0
function Button(){
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++
    //         console.log(`${name} you clicked ${count} times`);
    //     }else{
    //         console.log(`${name} stop clicking me `);
            
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "OUCH ";
    
    return (<button onDoubleClick={(e)=>handleClick(e)}>Click Me</button>)
}

export default Button