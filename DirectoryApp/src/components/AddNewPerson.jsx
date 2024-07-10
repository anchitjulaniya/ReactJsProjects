import React from 'react'

function AddNewPerson( {directory} ) {
  
  const headingRows = [
    "Name",
    "Date of Birth",
    "Aadhaar Number",
    "Mobile Number",
    "Age",
    "Actions"
  ];


  return (
    <>
        <table className='scale-75 lg:scale-100  text-sm md:text-md w-[90%] border border-black'>
            <tr className='bg-blue-600 text-white font-semibold'>
                {headingRows.map((heading, index) => (
                <th className='px-16 py-1 border-r-2 border-white' key={index}>{heading}</th>
            ))}
            </tr>
            {directory.length > 0 ? directory.map((person, index) => (
                <tr className='border-b' key={index}>
                    <td className='flex justify-center'>{person.name}</td>
                    <td className='px-16 py-1 border-r-2 border-white text-ellipsis'>{person.dob}</td>
                    <td className='px-16 py-1 border-r-2 border-white'>{person.aadhaar}</td>
                    <td className='px-16 py-1 border-r-2 border-white'>{person.mobile}</td>
                    <td className='px-16 py-1 border-r-2 border-white'>{person.age}</td>
                    <td className='px-16 py-1 border-r-2 border-white'>Edit</td>
                </tr>
            )) : null}
        </table>
    </>
  )
}

export default AddNewPerson