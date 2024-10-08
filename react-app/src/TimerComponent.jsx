import React from "react";

class TimerComponent extends React.Component{
    componentWillMount(){
        this.timer = setInterval(()=>{
            console.log('Timer is running')
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log('Timer cleared')
    }

    render() {
        return(
        <div>
           Check console 
        </div>
        )
    }
}

export default TimerComponent