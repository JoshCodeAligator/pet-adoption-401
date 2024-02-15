import React from "react";

const BrowsePetsView = () => {
  return (
    <div>
      <h1>
        Cat <span className="text-orange-500">Listing</span>
      </h1>
      <div>
        <button className="bg-white text-black rounded px-4 py-2 mr-2">
          View All Animals
        </button>
        <button className="bg-white text-black rounded px-4 py-2 mr-2">
          Dogs
        </button>
        <button className="bg-white text-black rounded px-4 py-2 mr-2">
          Cats
        </button>
        <button className="bg-white text-black rounded px-4 py-2 mr-2">
          Rabbits
        </button>
        <button className="bg-white text-black rounded px-4 py-2">
          Exotic
        </button>
      </div>
      <div>
        <button className="bg-orange-500 text-white rounded px-4 py-2 mr-2">
          By Name
        </button>
        <button className="bg-orange-500 text-white rounded px-4 py-2 mr-2">
          By Age
        </button>
        <button className="bg-orange-500 text-white rounded px-4 py-2">
          By Size
        </button>
      </div>
      <div>grid of animals</div>
    </div>
  );
};

export default BrowsePetsView;
