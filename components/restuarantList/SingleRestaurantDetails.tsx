"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Categoryes from "./Categoryes";
import ItemDetailsRightside from "./ItemDetailsRightside";
import ItemName from "./ItemName";

export default function SingleRestaurantDetails({ details }: any) {
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
      {details?.length > 0 ? (
        <div className="grid grid-cols-12 gap-4">
          {/* Left List */}
          <ItemName details={details} />

          {/* Right side Details */}
          <ItemDetailsRightside data={details} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px] bg-amber-500 text-xl">
          <p className="bg-red-800 text-green-700">
            No Data Found Plase Add New Item
          </p>
        </div>
      )}
    </div>
  );
}
