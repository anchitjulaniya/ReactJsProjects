import './folder.css'
import { useRef, useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import { Circles } from 'react-loader-spinner'



const ApiKey = "mCweAp7oW7YY6Vu814drMSHK";
function Convert() {
  
  const [result, setResult] = useState(null);

  const fileInputRef = useRef(null);

  const handleOnClick = ()=>{
    console.log('clicked');
    fileInputRef.current.click();
  }
  const handleFileChange = (e)=>{
    console.log(e.target.files[0]);
    if(e.target.files[0]) {
      console.log("function");
      console.log(e.target.files[0]);
      //  setResult(e.target.files[0]) ;
       fetchingFunction(e.target.files[0]); 
       }
  }

  // --------------------

  // Requires "axios" and "form-data" to be installed (see https://www.npmjs.com/package/axios and https://www.npmjs.com/package/form-data)
const fetchingFunction = (file) =>{
  console.log("Inside function");

// const inputPath = '/path/to/file.jpg';
const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_file', file);

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    'X-Api-Key': ApiKey,
  },
  // encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);

    console.log("response", response.data);

    const blob = new Blob([response.data], { type: 'image/jpeg' }); // Adjust MIME type if necessary
    console.log("blob", blob)
      
    const url = URL.createObjectURL(blob);
    console.log(url);

    setResult(url);
  // 
})
.catch((error) => {
    return console.error('Request failed:', error);
});

}

  return (
    <div className='text-white flex flex-col min-h-[300px] items-center justify-center gap-8'>
      <div className='h-[20px]'></div>
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
        <div id="displayContainer" className=''>
          <img src={result} width={400} className='rounded-lg' />
        </div>
    </div>

  )
}

export default Convert


// ----------------------------------


