import React, { useState } from "react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Trigger parent update
  };

  return (
    <section className="flex justify-center mt-2 mb-4">
      <div className="relative w-full md:w-2/3">
        <input
          type="text"
          placeholder="Search for topics..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm bg-white text-gray-700"
        />
      </div>
    </section>
  );
};

export default SearchBox;
