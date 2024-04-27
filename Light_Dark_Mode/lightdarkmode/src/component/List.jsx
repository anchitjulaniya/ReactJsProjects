function List(){
    var mobileData = [{
        brand :"Apple",
        model:"Iphone 14",
        price:120000,
        rating:4.5
      },{
        brand :"Apple",
        model:"Iphone 12",
        price:60000,
        rating:4.7
      },{
        brand :"Samsung",
        model:"S23 Galaxy Note",
        price:120000,
        rating:4.7
      },{
        brand :"oppo",
        model:"oppo A28",
        price:100000,
        rating:4.5
      },{
        brand :"Vivo",
        model:"Vivo A27",
        price: 50000,
        rating:4.4
      }]

      
        return (
            <div  className="p-8 flex flex-col gap-10 border-red-500 border m-4">
                
            {mobileData.map(mobile => {
                return (  
                <div key={mobile.model} className="shadow-lg">
                    <dl>
                        <dt className="font-semibold">Brand Name</dt>
                        <dd className="text-blue-600 font-semibold">{mobile.brand}</dd>
    
                        <dt className="font-semibold">Model Name</dt>
                        <dd className="text-blue-600 font-semibold">{mobile.model}</dd>
    
                        <dt className="font-semibold">Price</dt>
                        <dd className="text-blue-600 font-semibold">{mobile.price}</dd>
    
                        <dt className="font-semibold">Rating</dt>
                        <dd className="text-blue-600 font-semibold">{mobile.rating}</dd>
                        
                    </dl>
                </div>
                );
            })};
        </div>
        )
          
      
}

export default List;