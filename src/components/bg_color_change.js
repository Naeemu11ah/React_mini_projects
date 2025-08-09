import React, { useState } from "react";

export default function BgColorChange() {
  const [color, setColor] = useState("rgb(225, 216, 206)");

  return (
    <div
      className="h-screen w-screen flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-7 gap-4 bg-white flex justify-center items-center py-3 px-10 rounded-3xl shadow-2xl">
        <button
          className="px-4 rounded-3xl bg-pink-500 text-white"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="px-4 rounded-3xl bg-blue-900 text-white"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 rounded-3xl bg-white text-black"
          onClick={() => setColor("rgb(225, 216, 206)")}
        >
          White
        </button>
        <button
          className="px-4 rounded-3xl bg-black text-white"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="px-4 rounded-3xl bg-green-900 text-white"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="px-4 rounded-3xl bg-yellow-500 text-white"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="px-4 rounded-3xl bg-orange-500 text-white"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          className="px-4 rounded-3xl bg-red-600 text-white"
          onClick={() => setColor("red")}
        >
          Red
        </button>
      </div>
    </div>
  );
}
