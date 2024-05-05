import {Link} from "react-router-dom";

const Header = ()=>{
    return (
        <div className="header flex justify-between p-5 items-center pr-10">
            <img className="hover:cursor-pointer" height={40} width={40}  src="https://b.zmtcdn.com/images/logo/zomato_logo_2017.png" />
            <div className="flex gap-5 items-center">
                <p className="hover:text-orange-500 duration-900"><Link to="/">Home</Link></p>
                <p className="hover:text-orange-500"><Link to="/about">About Us</Link></p>
                <p className="hover:text-orange-500"><Link to="/contact">Contact Us</Link></p>
                <p className="hover:text-orange-500"><Link to="/cart">Cart</Link></p>
            </div>
        </div>
    );
}

export default Header;