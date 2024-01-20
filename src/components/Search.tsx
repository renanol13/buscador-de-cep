type searchProps = {
  handleSearch: (cep: string) => Promise<void>;
};


import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { maskCep } from "../services/maskCep";

import styles from "./search.module.css";

function Search({ handleSearch }: searchProps) {
  const [search, setSearch] = useState<string>("");

  const clickCep = () => {
      handleSearch(search);
      setSearch("");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      clickCep();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 9) {
      const newValueCep = maskCep(value)
      setSearch(newValueCep);  
    }
  };

  return (
    <div className={styles.boxSearch}>
      <input
        type="text"
        onChange={(event) => handleChange(event)}
        value={search}
        placeholder="Informe o cep..."
        onKeyDown={(event) => handleKeyDown(event)}
      />
      <button onClick={() => clickCep()}>
        <RiSearchLine />
      </button>
    </div>
  );
}

export default Search;
