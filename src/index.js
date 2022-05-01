import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from'./data.json'
import Searching from './search.js'


class Game extends React.Component {
  render() {
    return (
      <div className="Wrapper">
        <Searching />
      </div>
    );
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
