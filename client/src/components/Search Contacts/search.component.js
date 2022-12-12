import React from "react";
import { Input } from "@chakra-ui/react";

const Search = ({ setSearchInput }) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div style={{ margin: "30px 0" }}>
      <Input
        type="search"
        focusBorderColor="teal"
        placeholder="Search Contact..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
