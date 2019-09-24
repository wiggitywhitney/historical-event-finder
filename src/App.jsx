import React from 'react';
import SearchBar from './SearchBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {}
    this.searchBarSubmit = this.searchBarSubmit.bind(this);
  };

  searchBarSubmit(event) {
    let form = event.target;
    console.log(form.elements.searchField.value)
    return form.elements.searchField.value;
  };

  render () {
    return (
      <div className="content">
        <div className="container">
          <div className="section">
            <div id="searchBar">
              <SearchBar searchBarSubmit={this.searchBarSubmit}/>
            </div>
          </div>
        </div>
      </div>
      
    )
  }

};



export default App;