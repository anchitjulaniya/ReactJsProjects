const Header = ()=>{

    return (
        <div className="h-[65px] w-[100%] bg-[rgb(47,48,50)] text-white flex items-center justify-between px-10 lg:px-48">
            <h1 className="font-bold text-2xl text-center">FITGURU</h1>
            <span className="flex items-center gap-8 text-lg">
                <p className="font-semibold hover:cursor-pointer">HOME</p>
                <p className="font-semibold hover:cursor-pointer">EXERCISE</p>
            </span>
        </div>
    )
}

export default Header;