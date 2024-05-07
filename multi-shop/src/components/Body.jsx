import FeaturedProduct from "./FeaturedProduct";
import Categories from "./Categories";
import RecentProduct from "./RecentProduct";

const Body =()=>{
    return (
        <div className="bg-[rgb(245,245,245)]">
            <div id="carouselSection" className="h-[460px] w-full flex items-center py-6 px-12 gap-7">
                <div className="w-[900px] border-black border-2 h-full"></div>
                <div className="w-[450px] h-full flex flex-col gap-6">
                    <span className="w-full h-1/2 border-black bg-black border-2 relative">
                        <span className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-5">
                            <h1 className="text-white font-bold">SAVE 20%</h1>
                            <h1 className="text-white font-bold text-2xl">Special Offer</h1>
                            <button className="border-black text-black bg-yellow-400 border-2 px-3 py-1">Shop Now</button>
                        </span>
                    </span>
                    <span className="w-full h-1/2 border-black bg-black border-2 relative">
                        <span className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-5">
                            <h1 className="text-white font-bold">SAVE 20%</h1>
                            <h1 className="text-white font-bold text-2xl">Special Offer</h1>
                            <button className="border-black text-black bg-yellow-400 border-2 px-3 py-1">Shop Now</button>
                        </span>
                    </span>
                </div>
            </div>

            <div className="h-[144px] w-full px-14 py-8 gap-8 flex items-center justify-center">
                <div className="w-1/4 h-full border bg-white text-yellow-400 flex items-center justify-center gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>
                    <h1 className="text-black font-semibold text-xl">Quality Product</h1>
                </div>
                <div className="w-1/4 h-full border bg-white text-yellow-400 flex items-center justify-center gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>

                    <h1 className="text-black font-semibold text-xl">Free Shipping</h1>
                </div>
                <div className="w-1/4 h-full border bg-white text-yellow-400 flex items-center justify-center gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                    </svg>

                    <h1 className="text-black font-semibold text-xl">14-Day Return</h1>
                </div>
                <div className="w-1/4 h-full border bg-white text-yellow-400 flex items-center justify-center gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                    </svg>

                    <h1 className="text-black font-semibold text-xl">24/7 Support</h1>
                </div>
            </div>

            <Categories />

            <FeaturedProduct />
            <div className="h-[300px] my-5 w-full flex px-10 gap-6">
                    <span className="w-full h-full border-black bg-black border-2 relative">
                        <span className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-5">
                            <h1 className="text-white font-bold">SAVE 20%</h1>
                            <h1 className="text-white font-bold text-2xl">Special Offer</h1>
                            <button className="border-black text-black bg-yellow-400 border-2 px-3 py-1">Shop Now</button>
                        </span>
                    </span>
                    <span className="w-full h-full border-black bg-black border-2 relative">
                        <span className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-5">
                            <h1 className="text-white font-bold">SAVE 20%</h1>
                            <h1 className="text-white font-bold text-2xl">Special Offer</h1>
                            <button className="border-black text-black bg-yellow-400 border-2 px-3 py-1">Shop Now</button>
                        </span>
                    </span>
                </div>
            <RecentProduct />

        </div>
    )
}

export default Body;