import React from "react";
import "./Hero.scss";

export default function Hero(props) {
  const { title, find } = props;

  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{find}</p>
    </section>
  );
}
