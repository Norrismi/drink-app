import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Sidenav/sidenav";

class Header extends Component {
  state = {
    showNav: false
  };

  onHideNav = () => {
    this.setState({ showNav: false });
  };

  render() {
    return (
      <header>
        <Nav showNav={this.state.showNav} onHideNav={() => this.onHideNav()} />

        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center">
              Restaurant Review
            </Link>

              <i
                className="material-icons left"
                onClick={() => this.setState({ showNav: true })}
                style={{
                  cursor: "pointer",
                  paddingLeft: "10px"
                }}
              >
                menu
              </i>
       
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
