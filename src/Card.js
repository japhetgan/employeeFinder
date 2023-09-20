import React from "react";

const Card = ({ id, name }) => {
  return (
    <div className="transition ease-in-out hover:scale-105 duration-300  bg-white max-w-xs rounded p-5 hover:drop-shadow-xl ">
      <div className="flex justify-center">
        <img
          className="w-24 h-24 rounded-full bg-amber-100 "
          src={`https://robohash.org/${name}?set=any?`}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-0 text-center">{name}</div>
        <p className="text-gray-600 text-lg font-light text-center">
          Software Engineer
        </p>
        <p className="text-gray-700 text-base mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          3 Years Experience
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          remote
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Javascript
        </span>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-indigo-500 text-white font-bold py-2 px-9 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Card;
