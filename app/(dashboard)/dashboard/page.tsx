import { myFetch } from "@/app/utils/myFetch";
import ChartBar from "@/components/overview/Chartbar";

export default async function Page() {
  const res = await myFetch("/analytics/overview");
  const chatData = await myFetch("/analytics/user-growth");

  return (
    <div className="grid grid-cols-[70%_30%] gap-4 w-full min-w-0">
      <div className="min-w-0">
        <ChartBar card={res?.data} chart={chatData?.data} />
      </div>

      <div className="min-w-0">
        <h1 className="text-lg font-semibold">Feedback</h1>
      </div>
    </div>
  );
}
