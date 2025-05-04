import React from "react";
import { Search, Heart, Backpack, User } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full py-6  px-20 bg-white shadow-sm">
      <div className="flex items-center justify-between text-black">
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
      <div className="flex pt-10 gap-14 font-bold w-11/12 ml-16 justify-center items-center text-black">
        <h2>SHOP</h2>
        <h2>SKILLS</h2>
        <h2>STORIES</h2>
        <h2>ABOUT</h2>
        <h2>CONTACT US</h2>
      </div>
    </div>
  );
}

export default Navbar;
