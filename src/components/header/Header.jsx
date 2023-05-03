import React from "react";
import "./Header.scss";

export default function Header(props) {
  const { header1, header2 } = props;

  return (
    <header>
      <nav>
        <a href="#">{header1}</a>
        <a href="#">{header2}</a>
      </nav>
    </header>
  );
}
