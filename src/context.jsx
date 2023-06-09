import React, { useState, useContext, useEffect } from "react";
// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import { cakesList } from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    setLoading(true);
    const filteredCakes = cakesList.filter((cake) =>
      cake.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCakes(filteredCakes);
    setLoading(false);
  }, [searchTerm]);

  // const fetchCakes = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${url}${searchTerm}`);
  //     const data = await response.json();

  //     // destructure the object property
  //     const { drinks } = data;
  //     if (drinks) {
  //       const newCakes = drinks.map((cake) => {
  //         const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
  //           cake;
  //         return {
  //           id: idDrink,
  //           name: strDrink,
  //           image: strDrinkThumb,
  //           info: strAlcoholic,
  //           glass: strGlass,
  //         };
  //       });
  //       setCakes(newCakes);
  //     } else {
  //       setCakes([]);
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   setCakes(cakes);
  //   // fetchCakes();
  // }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cakes,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
