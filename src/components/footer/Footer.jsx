import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  const { app, year } = props;

  return (
    <footer>
      <p>
        {app} {year}
      </p>
    </footer>
  );
}
