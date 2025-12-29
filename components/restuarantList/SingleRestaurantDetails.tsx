"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Categoryes from "./Categoryes";
import ItemDetailsRightside from "./ItemDetailsRightside";

export default function SingleRestaurantDetails({ details }: any) {
  console.log("details", details);

  return (
    <div className=" rounded-xl p-4 text-white w-full max-w-5xl">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300 w-4 h-4" />
        <Input
          placeholder="Search Item"
          className="w-full bg-[#00243F] rounded-full py-5 pl-10 pr-4 text-sm outline-none"
        />
      </div>

      {/* Category  */}
      <Categoryes />

      {/* Content */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left List */}
        <div className="col-span-4 bg-[#00243F] rounded-lg p-3">
          <h4 className="text-md mb-2 text-cyan-400">Item Name</h4>
          <ul className="space-y-1 text-sm">
            {details?.map((item: any, i: number) => (
              <li
                key={i}
                className={`px-3 py-2 text-white text-md rounded cursor-pointer ${
                  item.name === "name"
                    ? "bg-cyan-500 text-black"
                    : "hover:bg-[#0A3F5E]"
                }`}
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side Details */}
        <ItemDetailsRightside />
      </div>
    </div>
  );
}
