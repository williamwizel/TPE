import React from 'react';
import { connect } from 'react-redux'
import Grid from './Grid.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      t: 0
    }
  }
  onTimeChange() {
    this.setState({ t: (this.refs.time.value) })
  }
  render () {
    return (
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <Grid t={ this.state.t } />
        <div style={{ position: "absolute", backgroundColor: "#ccc", top: 0, right: 0, width: "200px", height: "200px" }}>
          Temps: <input type="text" value={ this.state.t } ref="time" onChange={ () => this.onTimeChange() }/>
        </div>
      </div>
    );
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
