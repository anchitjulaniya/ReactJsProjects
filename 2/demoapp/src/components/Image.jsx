import React, { useState } from "react";


function Image(props){
    const [image, setState] = useState("https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D");
    return (
        <div>
            <h2>Change Image</h2>
            <img src={image} height={200} width={300} /><br/>
            <button className="border-[1px] px-2 border-black " onClick={() => setState("https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D")}>React</button>
            <button className="border-[1px] px-2 border-black" onClick={() => setState("https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D")}>Java</button>
        </div>
    );
}



export default Image;