'use strict';

import React from 'react';
require('styles//Header.css');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <h2>I am header component</h2>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
