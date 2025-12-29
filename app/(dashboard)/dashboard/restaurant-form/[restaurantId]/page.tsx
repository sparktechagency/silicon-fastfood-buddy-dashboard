import RestuarantForm from "@/components/restuarantList/FoodForm";

export default async function Page({
  params,
}: {
  params: { restaurantId: string };
}) {
  const { restaurantId } = await params;
  console.log("res id", restaurantId);

  return (
    <>
      <RestuarantForm />
    </>
  );
}
