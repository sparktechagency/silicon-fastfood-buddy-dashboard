import { myFetch } from "@/app/utils/myFetch";
import FoodForm from "../../../../components/restuarantList/FoodForm";
import RestaurantList from "@/components/restuarantList/RestuarantList";

const Home = async () => {
  const res = await myFetch("/restaurants", {
    tags: ["restaurants"],
  });
  return (
    <div className="grid grid-cols-[30%_70%]">
      <div>
        <RestaurantList data={res?.data} />
      </div>
      <div>
        <FoodForm />
      </div>
    </div>
  );
};

export default Home;
