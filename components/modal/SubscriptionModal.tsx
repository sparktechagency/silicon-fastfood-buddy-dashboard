"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { myFetch } from "@/app/utils/myFetch";
import { toast } from "sonner";

type Inputs = {
  name: string;
  price: string;

  androidProductId: string;
  iosProductId: string;
  features: { value: string }[];
};

export default function SubscriptionModal({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      price: "",
      androidProductId: "",
      iosProductId: "",
      features: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const features = data?.features?.map((item) => item.value);
    console.log("data", data);

    const payload = {
      name: data?.name,
      price: Number(data.price),
      features: features,
      androidProductId: data.androidProductId,
      iosProductId: data.iosProductId,
    };

    try {
      const res = await myFetch("/packages/create", {
        method: "POST",
        body: payload,
      });

      console.log("res", res);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Occured try");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-[#00596B] text-white rounded-xl w-full min-w-xl mx-auto   gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input {...register("name")} type="text" placeholder="Enter name" />
          </div>

          <div>
            <Label>Price</Label>
            <Input {...register("price")} placeholder="Enter price" />
          </div>

          <div>
            <Label>AndroidProduct Id</Label>
            <Input
              {...register("androidProductId")}
              type="text"
              placeholder="Enter androidProduct Id"
            />
          </div>

          <div>
            <Label>IosProduct Id</Label>
            <Input
              {...register("iosProductId")}
              placeholder="Enter iosProduct Id"
            />
          </div>

          <div className="flex justify-between">
            <Label>Features</Label>

            <button
              type="button"
              onClick={() => append({ value: "" })}
              className="border p-1 rounded-full cursor-pointer"
            >
              <Plus />
            </button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-center">
              <Input
                {...register(`features.${index}.value`)}
                placeholder="Enter feature"
              />

              <button
                type="button"
                onClick={() => remove(index)}
                className="p-1 rounded-full cursor-pointer"
              >
                <Minus />
              </button>
            </div>
          ))}

          <Button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded w-full "
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
