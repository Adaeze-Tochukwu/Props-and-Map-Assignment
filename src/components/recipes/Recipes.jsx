import React from "react";
import "./Recipes.scss";

export default function Recipes({ children }) {
  return (<section className="recipe_section">{children}</section>);
}
