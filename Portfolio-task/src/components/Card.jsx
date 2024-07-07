import React from 'react';

function Card({ data }) {
  const cardStyle = {
    backgroundColor: data.backgroundColor,
    color: data.textColor,
  };

  const tagStyle = {
    backgroundColor: data.tagBackgroundColor,
  };

  const buttonStyle = {
    backgroundColor: data.tagBackgroundColor,
    color: data.textColor,
  };

  return (
    <div style={cardStyle} className="p-8 rounded-lg shadow-lg w-[400px]">
      <div className="flex flex-col items-center mb-6">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="Medium Logo" className="h-12 w-12 mb-4" />
        <h1 className="text-3xl font-bold">{data.platform}</h1>
      </div>
      <div className="flex space-x-2 mb-6">
        {data.categories.map((category, index) => (
          <span key={index} style={tagStyle} className="text-sm px-3 py-1 rounded-full">{category}</span>
        ))}
      </div>
      <div style={tagStyle} className="p-4 rounded-lg">
        <span className="text-xl font-bold mb-8 border-b-[4px] border-white">{data.desHeading}</span>
        <br /><br />
        <p className="mb-4">{data.description}</p>
        <button style={buttonStyle} className="flex items-center px-4 py-2 rounded-full">
          <span>{data.viewArticles}</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
