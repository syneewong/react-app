import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''}
  }
  update( e ){
    this.setState({
      a: e.target.value,
      b: e.target.value
    })
  }
  render(){
    return (
      <div>
          <input
            type="text"
            onChange={this.update.bind(this)}
          /> {this.state.a}
          <hr />
          <input
            type="text"
            onChange={this.update.bind(this)}
          /> {this.state.b}
      </div>
    )
  }
}

export default App