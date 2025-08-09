import React from "react";

export default function Card({name,pic}) {
  return (
    <>
      <div className="w-48 h-64 rounded-md shadow-md bg-black text-gray-100 overflow-hidden flex flex-col">
        <img src={pic} alt="pic" className="object-cover w-full h-28" />
        <div className="flex flex-col flex-1 justify-between p-3">
          <div className="flex-1">
            <h2 className="font-semibold text-base mb-1">{name}</h2>
            <p className="text-xs text-gray-400">
              {name} is a country of beautiful rich culture diverse
              traditions.
            </p>
          </div>
          <button
            type="button"
            className="self-center px-3 py-1 text-xs rounded bg-gray-800 hover:bg-gray-700 transition"
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
}
