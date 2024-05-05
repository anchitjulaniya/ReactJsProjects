// import { useEffect } from "react";

const RestaurantMenuPage = () => {
//     useEffect(() => {
//         // fetchMenu();
//     }, [] //optional arguments
// )

// const fetchMenu = async () => {
//     const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
//     const data = await response.json();
//     console.log(data);
// }



    return (
        <div>
            <h1 className="text-bold text-xl">Name of the Restaurant</h1>
            <h2 className="text-bold text-lg">Menu</h2>
            <ul>
                <li>Cake</li>
                <li>Paneer</li>
                <li>Diet Coke</li>
            </ul>
        </div>        
    )
}

export default RestaurantMenuPage;