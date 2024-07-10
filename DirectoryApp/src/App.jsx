import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RetrieveInfo from "./components/RetrieveInfo";
import AddNewPerson from "./components/AddNewPerson";
import Modal from "./Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [page, SetPage] = useState("Add New Person");
  const [modalIsOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState(0);

  const [directory, setDirectory] = useState(() => {
    const x = localStorage.getItem("directory");
    // console.log(x)
    return x ? JSON.parse(x) : [];
  });

  useEffect(() => {
    localStorage.setItem("directory", JSON.stringify(directory));
  }, [directory]);

  // Example function to add a new entry to the directory
  
  function openModal() {
    setIsOpen(true);
    console.log(modalIsOpen);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function notify(){
    toast.success('Added Successfully!', {
      position: "top-right",
      autoClose: 2300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      draggable: true,
      });
      console.log("Added Successfully!");
  }

  const Add = () => {
    setDirectory((prevDirectory) => [...prevDirectory, {
      name: name,
      dob: dob,
      aadhaar: aadhaar,
      mobile: mobile,
      age: age,
    }]);
    
    console.log(directory);
    if(name.trim() === "" || dob.trim() === "" || aadhaar.trim() === "" || mobile.trim() === "" || age.trim() === ""){
      alert("Please fill all the fields");
      return
    }
    notify();
    

    closeModal();
  }

  return (
    <>
    <ToastContainer />
    {
          modalIsOpen && 
          <Modal
            name={name}
            setName={setName}
            dob={dob}
            setDob={setDob}
            aadhaar={aadhaar}
            setAadhaar={setAadhaar}
            mobile={mobile}
            setMobile={setMobile}
            age={age}
            setAge={setAge}
            Add={Add}
            closeModal={closeModal}
          />
        }
      <Header />
      <div className="flex lg:pl-16 items-center py-5">
        <div className="flex items-center md:gap-5 gap-8 mx-auto lg:mx-0">
          <button
            className="bg-blue-500 px-2 text-sm md:text-lg md:px-4 py-1 text-white rounded-lg min-w-fit"
            onClick={() => SetPage("Add New Person")}
          >
            Add New Person
          </button>
          <button
            className="bg-blue-500 px-2 text-sm md:text-lg  md:px-4 py-1 text-white rounded-lg min-w-fit"
            onClick={() => SetPage("Retrieve Information")}

          >
            Retrieve Information
          </button>
        </div>
      </div>

      <div className="w-[92%] mx-auto border-black border-[1px] h-fit min-h-[70vh] relative">
        <div className="h-[80px]">
          <div className="px-10 w-fit py-4 text-black bg-white border border-black">
            {page}
          </div>
        </div>

        <div className="xl:mx-auto flex justify-start xl:justify-center overflow-auto">
          {page === "Add New Person" && <AddNewPerson directory={directory} />}
          {page === "Retrieve Information" && <RetrieveInfo directory={directory} />}
        </div>

        

        <span className="absolute bottom-3 right-3">
          <button
            onClick={openModal}
            className="bg-blue-500 text-lg px-4 py-1 text-white rounded-lg min-w-fit"
          >
            Add
          </button>
        </span>
      </div>
    </>
  );
}

export default App;
