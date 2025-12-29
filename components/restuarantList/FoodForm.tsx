"use client";

import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddRestaurantModal from "../modal/AddRestaurantModal";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

type FormValues = {
  name: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Snacks" | "";
  impactSpeed: "Fast" | "Moderate" | "Slow" | "";
  digestionSpeed: "Fast" | "Moderate" | "Slow" | "";
  spike: "Often spikes" | "Spikes later" | "Often spikes later" | "";
  fact: string;
  reason: string;
  absorption: string;
  description: string;
  typicalServing: {
    carbs: string;
    fat: string;
    protein: string;
    fiber: string;
  };
};

const RestuarantForm: React.FC = () => {
  // const inputRef = useRef<HTMLInputElement | null>(null);
  // const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      category: "",
      impactSpeed: "",
      digestionSpeed: "",
      spike: "",
      fact: "",
      reason: "",
      absorption: "",
      description: "",
      typicalServing: {
        carbs: "",
        fat: "",
        protein: "",
        fiber: "",
      },
    },
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const file = e.target.files[0];
  //     setFile(file);
  //   }
  // };
  // const handleClick = () => {
  //   if (inputRef.current) {
  //     inputRef.current.click();
  //   }
  // };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
    <>
      {/* Add Restaurant */}
      <div className="flex justify-end mb-4">
        <AddRestaurantModal
          trigger={
            <Button className="bg-[#FF6D00] hover:bg-[#FF6D00] text-white px-7 h-10 rounded-full text-lg">
              <Plus /> Add Restaurant
            </Button>
          }
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* <div
          className="border-2 border-dashed border-[#0097B5] flex items-center justify-center p-12 text-white"
          onClick={handleClick}
        >
          {file?.name ? file?.name : "Upload CSV / PDF"}{" "}
        </div>{" "}
        <input
          ref={inputRef}
          type="file"
          id="file-upload"
          className="hidden"
          accept=".csv,.pdf"
          onChange={handleChange}
        /> */}
        {/* Category & Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Item Category</Label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Breakfast">Breakfast</SelectItem>
                    <SelectItem value="Lunch">Lunch</SelectItem>
                    <SelectItem value="Dinner">Dinner</SelectItem>
                    <SelectItem value="Snacks">Snacks</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label>Item Name</Label>
            <Input
              {...register("name", { required: "Food name is required" })}
              placeholder="Type food name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        </div>
        {/* Impact & Digestion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>Impact Speed</Label>
            <Controller
              name="impactSpeed"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select impact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fast">Fast</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Slow">Slow</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label>Digestion Speed</Label>
            <Controller
              name="digestionSpeed"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select digestion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fast">Fast</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Slow">Slow</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label>Spikes Info</Label>
            <Controller
              name="spike"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select digestion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Often spikes">Often spikes</SelectItem>
                    <SelectItem value="Spikes later">Spikes later</SelectItem>
                    <SelectItem value="Often spikes later">
                      Often spikes later
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        {/* Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>What usually happens</Label>
            <Controller
              name="fact"
              control={control}
              render={({ field }) => (
                <Textarea {...field} rows={3} placeholder="Type here" />
              )}
            />
          </div>

          <div>
            <Label>Why this matters?</Label>
            <Controller
              name="reason"
              control={control}
              render={({ field }) => (
                <Textarea {...field} rows={3} placeholder="Type here" />
              )}
            />
          </div>
        </div>
        {/* Digestion Profile */}
        <div className="space-y-3">
          <Label>Absorption</Label>
          <Input
            {...register("absorption")}
            placeholder="e.g. Moderate absorption"
          />

          <Label>Description</Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Textarea {...field} rows={3} />}
          />
        </div>
        {/* Nutrients */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(["carbs", "fat", "protein", "fiber"] as const).map((item) => (
            <div key={item}>
              <Label className="capitalize">{item}</Label>
              <Controller
                name={`typicalServing.${item}`}
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Enter grams" />
                )}
              />
            </div>
          ))}
        </div>
        {/* Submit */}
        <button type="submit" className="authButtonStyle">
          Add Now
        </button>
      </form>
    </>
  );
};

export default RestuarantForm;
