

export function Products() {
   const CategoryOptions = ["all", "tables", "chairs", "kids", "sofas", "beds"];
   const CompanyOptions = ["modenza", "luxora", "Artifex", "comfora", "homestead"];
   const SortByOptions = ["a-z", "z-a", "high", "low"];
    
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex w-[80%] justify-center pl-20 bg-[rgb(240,246,255)] py-6 rounded-lg">
           <span className="flex w-[100%] ">
                <div id="search_product" className="w-1/4 ">
                        <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                        >
                        Search product
                        </label>
                        <input
                        className="flex h-10 w-[180px] rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Enter your name"
                        id="name"
                        ></input>
                    </div>

                    <div id="select_category" className="w-1/4  ">
                        <p>Select Category</p>
                        <select className="border-[1px] border-black rounded-md w-[180px] h-[40px]" name="" id="">
                            {CategoryOptions.map((option, index) => (
                                <option key={option + index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div id="select_company" className="w-1/4">
                        <p>Select Company</p>
                        <select className="border-[1px] border-black rounded-md w-[180px] h-[40px]" name="" id="">
                            {CompanyOptions.map((option, index) => (
                                <option key={option + index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div id="sort_by" className="w-1/4">  
                        <p>Sort By</p>
                        <select className="border-[1px] border-black rounded-md w-[180px] h-[40px]" name="" id="">
                            {SortByOptions.map((option, index) => (
                                <option key={option + index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
           </span>
        </div>

        <div className="flex w-[80%] justify-center pl-20 bg-[rgb(240,246,255)] py-6 rounded-lg">
            
        </div>
    </div>
  );
}
