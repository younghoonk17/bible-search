import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', apiResult: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
      <h3>Bible Search 1.0</h3>

      <form onSubmit={this.handleSubmit}>
          <label>
            Search for a verse?
          </label>
          <br></br>
          <input
            id="new-todo"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button>
            Search
          </button>
      </form>

      {this.state.apiResult ? <ul><li>{this.state.apiResult}</li></ul> : null}
    
      </header>
    </div>
    )
  }
    
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) { 
    this.setState({ value:'', apiResult: this.state.value });
    console.log(this.state.value);
    event.preventDefault();
  }

}

export default App;
