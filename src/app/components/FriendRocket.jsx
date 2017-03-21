import React from 'react';
import { connect } from 'react-redux'

class FriendRocket extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0, // Point d'orgine du missile
      y: 0, //point d'origine du missile
      v: 100,
      q : 75,  //sommet de la parabole
      x_end : 90,   // point d'atterissage
      r : 0, // orientation du missile en radian
      x_start : 89, // //position x etat initial
    }
  }
  componentWillReceiveProps(nextProps) {
    //récupération de la variable de temps
    var t = parseInt(nextProps.t)
console.log("FriendRocket t = ", t)

    //Hauteur maximale du missile
      var x_end = this.state.x_end
      var q = this.state.q
      var p = ((x_end)-(x_start))/2

     var a = q/(p*(p-x_end))
     var b = -a*x_end
     var c = 0
console.log(a,b,c);

     //calcul de la position sur l'axe des abcisses
     var x_s = this.state.v*t/100

     //Pour calculer sur l'axe des ordonnées
     var y_s = (a*x*x+b*x+c)

    //Calcul de l'angle
    var r = (Math.atan(2*a*x+b)*Math.PI*-1/2)

    console.log(r +"rad");

    if(y < 0){
      y=0;
      x= this.state.x_end

    }



    if (y > 100)
        y=100
    console.log(x, y, m, q)
    this.setState({ x, y, r })
  }
  render () {
    return (
      <div style={{ height: "100%", width: "100%", position:'absolute' }}>
        <div style ={{position : 'absolute', left : "0px", bottom : this.state.q + "%", width : "100%", borderTop : "1px dotted #888"}}></div>
        <div style ={{position : 'absolute', bottom : "0px", left : (this.state.x_end)/2 + "%", height : "100%", borderLeft : "1px dotted #888"}}></div>
        <div style={{ height: "10px", width :"40px", borderRight: "2px solid blue", transform: "rotate("+this.state.r+"rad)", position:"absolute", left: this.state.x+"%", bottom : this.state.y+"%",   backgroundColor:"blue"}} />
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
)(FriendRocket)
