import React from "react"
import { useState } from "react";

class UserClass extends React.Component{
    
    constructor(props){
    super(props)

    this.state = {
        count : 0,
        count2 : 0
    };
    console.log("child constructor");
    
    }
    componentDidMount(){
        console.log("child component did mount");
    }
    render(){
        console.log("Child render");
        const {name, location} = this.props;
        const {count,count2} = this.state;
        return(
            <div className="text-blue-500 flex flex-col gap-5 text-xl">
                <h1>{name}</h1>
                <h2>{location}</h2>
                <p>count  : {count}</p>
                <p>count2 : {count2}</p>
                
                <button onClick={()=>{this.setState({count:count+1,count2:count2+2})}} className="w-[120px] bg-red-500 text-white font-bold text-md border-black border-[1px] rounded-md">Increment</button>
                <button onClick={()=>{this.setState({count:count-1,count2:count2-2})}} className="w-[120px] bg-red-500 text-white font-bold text-md border-black border-[1px] rounded-md">Decrement</button>
            </div> 
        )
    }
}


export default UserClass;