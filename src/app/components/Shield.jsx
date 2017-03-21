import React from 'react';
import { connect } from 'react-redux'
import FriendRocket from './FriendRocket.jsx'
class Shield extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }




  render () {
    return (
      <div style={{ height: "100%", width: "100%", position:'absolute' }}>
        <div style={{ height: "5%", width: "10%", position:'absolute',bottom:'0px', right:"0px", backgroundColor:"pink", zIndex:5}}>

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
)(Shield)
