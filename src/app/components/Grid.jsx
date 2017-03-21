import React from 'react';
import { connect } from 'react-redux'
import Sky from  "./Sky.jsx"
import Village from "./Village.jsx"
import Rocket from "./Rocket.jsx"
import Shield from './Shield.jsx'



class Grid extends React.Component {
  render () {
    return (
      <div style={{ height: "100%", width: "100%", position:'relative', borderBottom: "4px brown solid" }}>
        <Sky />
        <Village/>
        <Rocket t={ this.props.t } />
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
)(Grid)
