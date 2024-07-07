import React from "react";
import Card from "./Card";
import { FaShieldAlt } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Work() {

  const spotifyReleaseReader = {
    platform: "Spotify Release Reader",
    categories: ["JavaScript", "Node.js"],
    desHeading : "Spotify Release Reader",
    description: "A simple Spotify app to save your weekly Release Radar to your playlists. Capable of doing much more thanks to a modular architecture.",
    viewArticles: "URL_TO_SOURCE_CODE",
    backgroundColor : "#340434",
    tagBackgroundColor : "#4B174F",
    textColor : "white"
  };

  const mediumArticles = {
    platform: "Medium",
    categories: ["Miscellaneous", "Blog", "Android", "Design"],
    desHeading : "Medium Articles",
    description: "Thoughtfully crafted articles/guides published on Medium.com - covers advanced development topics I picked up over the years.",
    viewArticles: "URL_TO_ARTICLES",
    backgroundColor : "#14532d",
    tagBackgroundColor : "#15803d",
    textColor : "white"
  };

  const Cinebon = {
    platform: "Cinebon",
    categories: ["Android",
      "Kotlin",
      "Compose",
      "Firebase"],
    desHeading : "Cinebon",
    description: "A platform for curated movie information, creating a community where users can share their passion and knowledge for the cinematic arts. Craft your own 'Watchlist,' stay updated on the newest releases, and chat with fellow enthusiasts for lively discussions about your favourite media.",
    viewArticles: "URL_TO_ARTICLES",
    backgroundColor : "#4F3C7D",
    tagBackgroundColor : "#160D48",
    textColor : "white"
  }
  const hubSFU = {
    platform: "hubSFU",
    categories: ["Android", "Kotlin", "XML"],
    desHeading: "hubSFU",
    description: "A community-focused Android app, built around the needs and feedback of local university students. This project was developed in 1 effective day - from concept to design to app - during a hackathon.",
    viewArticles: "URL_TO_ARTICLES",
    backgroundColor: "#65393c",
    tagBackgroundColor: "#98565A",
    textColor: "white"
  };
  
  const trace2Sleep = {
    platform: "Trace 2 Sleep",
    categories: [ "Android", "Linux", "C", "Makefile"],
    desHeading: "Trace 2 Sleep",
    description: "An Android Linux kernel display parabolic corner-to-corner customizable gesture driver for waking up the device display or sleeping. Built for Linux kernel v3.10 but can be easily ported to newer versions.",
    viewArticles: "URL_TO_ARTICLES",
    backgroundColor: "#14532d",
    tagBackgroundColor: "#15803d",
    textColor: "white"
  };
  

  return (
    <div className="flex px-10 lg:px-0">
      <div className="min-h-[100vh] h-fit">
      <h1 className="text-white text-6xl mb-5">
        Work <span className="text-[rgb(133,146,153)]">showcase:</span>
      </h1>
      <div id="cards" className="flex flex-wrap gap-10">
        {/* medium */}
        <Card data={mediumArticles} />
        <Card data={spotifyReleaseReader} />
        <Card data={Cinebon} />
        <Card data={hubSFU} />
        <Card data={trace2Sleep} />
        
        
        
        {/* logos */}
            {/* <div className="bg-[#340434] text-white p-8 rounded-lg shadow-lg w-[400px] max-h-[80vh]">
              <div className="flex flex-col items-center mb-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png"
                  alt="Logos"
                  className="h-12 w-12 mb-4"
                />
                <h1 className="text-3xl font-bold">Logos</h1>
                <div className="flex space-x-2 mt-4">
                  <span className="bg-[#4B174F] text-sm px-3 py-1 rounded-full">
                    Android
                  </span>
                  <span className="bg-[#4B174F] text-sm px-3 py-1 rounded-full">
                    Kotlin
                  </span>
                  <span className="bg-[#4B174F] text-sm px-3 py-1 rounded-full">
                    Jetpack Compose
                  </span>
                </div>
              </div>
              <div className="bg-[#4B174F] p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Logos Wallpaper</h2>
                <div className="bg-white h-[2px] w-16 mb-4"></div>
                <p className="mb-4">
                  Logos Wallpaper is a modern, clean, and minimal wallpaper
                  generator app using beautiful logo sets. Each generated
                  wallpaper is designed specifically for your device. With 400+
                  logos and a whole lot of customization options, you can make the
                  perfect wallpaper - be yourself!
                </p>
                <div className="flex space-x-4">
                  <button className="flex items-center bg-[#4B174F] px-4 py-2 rounded-full text-white">
                    <FaShieldAlt className="mr-2" /> Privacy Policy
                  </button>
                  <button className="flex items-center bg-[#4B174F] px-4 py-2 rounded-full text-white">
                    <FaGooglePlay className="mr-2" /> Play Store
                  </button>
                </div>
              </div>
            </div> */}

      
      </div>
    </div>
    <div className="w-[160px] h-full hidden lg:block"></div>
    </div>
  );
}

export default Work;
