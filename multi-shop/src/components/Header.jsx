

 const Header = ()=>{
    return (
        <header className="flex flex-col">
            <div className="text-[rgb(108,117,125)] bg-[rgb(245,245,245)] h-[35px] flex justify-between items-center px-16">
                <span className="flex gap-5 items-center">
                    <p>About</p>
                    <p>Contact</p>
                    <p>Help</p>
                    <p>FAQs</p>
                </span>
                <span className="flex gap-5">
                    <select name="" id="" className="outline-none">
                        <option value="">My Account</option>
                        <option value="">Sign in</option>
                        <option value="">sign up</option>
                    </select>
                    <select name="" id="">
                        <option value="">USD</option>
                        <option value="">INR</option>
                        <option value="">EUR</option>
                        <option value="">GBP</option>
                        <option value="">CAD</option>
                        
                    </select>
                    <select name="" id="">
                        <option value="">EN</option>
                        <option value="">HI</option>
                        <option value="">FR</option>
                    </select>
                </span>
            </div>
            <div className="flex items-center justify-between px-12 h-[75px]">
                <span>
                    <span className="bg-[rgb(61,70,77)] text-[rgb(255,211,51)] font-bold px-1 text-4xl">MULTI</span>
                    <span className="bg-[rgb(255,211,51)] text-[rgb(61,70,77)] font-bold px-1 text-4xl">SHOP</span>
                </span>
                <span className="flex items-center border-black border-2  rounded-md overflow-hidden">
                    <input type="text" placeholder="Seach for products" className="px-3 outline-none"/>
                    <svg className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </span>
                <span className="flex flex-col items-center justify-center">
                    <p className="text-sm text-[rgb(61,70,77)]">Customer Service</p>
                    <p className="font-semibold text-lg tracking-widest text-[rgb(51,60,57)]">+012-345-678</p>
                </span>
            </div>

            <div className="bg-[rgb(61,70,77)] h-[65px] flex items-center justify-between px-12">
                <span className="h-full flex items-center justify-center gap-5">
                    <span className="w-[280px] bg-yellow-400 h-full px-3 flex items-center justify-between hover:cursor-pointer">
                        <span className="flex items-center gap-1 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                            </svg>
                            <p>Categories</p>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                        </svg>

                    </span>
                    <span className="text-white flex items-center justify-center gap-4">
                        <p className=" hover:cursor-pointer text-yellow-400 hover:text-yellow-400">Home</p>
                        <p className=" hover:cursor-pointer hover:text-yellow-400">Shop</p>
                        <p className="  hover:cursor-pointer hover:text-yellow-400">Shop Detail</p>

                        <select  name="Pages" id="" className="bg-transparent outline-none hover:cursor-pointer hover:text-yellow-400">
                            <option value="" className="bg-yellow-400">Shopping Cart</option>
                            <option value="" className="bg-yellow-400">Checkout</option>
                        </select>
                        <p className="  hover:cursor-pointer hover:text-yellow-400">Contact</p>
                    </span>
                </span>



                <span className="text-yellow-500 flex gap-6 items-center justify-center h-full">
                    <span className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <div className="w-[20px] h-[20px] flex justify-center items-center text-[14px] rounded-full border-white border-[1px] px-1 text-white">0</div>
                    </span>

                    <span className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                        <div className="w-[20px] h-[20px] flex justify-center items-center text-[14px] rounded-full border-white border-[1px] px-1 text-white">0</div>
                    </span>
                </span>
            </div>
        </header>
    )
}
export default Header;