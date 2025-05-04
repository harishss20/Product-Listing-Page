import React from "react";

function Products() {
  return (
    <aside className="w-64 p-4 ml-20 mt-8">
      <label className="flex items-center font-bold text-sm uppercase">
        <input type="checkbox" className="mr-2" />
        CUSTOMIZABLE
      </label>
      <details open className="mt-4 border-t border-gray-200 pt-4">
        <summary className="text-sm font-bold uppercase cursor-pointer">
          IDEAL FOR
        </summary>
        <p className="text-sm mt-2">All</p>
        <a
          href="#"
          className="block text-xs text-blue-500 hover:underline mt-1"
        >
          Unselect all
        </a>
        <div className="mt-2 space-y-2 flex flex-col">
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Men</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2 " />
            <span className="text-sm">Women</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Baby &amp; Kids</span>
          </label>
        </div>
      </details>
      <details className="mt-4 border-t border-gray-200 pt-4">
        <summary className="text-sm font-bold uppercase cursor-pointer">
          OCCASION
        </summary>
        <p className="text-sm mt-2">All</p>
      </details>
      <details className="mt-4 border-t border-gray-200 pt-4">
        <summary className="text-sm font-bold uppercase cursor-pointer">
          WORK
        </summary>
        <p className="text-sm mt-2">All</p>
      </details>
      <details className="mt-4 border-t border-gray-200 pt-4">
        <summary className="text-sm font-bold uppercase cursor-pointer">
          FABRIC
        </summary>
        <p className="text-sm mt-2">All</p>
      </details>
      <details className="mt-4 border-t border-gray-200 pt-4">
        <summary className="text-sm font-bold uppercase cursor-pointer">
          SEGMENT
        </summary>
        <p className="text-sm mt-2">All</p>
      </details>
      <details className="mt-4 border-t border-gray-200 pt-4">
        <summary className="text-sm font-bold uppercase cursor-pointer">
          SUITABLE FOR
        </summary>
        <p className="text-sm mt-2">All</p>
      </details>
    </aside>
  );
}

export default Products;
