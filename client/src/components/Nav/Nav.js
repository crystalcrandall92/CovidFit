import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Covid-Fit
      </a>
      <a className="navbar-brand" href="/fitness">
        Fitness
      </a>
      <a className="navbar-brand" href="/nutrition">
        Nutrition
      </a>
      <a className="navbar-brand" href="/signup">
        Sign-up
      </a>
      <a className="navbar-brand" href="/signin">
        Sign-in
      </a>
    </nav>
  );
}

export default Nav;
