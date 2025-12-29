"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import AddRestaurantModal from "../modal/AddRestaurantModal";

type FormValues = {
  itemCategory: string;
  itemName: string;
  fast: string;
  moderate: string;
  slow: string;
  whatUsuallyHappens: string;
  whyThisMatters: string;
  moderateAbsorption: string;
  description: string;
  carbs: string;
  fat: string;
  protein: string;
  fiber: string;
};
const defaultValues = {
  itemCategory: "Breakfast",
  itemName: "Pizza",
  fast: "Fast Impact",
  moderate: "Slow digestion",
  slow: "Often spikes later",
  whatUsuallyHappens: "Sample text",
  whyThisMatters: "Sample text",
  carbs: "50g",
  fat: "50g",
  protein: "50g",
  fiber: "5g",
};

const FoodForm: React.FC = () => {
  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: defaultValues,
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <AddRestaurantModal
          trigger={
            <Button className="bg-[#FF6D00] hover:bg-[#FF6D00] text-white px-7 h-10  rounded-full text-lg cursor-pointer">
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
        {file?.name ? file?.name : "Upload CSV / PDF"}
      </div>

      <input
        ref={inputRef}
        type="file"
        id="file-upload"
        className="hidden"
        accept=".csv,.pdf"
        onChange={handleChange}
      /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Item Category */}
          <div>
            <label className="foodLevelStyle">Item Category</label>
            <Controller
              name="itemCategory"
              control={control}
              render={({ field }) => (
                <select {...field} className="foodInputStyle">
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                </select>
              )}
            />
          </div>

          {/* Item Name */}
          <div>
            <label className="foodLevelStyle">Item Name</label>
            <Controller
              name="itemName"
              control={control}
              render={({ field }) => (
                <input {...field} className="foodInputStyle" />
              )}
            />
          </div>
        </div>

        {/* Fast, Moderate, Slow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="foodLevelStyle">Fast</label>
            <Controller
              name="fast"
              control={control}
              render={({ field }) => (
                <select {...field} className="foodInputStyle">
                  <option value="Fast Impact">Fast Impact</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Slow">Slow</option>
                </select>
              )}
            />
          </div>

          <div>
            <label className="foodLevelStyle">Moderate</label>
            <Controller
              name="moderate"
              control={control}
              render={({ field }) => (
                <select {...field} className="foodInputStyle">
                  <option value="Slow digestion">Slow digestion</option>
                  <option value="Fast digestion">Fast digestion</option>
                </select>
              )}
            />
          </div>

          <div>
            <label className="foodLevelStyle">Slow</label>
            <Controller
              name="slow"
              control={control}
              render={({ field }) => (
                <select {...field} className="foodInputStyle">
                  <option value="Often spikes later">Often spikes later</option>
                  <option value="Gradual absorption">Gradual absorption</option>
                </select>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="foodLevelStyle">What usually happens</label>
            <Controller
              name="whatUsuallyHappens"
              control={control}
              render={({ field }) => (
                <textarea {...field} rows={3} className="foodInputStyle" />
              )}
            />
          </div>
          <div>
            <label className="foodLevelStyle">Why this matters?</label>
            <Controller
              name="whyThisMatters"
              control={control}
              render={({ field }) => (
                <textarea {...field} rows={3} className="foodInputStyle" />
              )}
            />
          </div>
        </div>

        {/* Digestion Profile */}
        <div className="space-y-2">
          <p className="text-white text-lg font-semibold">Digestion Profile</p>
          <div className="space-y-3">
            <label className="foodLevelStyle">Moderate Absorption</label>
            <Controller
              name="moderateAbsorption"
              control={control}
              render={({ field }) => (
                <input {...field} className="foodInputStyle" />
              )}
            />
          </div>
          {/* Digestion Profile */}
          <div>
            <label className="foodLevelStyle">Description</label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea {...field} rows={3} className="foodInputStyle" />
              )}
            />
          </div>
        </div>

        {/* Nutrients */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="foodLevelStyle">Carbs</label>
            <Controller
              name="carbs"
              control={control}
              render={({ field }) => (
                <input type="text" {...field} className="foodInputStyle" />
              )}
            />
          </div>

          <div>
            <label className="foodLevelStyle">Fat</label>
            <Controller
              name="fat"
              control={control}
              render={({ field }) => (
                <input type="text" {...field} className="foodInputStyle" />
              )}
            />
          </div>

          <div>
            <label className="foodLevelStyle">Protein</label>
            <Controller
              name="protein"
              control={control}
              render={({ field }) => (
                <input type="text" {...field} className="foodInputStyle" />
              )}
            />
          </div>

          <div>
            <label className="foodLevelStyle">Fiber</label>
            <Controller
              name="fiber"
              control={control}
              render={({ field }) => (
                <input type="text" {...field} className="foodInputStyle" />
              )}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="authButtonStyle">
          Add Now
        </button>
      </form>
    </>
  );
};

export default FoodForm;
