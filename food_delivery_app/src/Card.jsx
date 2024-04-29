import PropTypes from 'prop-types';


 const Card = ({restroName, foodName, imageUrl, rating, time, link }) => {
    console.log(restroName, foodName, imageUrl);
  return (
    <a href={link}>
        <div className="w-[300px] rounded-md border hover:scale-110 duration-600 transition-all cursor-pointer" >
      <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset"}}>
        <img style={{zIndex:"-2"}}
            src={imageUrl}
            alt="Food Image"
            className=" h-[200px] w-full rounded-md object-cover"
        />
      </div>
      <div className="px-4 py-2" >
        <h1 className="text-lg font-semibold">{restroName}</h1>
        <p className='flex gap-2 text-rgb(150,150,150) font-semibold'><b className='text-white bg-green-500 rounded-full flex items-center justify-center w-[25px]'>&#9733;</b>{rating} ||  {time}-{time+5} mins</p>
        <p className="mt-3 text-sm text-gray-600">{foodName}
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Order Now
        </button>
      </div>
    </div>
    </a>
  )
}
Card.propTypes = {
    key: PropTypes.string,
    restroName: PropTypes.string.isRequired,
    foodName: PropTypes.string,
    imageUrl: PropTypes.string,
    rating: PropTypes.number,
    time: PropTypes.number,
    link: PropTypes.string
  };

  export default Card;
// ---------------------------------------
//     return (
//                 <div className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden">
//                     <img className="w-[300px] h-[200px]" src={props.imageUrl} alt="Food Item" />
//                     <div className="card-body px-3 py-1">
//                         <h2 className="card-title text-black font-bold text-2xl">{props.restroName}</h2>
//                         <p>{props.foodName}</p>
                        
//                     </div>
//                 </div>
//                 )
// }



// -----------------------

