import { useEffect, useState } from "react";
import axios from "axios";
import CountryFilter from "./CountryFilter";

function App() {
  const [inputCountry, setInputCountry] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const basicURL = "https://studies.cs.helsinki.fi/restcountries/api/all";
  useEffect(() => {
    axios.get(basicURL).then((res) => {
        setCountryData(res.data);
    });
  }, []);

  const handleInput = (event) => {
    setInputCountry(event.target.value);
    const filtercountry = countryData.filter((country) => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredCountries(filtercountry)
    // console.log(filtercountry)
  };
  

  return (
    <>
      <label>Find Countries </label>
      <input type="text" value={inputCountry} onChange={handleInput} />
      { inputCountry && <CountryFilter data={filteredCountries} />}
    </>
  );
}

export default App;
