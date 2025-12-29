import RestuarantForm from "@/components/restuarantList/FoodForm";

export default async function Page({
  params,
}: {
  params: { restaurantId: string };
}) {
  const { restaurantId } = await params;

  return (
    <>
      <RestuarantForm restaurantId={restaurantId} />
    </>
  );
}
