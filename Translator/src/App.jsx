import axios from 'axios';
import { useState } from 'react';
import language from './Language'; // Assuming Language.js contains an array of language options

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('Translation');
  const [lang, setTargetLanguage] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('');


  async function translatorFunction() {
    if(lang === ''){
      alert('Select a language');
      return;
    }
    const encodedParams = new URLSearchParams();
    encodedParams.append('source_language', 'en');
    encodedParams.append('target_language', lang);
    encodedParams.append('text', query);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodedParams.toString(), // Convert to string
    };

    try {
      const response = await axios.request(options);
      console.log(response.data, lang);
      
      setResult(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
      setResult('Translation Error');
    }
  }
  // 

  return (
    // <div>
    //   <span>
    //     <input
    //       className='border-black border-[1px] px-4 rounded-md'
    //       type='text'
    //       value={query} // Set value attribute to query
    //       onChange={(e) => { setQuery(e.target.value) }}
    //       placeholder='Enter Text'
    //     />
    //     <select className='border-black border-[1px] px-4' onChange={(e) => { setTargetLanguage(e.target.value) }}>
    //       <option disabled>Select</option>
    //       {language.map((item, index) => (
    //         <option key={index} value={item.code}>{item.name}</option> // Assuming each language item has a 'code' and 'name'
    //       ))}
    //     </select>
    //     <button className='border-black border-[1px] px-4' onClick={translatorFunction}>Translate</button>
    //   </span>
    //   <div className='w-[500px] h-[200px] flex justify-center text-black items-center'>
    //     <p>{result}</p>
    //   </div>
    // </div>
    // ------------------------------
    <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center mt-[50px]">
                <h1 className="text-4xl font-bold tracking-wider">Text Converter</h1>
            </div>
            <div className="flex items-center justify-between h-[80px] px-4">
                <select onChange={(e) => { setSourceLanguage(e.target.value) }} className="border-black border-[1px] rounded-md outline-none w-[280px] h-[30px] text-blue-700" name="" id="">
                    <option className="flex justify-center" value="en" selected>English</option>
                    {language.map((item, index) => (
                      <option key={index} value={item.code}>{item.name}</option> // Assuming each language item has a 'code' and 'name'
                    ))}
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>

                <select onChange={(e) => { setTargetLanguage(e.target.value) }} className="border-black border-[1px] rounded-md outline-none w-[280px] h-[30px] text-blue-700" name="" id="">
                    <option disabled>Select</option>
                    {language.map((item, index) => (
                      <option key={index} value={item.code}>{item.name}</option> // Assuming each language item has a 'code' and 'name'
                    ))}
                </select>
                
            </div>
            <div className="border-blue p-2 border-[1px] flex gap-2 items-center ">
                <textarea onChange={(e) => { setQuery(e.target.value) }} className="border-black border-[1px] w-[302px] h-[166] p-3 rounded-md outline-none" name="" id="" cols="30" rows="7" placeholder="ENTER TEXT"></textarea>
                <div className="border-black border-[1px] w-[302px] h-[195px] p-3 rounded-md">{result}</div>
            </div>
            <div className='p-2 h-[50px]'>
              <button  onClick={translatorFunction} className='text-white font-bold bg-blue-500 flex justify-center items-center w-full h-full rounded-md'>Translate</button>
            </div>
            
        </div>
  );
}

export default App;
