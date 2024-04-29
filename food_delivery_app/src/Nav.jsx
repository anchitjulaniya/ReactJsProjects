const Header = ()=>{
    return (
        <div className="header flex justify-between p-5 items-center pr-10">
            <img className="hover:cursor-pointer" height={40} width={40}  src="https://b.zmtcdn.com/images/logo/zomato_logo_2017.png" />
            <div className="flex gap-5 items-center">
                <a href="#"  className="hover:text-orange-500 duration-900">Home</a>
                <a href="#" className="hover:text-orange-500">About Us</a>
                <a href="#" className="hover:text-orange-500">Contact Us</a>
                <a href="#" className="hover:text-orange-500">Cart</a>
            </div>
        </div>
    );
}

export default Header;