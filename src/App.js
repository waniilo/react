import React, { useState } from "react";

function App() {
  const gifts = {
    gym: ["bouteille d'eau", "shirt", "gants"],
    photographie: ["lentille", "accessoires", "imprimante photo"],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Choisis une catégorie de cadeaux :</h1>
      {Object.keys(gifts).map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          style={{
            margin: "0.5rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {category}
        </button>
      ))}

      {selectedCategory && (
        <div style={{ marginTop: "1.5rem" }}>
          <h2>Cadeaux dans la catégorie : {selectedCategory}</h2>
          <ul>
            {gifts[selectedCategory].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
