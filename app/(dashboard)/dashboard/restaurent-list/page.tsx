import { myFetch } from "@/app/utils/myFetch";
import FoodForm from "../../../../components/restuarantList/FoodForm";
import RestaurantList from "@/components/restuarantList/RestuarantList";
import SingleRestaurantDetails from "@/components/restuarantList/SingleRestaurantDetails";
import Link from "next/link";

const Home = async ({
  searchParams,
}: {
  searchParams: { restaurant: string; category: string };
}) => {
  const res = await myFetch("/restaurants", {
    tags: ["restaurants"],
  });

  const { restaurant = "", category = "" } = await searchParams;
  const params = new URLSearchParams();

  if (restaurant) params.append("restaurant", restaurant);
  if (category) {
    params.append("category", category);
  }

  const singleDetails = await myFetch(`/foods?${params.toString()}`);
  console.log("single", singleDetails);

  return (
    <div className="grid grid-cols-[30%_70%]">
      <div>
        <RestaurantList data={res?.data} />
      </div>
      <div>
        <SingleRestaurantDetails details={singleDetails?.data} />
      </div>
      {/* {singleDetails?.data?.length > 0 ? (
        <div>
          <SingleRestaurantDetails details={singleDetails?.data} />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Link href={`/dashboard/restaurant-form/${restaurant}`}>
            <button className="text-xl p-3 border rounded-3xl text-white cursor-pointer">
              Add Food Item
            </button>
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default Home;
