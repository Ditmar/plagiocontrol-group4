import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home Plagio Control</h1>

      <ul>
        <li>
          <Link to="/review">Review</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/list-docs">List Docs</Link>
        </li>
      </ul>
    </div>
  );
};
