import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function PricingCard() {
  return (
    <div className="  p-4">
      <div className="w-full max-w-sm  rounded-3xl shadow-2xl overflow-hidden border border-[#054768]">
        {/* Header */}
        <div className=" px-8 py-6 text-center bg-[#0a4d6e]">
          <h2 className="text-white text-xl font-semibold">Starter Plan</h2>
          <div className="mt-4">
            <span className="text-white text-5xl font-bold">$19.99</span>
            <span className="text-white/80 text-lg">/Month</span>
          </div>
        </div>

        {/* Features List */}
        <div className="px-8 py-8 space-y-5">
          <div className="flex items-start gap-3">
            <Check
              className="w-5 h-5 text-white mt-0.5 shrink-0"
              strokeWidth={3}
            />
            <p className="text-white text-sm leading-relaxed">
              Access to live heatmap data (limited region)
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="px-8 pb-8">
          <Button className="w-full bg-[#0a5570] hover:bg-[#0c6585] text-white font-semibold py-4 rounded-xl transition-colors duration-200 shadow-lg">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}
