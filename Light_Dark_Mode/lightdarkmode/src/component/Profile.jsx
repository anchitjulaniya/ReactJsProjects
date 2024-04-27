import {useState} from "react";

function Profile(){
    const [style,setStyle] = useState({
        backgroundColor:`white`,
        color:`black`
    }); 
    // let flag = true;
    // if(flag){
    //     lightModeActivate();
    // }
    // else{
    //     darkModeActivate();
    // }

    function darkModeActivate(){
      setStyle({backgroundColor:"black",color:"white"});
    }
    function lightModeActivate(){
        setStyle({backgroundColor:"white",color:"black"});
    }
    function changeTheme(e){
        if(e.target.checked){
            darkModeActivate();
        }
        else{
            lightModeActivate();
        }
    }
    return(
        <div className="w-[700px] h-[800px] flex items-center duration-500" style={{backgroundColor: style.backgroundColor, color: style.color}}>
            <div className="left w-[260px] h-[700px]">
                <img className=" w-[260px] h-[300px]" src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" alt="" srcset="" />
                
            </div>
            <div className="right w-[600px] h-[700px]">
                <h1 className="text-3xl font-bold">Anchit Julaniya</h1>
                <p className="text-xl">Full Stack Developer</p>
                <p className="text-xl">I am a full stack web developer. I have 4+ years of experience. I love to build websites.</p>
                <button className="bg-blue-500 text-white p-3 rounded-lg mt-5">Contact me</button><br /><br />
                <input type="checkbox" onChange={changeTheme} />Check to Switch Dark Mode
            </div>
            
        </div>
    )
}


export default Profile;