import "./searchform.scss";
import { useGlobalContext } from "../../context";
import { useEffect, useRef } from "react";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCake = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cake</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCake}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
