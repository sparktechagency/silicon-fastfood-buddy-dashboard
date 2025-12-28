import SubscriptionModal from "@/components/modal/SubscriptionModal";
import Subscription from "@/components/subscription/Subscription";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div>
      <SubscriptionModal
        trigger={
          <div className="flex justify-end">
            <Button className="bg-[#FF6D00] hover:bg-[#FF6D00] text-white px-7 h-10 mt-5 rounded-full text-lg cursor-pointer">
              Create Subscription
            </Button>
          </div>
        }
      />
      <Subscription />
    </div>
  );
}
