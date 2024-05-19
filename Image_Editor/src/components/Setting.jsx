import React from "react";

function Setting() {
  return (
    <div className="text-white flex flex-col items-center h-[60vh] justify-center gap-8">
      <h1 className="font-semibold text-4xl">Settings</h1>
      <p className="">Restore Factory Setting</p>

      <button
        type="button"
        className="rounded-full bg-black border-white border-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Restore Settings
      </button>

      <p className="text-[rgb(108,117,125)]">
        Restoring factory settings removes all the data stored on this device.
        You would be taken to the home screen!
      </p>
    </div>
  );
}

export default Setting;
