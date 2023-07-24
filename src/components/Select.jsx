import React, { useEffect, useState } from "react";

const Select = () => {
  const data = {
    Punjab: ["Amritsar", "Ludhiana", "Mohali"],
    Himachal: ["Mandi", "Una", "Bilaspur"],
    "Utter Pardes": ["Lucknow", "Varanasi", "Saharanpur"],
  };

  return (
    <div>
      <div>
        <h2>Select a State:</h2>

        {Object.keys(data).map((state) => (
          <select>
            <option>{state}</option> <br />
            {data[state].map((city) => (
              <option
                onClick={() => alert(`You have selected ${city} in ${state}`)}
                key={city}
              >
                {city}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

export default Select;
