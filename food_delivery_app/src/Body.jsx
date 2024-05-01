import Card from "./Card";
import restaurants from "./assets/common/utils";

const Body = () => {
  let filteredRestaurants = [...restaurants];
  return (
    
        <div>
          <div className="max-w-32 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
          <button className="px-5 py-2" onClick={()=>{
            filteredRestaurants = restaurants.filter((restro) => restro.info?.avgRating > 4.5);
            console.log(filteredRestaurants)}}>
              Top Rated
          </button>
        </div>

      
      
      <div className="cardContainer flex flex-wrap gap-10 bg-[rgb(220,220,220)] p-10">
        {filteredRestaurants.map((restro) => (
          <Card
            key={restro.info?.id}
            link={restro.cta.link}
            rating={restro.info?.avgRating}
            time={restro.info?.sla?.deliveryTime}
            restroName={restro.info?.name}
            foodName={restro.info?.cuisines.join(", ")}
            imageUrl={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restro.info?.cloudinaryImageId
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
