import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return <p> Hello React!jhihdqsdddddddqsdqs</p>;
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
