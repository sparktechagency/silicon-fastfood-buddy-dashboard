import { Search } from "lucide-react";
import Image from "next/image";

export default function RestaurantList({ data }: any) {
  return (
    <div className="w-80 bg-primary rounded-2xl p-4 text-white">
      {/* Search */}
      <div className="flex items-center gap-2  rounded-full px-3 py-2 mb-4 bg-[#00243F] border border-[#00596B] ">
        <Search size={16} className="text-gray-300" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-sm placeholder-gray-300 w-full"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold mb-3">Popular Restaurant</h3>

      {/* Restaurant List */}
      <div className="space-y-2">
        {data?.map((item: any) => (
          <div
            key={item?._id}
            className={`flex items-center gap-3 bg-[#054768] rounded-full px-3 py-2 cursor-pointer`}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.logo}`}
                width={10}
                height={10}
                alt={item.name}
                className="w-5 h-5"
              />
            </div>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
