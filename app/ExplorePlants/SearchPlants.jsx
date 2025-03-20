import { Input } from "@/components/ui/input";
import { Bird, Leaf, Rabbit, Turtle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";

export default function SearchPlants({ onSearch, clearSearch }) {
  const [searchedString, setSearchedString] = useState("");

  return (
    <fieldset className="w-[95%] h-[20%] flex justify-center items-center p-4 glassmorphism rounded-lg mb-5 border-none">
      <legend className="-ml-1 px-3 text-base tracking-wide font-medium text-white">
        Explore the Healing Power of Plants and Herbs
      </legend>
      <div className="w-full sm:h-[20%] flex items-center justify-between">
        <div className="w-full sm:w-[400px] flex items-center relative">
          <Input
            className="w-full mr-5 glassmorphism rounded-full capitalize text-sm py-3 text-white px-4 shadow-lg outline-none focus-visible:ring-offset-0 focus-visible:ring-0 border-none"
            placeholder="Search your herbal plant by name!"
            value={searchedString}
            onChange={(event) => setSearchedString(event.target.value)}
          />
          {
            searchedString.length ?
            <button
              className="absolute right-[120px]"
              onClick={() => { setSearchedString(""); clearSearch() }}
            >
              <X className="text-white border-none w-4 h-4" />
            </button> : ""
          }
          <Button variant="secondary" className="btn-gradient text-black px-5 absolute right-1 rounded-full"
            onClick={() => onSearch(searchedString)}
          >
            <Leaf className="w-4 h-4 mr-2" /> Search
          </Button>
        </div>
      </div>
    </fieldset>
  );
}
