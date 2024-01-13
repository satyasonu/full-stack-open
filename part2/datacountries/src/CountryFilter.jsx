import React from "react";

const CountryFilter = ({ data }) => {
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
          return <li key={lang} style={{margin: '0 0 10px 25px '}}>{lang}</li>;
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
          return <p key={country.name.common}>{country.name.common}</p>;
        })}
      </div>
    );
  }
};

export default CountryFilter;
