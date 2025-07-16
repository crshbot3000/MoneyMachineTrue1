const React = require('react');

function HomePage() {
  return (
    React.createElement('div', null,
      React.createElement('h1', null, '💸 Money Machine Activated'),
      React.createElement('p', null, 'Deploying clean with CommonJS compatibility.')
    )
  );
}

module.exports = HomePage;
