import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from'./data.json'
import Searching from './search.js'
import AppTable from './table.js'


class Game extends React.Component {
  render() {
    return (
      <div className="Wrapper">
        {/*<Searching />*/}
        <AppTable />
      </div>
    );
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
