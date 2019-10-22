import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="container">
          <div className="app-branding">
            <Link to="/" className="app-title">
              Spring Social
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
