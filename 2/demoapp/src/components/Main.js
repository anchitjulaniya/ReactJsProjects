function Main(){
    return (
        <div>
            <div className="w-full h-[70vh flex gap-2 p-2">
                <div className="w-1/2 h-full">
                    <img className="w-full " src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww" />
                </div>
                <div className="w-1/2 h-full">
                    <img className="w-full " src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww"  />
                </div>
            </div>
            <div className="flex justify-center my-10">
            <button className="border px-2 rounded-lg bg-green-500 text-white font-semibold w-[100px] ">click</button>
            </div>
        </div>
    );
}

export default Main;