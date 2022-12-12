import "./App.css";
import { useState } from "react";
export default function App() {
  const indianFoods = [
    { name: "Biryani", rating: "5/5" },
    { name: "Dosa", rating: "4.5/5" },
    { name: "Fish curry", rating: "5/5" },
    { name: "Chicken Butter Masala", rating: "4.5/5" }
  ];
  const chineseFoods = [
    { name: "Kung Pao Chicken", rating: "4/5" },
    { name: "Dim Sum", rating: "5/5" },
    { name: "Chowmein", rating: "5/5" },
    { name: "Dumplings", rating: "4/5" }
  ];
  const mexicanFoods = [
    { name: "Tacos", rating: "3.5/5" },
    { name: "Burritos", rating: "3/5" },
    { name: "Chilaquiles", rating: "4/5" },
    { name: "Quesadilla", rating: "5/5" }
  ];

  const cuisines = {
    Indian: indianFoods,
    Chinese: chineseFoods,
    Mexican: mexicanFoods
  };
  const [selectedOption, setSelectedOption] = useState(cuisines["Indian"]);
  function optionHandler(cuisine) {
    setSelectedOption(cuisines[cuisine]);
  }

  return (
    <div className="App">
      <h1>🍲 goodfood</h1>
      <p>Select a cuisine to see it's famous food!</p>
      <div>
        {Object.keys(cuisines).map((cuisine) => {
          return (
            <button key={cuisine} onClick={() => optionHandler(cuisine)}>
              {" "}
              {cuisine}
            </button>
          );
        })}
      </div>
      <hr />

      <ul>
        {selectedOption.map((item) => {
          return (
            <li key={item.name}>
              <div style={{ fontSize: "1.5rem" }}>{item.name}</div>
              {item.rating === "5/5" ? (
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  {item.rating}
                </div>
              ) : (
                <div style={{ fontSize: "1rem" }}>{item.rating}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
