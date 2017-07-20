import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      txt: 'this is the state txt',
    }
  }
  update( e ){
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.props.txt
    return (
        <div>
          <input type="text" onChange={this.update.bind(this)}/>
        </div>
      )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}

export default App