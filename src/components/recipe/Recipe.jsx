import React from "react";
import "./Recipe.scss";

export default function Recipe(props) {
  const { menus } = props;
  return (
    <>
      {menus.map((menu) => (
        <div className="recipe">
          <img src={menu.image} width="190px" alt="" />
          <h2>{menu.title}</h2>
          <p>{menu.kitchen}</p>
        </div>
      ))}
    </>
  );
}
