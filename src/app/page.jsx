"use client";
import NavbarComponent from "../components/navbar/NavbarComponent";
import CardComponent from "../components/card/CardComponent";
import { Pokemons, Types } from "../utils/data";
import { useState } from "react";

const Page = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState(null);

    // Filter logic
    const searchResult = Pokemons.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType ? item.type?.toLowerCase() === selectedType.toLowerCase() : true;
        return matchesSearch && matchesType;
    });

    return (
        <>
            <NavbarComponent />
            {/* Search bar */}
            <div className="flex pt-20 justify-center items-center gap-3">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search for a Pokemon..."
                    className="m-5 bg-gray-200 py-3 px-5 rounded-lg outline-none"
                />
                <button
                    onClick={() => setSelectedType(null)}
                    className="text-[14px] bg-fuchsia-900 text-white py-2 px-5 rounded-full flex items-center justify-center cursor-pointer"
                >
                    All
                </button>
                {Types.map((type) => (
                    <button
                        onClick={() => setSelectedType(type.name)}
                        key={type.name}
                        className="text-[14px] bg-fuchsia-900 text-white py-2 px-5 rounded-full flex items-center justify-center cursor-pointer"
                    >
                        {type.name}
                    </button>
                ))}
            </div>

            {/* Card display */}
            <div className="flex flex-wrap gap-5 p-5 justify-center items-center h-[100%]">
                {searchResult.map((item) => (
                    <CardComponent
                        id={item.id}
                        image={item.image}
                        type={item.type}
                        name={item.name}
                        key={item.id}
                    />
                ))}
            </div>
        </>
    );
};

export default Page;