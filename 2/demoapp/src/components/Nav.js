function Nav(){
    return (
        <div className="flex text-white bg-black items-center h-[70px] justify-between px-10">
            <div className="text-2xl font-bold">Geekster</div>
            <div className="flex gap-3">
                <a href="" className="border px-1">Home</a>
                <a href="" className="border px-1">About</a>
                <a href="" className="border px-1">Services</a>
                <a href="" className="border px-1">contact us</a>
               
            </div>
        </div>
    );
}

export default Nav;