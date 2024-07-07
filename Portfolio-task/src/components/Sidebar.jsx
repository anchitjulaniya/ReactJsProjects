import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Sidebar() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className="relative hidden lg:block">
      <div className="bg-[rgb(0,216,182)] fixed top-0 right-0 flex flex-col items-end px-5 py-12 h-[100vh] w-[160px] min-h-fit">
      <div className="min-h-fit">
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
        />
      </div>

      <div className="text-black flex flex-col items-end list-none text-lg ">
        <a href="#" className="flex items-center group mb-3">
          My Work <div className="w-[15px]"></div>
          <div className="border-r-[6px] border-black transition-all duration-500 rounded-full h-[6px] text-black group-hover:h-[27px]"></div>
        </a>
        <a href="#" className="flex items-center group mb-3">
          About me <div className="w-[15px]"></div>
          <div className="border-r-[6px] border-black transition-all duration-500 rounded-full bg-transparent h-[6px] text-black group-hover:h-[27px]"></div>
        </a>
        <a href="#" className="flex items-center group mb-3">
          Contact me <div className="w-[15px]"></div>
          <div className="border-r-[6px] border-black transition-all duration-500 rounded-full h-[6px] text-black group-hover:h-[27px]"></div>
        </a>
        <a href="#" className="flex items-center group mb-3">
          Resume <div className="w-[15px]"></div>
          <div className="border-r-[6px] border-black transition-all duration-500 rounded-full h-[6px] text-black group-hover:h-[27px]"></div>
        </a>
        <a href="#" className="flex items-center group mb-3">
          Other <div className="w-[15px]"></div>
          <div className="border-r-[6px] border-black transition-all duration-500 rounded-full h-[6px] text-black group-hover:h-[27px]"></div>
        </a>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
