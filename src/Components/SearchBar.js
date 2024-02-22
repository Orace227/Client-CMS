import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [allPackages, setAllPackages] = useState([]);
  const [filteredOptionsArr, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const getPackages = async () => {
    try {
      const response = await axios.get("/getPackages?isShown=true&isLive=true");
      setAllPackages(response.data.allPackages);
      setFilteredOptions(response.data.allPackages);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredOptions = allPackages.filter((option) =>
      option?.packageName?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
    setSelectedOption("");
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setSearchTerm(option.packageName);
    setIsDropdownOpen(false);
  };

  const onSearch = () => {
    // console.log("Selected option:", selectedOption);
    // Add your custom search logic here
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="text"
          className="p-2 ml-4 mt-[2px] rounded-lg"
          placeholder="search"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && (
          <ul className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg">
            {filteredOptionsArr.map((option, index) => (
              <Link
                key={index}
                to={`https://blueescapeholidays.com/Package/${option.PackageId}`}
              >
                <li
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSelectOption(option)}
                >
                  {option.packageName}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <button
        className="ml-2 -mt-1 border p-2 rounded-lg bg-white"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
