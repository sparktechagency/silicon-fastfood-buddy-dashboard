import { myFetch } from "@/app/utils/myFetch";
import FoodForm from "../../../../components/restuarantList/FoodForm";
import RestaurantList from "@/components/restuarantList/RestuarantList";
import SingleRestaurantDetails from "@/components/restuarantList/SingleRestaurantDetails";

const Home = async ({
  searchParams,
}: {
  searchParams: { restaurant: string; category: string };
}) => {
  const res = await myFetch("/restaurants", {
    tags: ["restaurants"],
  });

  const { restaurant = "", category = "" } = await searchParams;

  const singleDetails = await myFetch(
    `/foods?restaurant=${restaurant}&category=${category}`
  );
  console.log("singleDetails", singleDetails);

  return (
    <div className="grid grid-cols-[30%_70%]">
      <div>
        <RestaurantList data={res?.data} />
      </div>
      {/* <div>
        <FoodForm />
      </div> */}
      <div>
        <SingleRestaurantDetails details={singleDetails?.data} />
      </div>
    </div>
  );
};

export default Home;
