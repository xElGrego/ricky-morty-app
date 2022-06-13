import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { nombre } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-uppercase" href="/">
            {nombre}
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
