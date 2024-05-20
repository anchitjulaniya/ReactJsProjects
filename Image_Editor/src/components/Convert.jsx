import './folder.css'
import { useRef } from 'react';
import axios from 'axios';


const ApiKey = "mCweAp7oW7YY6Vu814drMSHK";
function Convert() {

  const fileInputRef = useRef(null);

  const handleOnClick = ()=>{
    console.log('clicked');
    fileInputRef.current.click();
  }
  const handleFileChange = (e)=>{
    console.log(e.target.files[0]);
  }

  // --------------------

  // Requires "axios" and "form-data" to be installed (see https://www.npmjs.com/package/axios and https://www.npmjs.com/package/form-data)
//       const axios = require('axios');
//       const FormData = require('form-data');
//       const fs = require('fs');
//       const path = require('path');

//       // Path to the input image
//       const inputPath = '/path/to/file.jpg';

//       // Create a new FormData instance
//       const formData = new FormData();
//       formData.append('size', 'auto');
//       formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

//       // Send a POST request to the Remove.bg API
//       axios({
//         method: 'post',
//         url: 'https://api.remove.bg/v1.0/removebg',
//         data: formData,
//         responseType: 'arraybuffer',
//         headers: {
//           ...formData.getHeaders(),
//           'X-Api-Key': ApiKey,
//         },
//         encoding: null
//       })
//       .then((response) => {
//         // Check if the request was successful
//         if (response.status != 200) {
//           console.error('Error:', response.status, response.statusText);
//           return;
//         }

//         // Write the output image to a file
//         fs.writeFileSync("no-bg.png", response.data);
//       })
//       .catch((error) => {
//         console.error('Request failed:', error);
//       });


//   // -------------




  return (
    <div className='text-white flex flex-col items-center h-[60vh] justify-center gap-8'>
        <h1 className='font-semibold text-4xl'>Image Converter</h1>
        <p className='text-[rgb(108,117,125)]'>Convert your images files to any format</p>
        <button onClick={handleOnClick} className="button mt-10">
          <div className="container">
            <div className="folder folder_one"></div>
            <div className="folder folder_two"></div>
            <div className="folder folder_three"></div>
            <div className="folder folder_four"></div>
          </div>
          <div className="active_line"></div>
          <span className="text">File Explorer</span>
        </button>
        <input className='hidden' type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleFileChange}
        />

    </div>

  )
}

export default Convert


// ----------------------------------


