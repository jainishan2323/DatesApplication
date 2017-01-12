'use strict';

import React from 'react';

require('styles//University.css');

class UniversityComponent extends React.Component {
  render() {
    return (
      <div className="university-component">
        <h3>I am university Page</h3>
      </div>
    );
  }
}

UniversityComponent.displayName = 'UniversityComponent';

// Uncomment properties you need
// UniversityComponent.propTypes = {};
// UniversityComponent.defaultProps = {};

export default UniversityComponent;
