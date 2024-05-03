const Modal = ({showModal, toggleModal})=>{

    return (
        <div className={`w-[100%] h-[100vh] bg-red-500 ${showModal ? 'block' : 'hidden'}`}>
            <div className="w-[300px] h-[300px] bg-white text-black">
                <h1>Hello</h1>
            </div>
            {/* <button onClick={()=>{document.getElementById('modal').close() }} className='border-black border-[1px] px-4'>Close Modal</button> */}
            <button onClick={toggleModal}>close</button>
        </div>
    )
}

export default Modal;