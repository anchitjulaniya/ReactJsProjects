import React from 'react'
import UserClass from './UserClass';

class AboutClass extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent Componet did mount");
    }

    render(){
        console.log("Parent render");
        return(
            <div>
            <div className="max-w-[360px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
  <form className=' text-white'>
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" > {this.props.name} </label>
      <input
        placeholder="Your Name"
        className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" > Email </label>
      <input
        placeholder="Your Email"
        className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
        name="email"
        id="email"
        type="email"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" > Message </label>
      <textarea
        placeholder="Your Message"
        className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
        rows="4"
        name="message"
        id="message"
      ></textarea>
    </div>
    <div className="mb-4">
      <button
        className="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>
        <UserClass name={"Anchit"} location={"Delhi"}></UserClass>
        </div>
        )
    }
}

export default AboutClass;