import React from "react";
import "./Search.scss";

export default function search(props) {
  const { placeholder, btn } = props;

  return (
    <section className="search_section">
      <input className="search_field" type="text" placeholder={placeholder} />
      <button className="search_btn">{btn}</button>
    </section>
  );
}
