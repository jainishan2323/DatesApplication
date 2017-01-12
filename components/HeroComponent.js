'use strict';

import React from 'react';

require('styles//Hero.css');

class HeroComponent extends React.Component {
  render() {
    return (
      <div className="hero-component">
        I am hero
      </div>
    );
  }
}

HeroComponent.displayName = 'HeroComponent';

// Uncomment properties you need
// HeroComponent.propTypes = {};
// HeroComponent.defaultProps = {};

export default HeroComponent;
