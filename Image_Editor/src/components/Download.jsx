import { ArrowDown } from "lucide-react";
import {  useState } from "react";
import { Circles } from 'react-loader-spinner'

function Download() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (text = "") => {
    setLoading(true);
    let res = await fetch(
      `https://api.unsplash.com/search/collections/?per_page=20&client_id=TKIG0GwqnBMIybKYqimoIoqHuTYPNK70VB6lj-cZ39A&query=${text}`
    );
    let data = await res.json();
    console.log(data);
    setData(data.results);
    setLoading(false);
  };

  const handleSearch = () => {
    if (text) {
      setLoading(true);
      setTimeout(() => {
        fetchData(text);
      }, 3000);
    }
  };

  const handleDownload = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold py-10">Bulk Image Downloader</h1>
      <div className="flex ">
        <form
          className="flex gap-4 items-center "
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            className="input rounded-full px-8 py-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400  transition-all duration-300 shadow-md"
            placeholder="Search (cars, bike, laptop..)"
            required=""
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            type="submit"
            className=" px-8 rounded-full bg-sky-400 py-2 text-white font-bold "
          >
           Search
          </button>
        </form>
           
      </div>
      <div className="w-full mt-8 flex flex-wrap justify-center items-center gap-5 ">
        {loading ? (
          <Circles />
        ) : data.length === 0 ? (
          <h1 className="text-2xl"></h1>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="rounded overflow-hidden shadow-lg p-4 bg-white my-4 relative duration-200 hover:scale-105"
            >
              {item.cover_photo && (
                <img
                  className="w-[400px] h-[360px] object-cover"
                  src={item.cover_photo.urls.small}
                  alt={item.cover_photo.slug}
                />
              )}
              {item.cover_photo && (
                <button
                  onClick={() =>
                    handleDownload(
                      item.cover_photo.urls.full,
                      `image-${item.cover_photo.id}.jpg`
                    )
                  }
                  className="text-gray-600 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg absolute top-80 right-6 "
                >
                  <ArrowDown />
                </button>
              )}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {item.title || "No Title"}
                </div>
                <p className="text-gray-600 text-sm">
                  Total Photos: {item.total_photos}
                </p>
                <p className="text-gray-600 text-sm">
                  Last Collected:{" "}
                  {new Date(item.last_collected_at).toLocaleDateString()}
                </p>
              </div>
              <div className="px-6 py-4">
                {item.preview_photos &&
                  item.preview_photos.map((photo, index) => (
                    <img
                      key={index}
                      className="inline-block h-12 w-12 rounded-full mr-2"
                      src={photo.urls.thumb}
                      alt={photo.id}
                    />
                  ))}
              </div>
              <div className="px-6 py-4">
                <a
                  href={item.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Collection
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Download;