import React from 'react';
import { connect } from 'react-redux'

class Village extends React.Component {
  render () {
    return (
      <div style={{ height: "10%", width: "20%", position:'absolute',bottom:'0px', right:"0px", backgroundColor:"yellow"}}>

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
)(Village)
