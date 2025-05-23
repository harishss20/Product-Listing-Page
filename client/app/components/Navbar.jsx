import React from "react";
import { Search, Heart, Backpack, User } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full py-6  px-20 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-black">
        <div>
          <img src="/Logo.png" alt="logo" className="w-10 h-10" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold ml-46">Logo</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Search className="cursor-pointer" size={20} />
          <Heart className="cursor-pointer" size={20} />
          <Backpack className="cursor-pointer" size={20} />
          <User className="cursor-pointer" size={20} />
          <select className="border rounded p-1">
            <option value="eng">EN</option>
            <option value="fr">FR</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
            <option value="ar">العربية</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
      </div>
      <div className="hidden md:flex pt-10 gap-6 font-bold justify-center items-center text-black">
        <button className="cursor-pointer">SHOP</button>
        <button className="cursor-pointer">SKILLS</button>
        <button className="cursor-pointer">STORIES</button>
        <button className="cursor-pointer">ABOUT</button>
        <button className="cursor-pointer">CONTACT US</button>
      </div>
    </div>
  );
}

export default Navbar;
