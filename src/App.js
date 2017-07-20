import React from 'react';

class App extends React.Component {
  render(){
    let txt = this.props.txt
    return (
        <div>
          <h1>{txt}</h1>
          <b>Bold</b>
        </div>
      )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default App