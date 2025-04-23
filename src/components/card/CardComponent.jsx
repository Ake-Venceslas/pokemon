import { useStoreFavorite } from '../../store/favorite.store';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from "react-icons/fa";

export default function CardComponent({ id, image, name, type, hp, attack }) {
  const { toggleHeartIcon, selectedFavoriteIds = [] } = useStoreFavorite();

  const isSelected = selectedFavoriteIds.includes(id);

  return (
    <div className="border-2 relative w-[400px] h-[530px] overflow-hidden border-gray-200 rounded-md">
      {/* image area */}
      <Link href={`/pokemon/${id}`} className="flex overflow-hidden justify-center items-center w-full bg-gray-200">
        <img src={image} alt={`${name} image`} width="100%" height="100%" />
      </Link>

      {/* heart icon */}
      <FaHeart
        onClick={() => toggleHeartIcon(id)}
        size={25}
        color={isSelected ? "red" : "white"}
        className="absolute top-2 right-2 cursor-pointer"
      />

      {/* type badge */}
      <div className="bg-fuchsia-900 opacity-[0.9] text-white py-2 px-5 rounded-full absolute top-2 left-2 flex items-center justify-center">
        <h3 className="font-bold opacity-[1]">{type}</h3>
      </div>

      {/* content area */}
      <div className="mt-4 p-4">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="mt-2">HP: {hp}</p>
        <p>Attack: {attack}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full cursor-pointer hover:bg-blue-600 transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  );
}
