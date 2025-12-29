"use client";

import { myFetch } from "@/app/utils/myFetch";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ItemDetailsRightside({ data }: any) {
  const searchParams = useSearchParams();
  const id = searchParams.get("name") || "";
  const router = useRouter();
  const [details, setDetails] = useState(null);
  console.log("details", details);

  useEffect(() => {
    const fetchData = async () => {
      const res = await myFetch(`/foods/${id}`);
      setDetails(res?.data);
    };
    fetchData();
  }, [id]);

  console.log("data", data);

  const handleEditForm = (id: string) => {
    if (!id) {
      toast.error("Plase select item");
      return;
    }

    router.push(`/dashboard/restaurant-form/${id}`);
  };

  return (
    <div className="col-span-8 bg-[#00243F] rounded-lg p-4">
      <h3 className="text-cyan-400 text-sm mb-1">What usually happens</h3>
      <p className="text-sm mb-3">{data[0]?.fact}</p>

      <h3 className="text-cyan-400 text-sm mb-1">Why this matters?</h3>
      <p className="text-sm mb-4">{data[0]?.reason}</p>

      <h3 className="text-cyan-400 text-sm mb-1">Digestion Profile</h3>
      <p className="text-sm mb-4">
        <span className="text-cyan-400 font-medium">Moderate Absorption</span>
        <br />
        {data[0]?.absorption}
      </p>

      {/* Nutrition Box */}
      <div className="bg-[#083A5A] rounded-lg p-3 mb-4">
        <h4 className=" mb-2 text-cyan-300 text-xl">Typical Serving</h4>
        <div className="grid grid-cols-4 gap-2 ">
          {details?.typicalServing &&
            Object.entries(details.typicalServing).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="capitalize text-md">{key}</p>
                <p className="font-semibold">{value}g</p>
              </div>
            ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => handleEditForm(details?._id)}
          className="w-full bg-orange-500 hover:bg-orange-600 rounded-full py-2 text-sm font-medium"
        >
          Edit
        </button>

        <button className="w-full bg-red-500 hover:bg-red-600 rounded-full py-2 text-sm font-medium">
          Delete
        </button>
      </div>
    </div>
  );
}
