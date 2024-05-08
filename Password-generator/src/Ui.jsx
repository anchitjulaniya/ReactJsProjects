const Ui = ()=>{ 
    
    const purpleShadow = {
        boxShadow: '0px 0px 10px 5px purple'
      };
    

    return (
    <div style={purpleShadow} className=" rounded-2xl shadow-2xl h-[80vh] w-[918px] flex flex-col gap-8 py-10">
      
        <div className="flex justify-evenly items-center text-blue-200">
          <p className="">Your password's score: <span className="text-red-500 font-semibold">very weak</span></p>
          <p className="">Estimated time to crack: <span className="text-red-500 font-semibold">10 seconds</span></p>
          
        </div>
        
        <div id="password-display-container" className="w-[828px] h-[128px] rounded-2xl bg-[rgb(48,49,52)] mx-auto"></div>

        <div className="flex items-center justify-center gap-5">
          <button className="text-white font-bold bg-[rgb(23,93,220)] w-[400px] text-[18px] py-2 rounded-full">Copy to Clipboard</button>
          <button className="text-white font-bold bg-[rgb(23,93,220)] w-[400px] text-[18px] py-2 rounded-full">Regenerate Password</button>
        </div>
        
        <div className="w-[828px] flex items-center mx-auto gap-64 pl-12">
          <span className="flex flex-col gap-2">
            <p className="text-4xl font-semibold text-blue-200">Type</p>
            <span className="flex gap-5">
              <span className="flex gap-2"><input type="radio" name="password" id="password" /><label htmlFor="password" className="text-white">Password</label></span>
              <span className="flex gap-2"><input type="radio" name="passphrase" id="passphrase" /><label htmlFor="passphrase" className="text-white">Passphrase</label></span>
            </span>
          </span>
          
          <span>
            <p className="text-4xl font-semibold text-blue-200">Characters: <span className="">4</span></p>
          </span>
        </div>
        
        <div className="w-[828px] mx-auto pl-12 flex flex-col gap-2">
            <p className="text-3xl font-semibold text-blue-200">Additional Options</p>
            <span className="flex gap-5 hover:cursor-pointer">
              <span className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <label className="text-white" htmlFor="">A-Z</label>
              </span>
              <span className="flex gap-2 hover:cursor-pointer">
                <input type="checkbox" name="" id="" />
                <label className="text-white" htmlFor="">a-z</label>
              </span>
              <span className="flex gap-2 hover:cursor-pointer">
                <input type="checkbox" name="" id="" />
                <label className="text-white" htmlFor="">0-9</label>
              </span>
              <span className="flex gap-2 hover:cursor-pointer">
                <input type="checkbox" name="" id="" />
                <label className="text-white" htmlFor="">!@#$%^&*</label>
              </span>

            </span>
        </div>
        
        {/* <div className="w-[828px] ms-auto">
          Created by <a className="text-blue-600" href="https://github.com/anchitjulaniya/ReactJsProjects/tree/main/Password-generator">Anchit Julaniya</a>
        </div> */}
    </div>
)}

export default Ui;