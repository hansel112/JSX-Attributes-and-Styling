import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Rice</li>
      <li>Noodles</li>
    </ul>

    <div>
      <img
        className="food-img"
        src="https://th.bing.com/th/id/OIP.BGnKbVqAc2LUwq5akAHv3wHaE8?w=223&h=180&c=7&r=0&o=5&pid=1.7"
        alt="Bacon"
      />
      <img
        className="food-img"
        src="https://th.bing.com/th/id/OIP.DhngMj4bhij3Jxf3KKT2WAHaFj?w=266&h=200&c=7&r=0&o=5&pid=1.7"
        alt="Rice"
      />
      <img
        className="food-img"
        src="https://th.bing.com/th/id/OIP.KN9A9x6YwEVRPiDn0rIABAHaHa?w=199&h=200&c=7&r=0&o=5&pid=1.7"
        alt="Noodles"
      />
    </div>

    <h2>Random Image </h2>
    <img src={img} alt="random image" />
  </div>,
  document.getElementById("root")
);
