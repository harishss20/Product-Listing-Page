import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex flex-col justify-center item-center text-center p-14 ">
        <h1 className="font-extralight text-6xl mb-6 ">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="max-w-xl mx-auto text-center pt-2 ">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
        <hr className=" mt-16" />
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 font-semibold px-4 gap-4">
          <div className="flex items-center gap-20">
            <p>3425 items</p>
            <button className="text-gray-600 underline text-sm hover:opacity-80">
              &lt; HIDE FILTER
            </button>
          </div>

          <div>
            <select
              name="FILTER"
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            >
              <option value="Recommend">RECOMMEND</option>
              <option value="New">NEW FIRST</option>
              <option value="Popular">POPULAR</option>
              <option value="HighToLow">PRICE : HIGH TO LOW</option>
              <option value="LowToHigh">PRICE : LOW TO HIGH</option>
            </select>
          </div>
        </div>

        <hr className="mt-8" />
      </div>
    </div>
  );
}

export default Hero;
