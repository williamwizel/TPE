import React from 'react';
import { connect } from 'react-redux'

class Sky extends React.Component {
  render () {
    return (
      <div style={{ height: "20%", width: "100%", position:'absolute',top:'0px', left:"0px", backgroundColor:"blue", textAlign: "center", color: "#FFF" }}>
        CIEL
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
)(Sky)
