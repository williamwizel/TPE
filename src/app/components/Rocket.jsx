import React from 'react';
import { connect } from 'react-redux'

class Rocket extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
      a: 56,
      b: 20,
      c: 0,
      v: 100
    }
  }
  componentWillReceiveProps(nextProps) {
    //récupération de la variable de temps
    var t = parseInt(nextProps.t)

    //calcul de la position sur l'axe des abcisses
    var x = this.state.v*t/100

    //Pour calculer sur l'axe des ordonnées
    var y = this.state.a*x*x+this.state.b*x+this.state.c/1000

    if(y < 0)
      y=0;

    if (y > 100)
        y=100
    console.log(x, y)
    this.setState({ x, y })
  }
  render () {
    return (
      <div style={{ height: "100%", width: "100%", position:'relative' }}>
        <div style={{ height: "10px", width :"10px", position:"absolute", left: this.state.x+"%", bottom : this.state.y+"%",   backgroundColor:"red"}} />
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
)(Rocket)
