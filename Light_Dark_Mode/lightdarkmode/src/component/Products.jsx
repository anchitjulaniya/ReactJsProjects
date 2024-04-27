function Products(){
    const getProducts = ()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);})
    }

return (
    <div>
        <h2>Product component</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt consectetur aperiam officiis necessitatibus, repellat vel? Vitae sint provident, molestias, repudiandae suscipit placeat perferendis, consequuntur quo in pariatur sequi earum impedit nobis quasi quaerat! Rem, obcaecati velit eaque aperiam natus optio mollitia cum nisi ipsa soluta earum repellendus quo minima aliquam quod placeat porro? Iste vel cumque eum autem, pariatur ipsam iure, minima dolor, cum magni eveniet ipsum quisquam facere. Unde impedit nulla nemo possimus, nisi fuga illo veniam minima animi exercitationem est magnam praesentium vel assumenda ab, fugit voluptatum facilis. Totam animi excepturi, molestias necessitatibus facilis rerum ipsum eius?</p>
        <button
            className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
            onClick={getProducts}>
            Get Products
        </button>
    </div>
);
}
export default Products;