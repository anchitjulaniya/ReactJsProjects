import React from "react";

var card = {
    width : "300px",
    height : "300px",
    border : "1px solid black",
    margin : "10px",
    padding : "30px" ,
    borderRadius : "10px"    
}   

function Props(prop){
    return (
        <div style={card} >
            <img className="h-[200px] w-full"  src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww" alt="" />
            <h3>{prop.name}</h3>
            <p>Male</p>
            <button type="submit">Profile</button>
        </div>
    )  
}

export default Props;