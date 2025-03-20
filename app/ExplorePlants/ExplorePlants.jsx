import React, { useState, useEffect } from "react";
import SearchPlants from "./SearchPlants";
import PlantCard from "./PlantCard";
import { useLoaderData } from "react-router-dom";

{
  /* Search plants by name and instantly access detailed information on their healing benefits. */
}
export default function ExplorePlants() {
  // bg-top filter invert
  const plants = useLoaderData()
  //state for handling search plants
  const [searchedPlants, setSearchedPlants] = useState({});
  const [isSearched, setIsSearched] = useState(false);

  //handle searched value change
  const onSearch = async (searchedString) => {
    //set searched plants according to searched string
    setIsSearched(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/plant/${searchedString}`);
      if (response.status === 200) {
        const data = await response.json();
        setSearchedPlants(data);
      } else throw Error(`Plants not found with name ${searchedPlants}`);
    } catch (err) {
      console.error(err.message);
      setSearchedPlants([]);
    }
  }

  return (
    <section className="w-screen p-5 sm:px-10 px-5 h-[90vh] flex flex-col justify-evenly items-center">
      <SearchPlants onSearch={onSearch} clearSearch={() => { setSearchedPlants({}); setIsSearched(false) }} />
      <div className="w-full h-[85%] gap-y-14 overflow-y-scroll grid grid-cols-1 sm:grid-cols-4 justify-items-center">
        {
          isSearched ? (
            Object.keys(searchedPlants)?.length ?
              (
                <PlantCard plantDetails={searchedPlants} key={searchedPlants.plant_id} />
              )
              :
              (
                setTimeout(() => {
                  <h1 className="mx-auto my-auto">No plant Found!</h1>
                }, 200)
              )
          )
            :
            (
              Object.keys(plants).map((keyName, i) => (
                <PlantCard plantDetails={plants[keyName]} key={keyName} />
              ))
            )
        }
      </div>
    </section>
  );
}
