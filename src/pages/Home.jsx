import React from "react";
import DodajNoviTrening from "../components/DodajNoviTrening";
import FilterTreninga from "../components/FilterTreninga";

function Home() {
  const [btnAddNewTraining, setBtnAddNewTraining] = React.useState(false);
  const [btnAddFilter, setBtnAddFilter] = React.useState(false);

  return (
    <div className="felx-col mx-auto w-[70%]">
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl my-10 mx-10"
        onClick={() => setBtnAddNewTraining(!btnAddNewTraining)}
      >
        Dodaj novi trening
      </button>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl my-10 mx-10"
        onClick={() => setBtnAddFilter(!btnAddFilter)}
      >
        Pretrazi trening
      </button>

      {btnAddNewTraining && <DodajNoviTrening />}

      {btnAddFilter && <FilterTreninga />}
    </div>
  );
}

export default Home;
