import React, { useNavigate, useState } from "react";
import ShowCountry from './ShowCountry'


const CountryFilter = ({ data }) => {
  const [showData, setShowData] = useState({});

  const handleShowBtn = (country) => {
      // navigate('/showcountrydata', {country: country})
      setShowData(country)
  }

  if (data.length > 10) {
    return <p>Too many mathces, specify another filter</p>;
  } else if (data.length == 1) {
    const langs = Object.values(data[0].languages);
    return (
      <div>
        <h1>{data[0].name.common}</h1>
        <p>capital {data[0].capital[0]}</p>
        <p>area {data[0].area}</p>
        <h4>languages:</h4>
        {langs.map((lang) => {
          return (
            <li key={lang} style={{ margin: "0 0 10px 25px " }}>
              {lang}
            </li>
          );
        })}
        <img
          height={"150"}
          width={"150"}
          src={data[0].flags.png}
          alt={data[0].flags.alt}
        />
      </div>
    );
  } else {
    return (
      <div>
        {data.map((country) => {
          return (
            <div style={{display: 'flex', padding: 0}} key={country.name.common}> 
              <p style={{ margin: 0, padding: 0 }}>{country.name.common}</p>
              <p style={{ margin: 0, padding: 0 }}><button onClick={() =>handleShowBtn(country)}>show</button></p>
            </div>
          );
        })}
        {Object.keys(showData).length != 0 && <ShowCountry data={showData}/>}
      </div>
    );
  }
};

export default CountryFilter;
