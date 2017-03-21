import React from 'react'; // import de ka librairie react
import { connect } from 'react-redux' // import de la librairie de partage de donné

class Rocket extends React.Component { //Définition de du missile en élément react.js
  constructor(props) { //Première fonction appelée lors de la création du missile
    super(props)

    this.state = { //Définition des etats de notre missile
      x: 0, // Point d'orgine du missile
      y: 0, //point d'origine du missile
      v: 100, // Vitesse du missile
      q : 75,  //sommet de la parabole
      m : 90,   // point d'atterissage
      r : 0 // orientation du missile en radian
    }
  }
  componentWillReceiveProps(nextProps) {
    //récupération de la variable de temps
    var t = parseInt(nextProps.t)


    //Hauteur maximale du missile
      var m = this.state.m
      var q = this.state.q

      // Position de la hauteur de la parabole sur l'axe des abcisses
      var p = (m)/2

      // Résolution du système pour trouver les coefficiants de la parabole
     var a = q/(p*(p-m))
     var b = -a*m
     var c = 0

     // Affichafe dans les logs des coefficiants pour contrôle
     console.log(a,b,c);
     console.log (a,b,c);


     //calcul de la position sur l'axe des abcisses
     var x = this.state.v*t/100

     //Pour calculer sur l'axe des ordonnées
     var y = (a*x*x+b*x+c)

    //Calcul de l'angle en radian du missile
    var r = (Math.atan(2*a*x+b)*Math.PI*-1/2)

    //Affichage dans les logs de l'angle en radian
    console.log(r +"rad");

    //Contrôle de cohérence : si le missile dépasse la zone définie

    // Si le missile passe sous terre alors explosion (fin de la trajectoire du missile)
    if(y < 0){
      y=0;
      x= this.state.m
    }

    // Si le missile depasse la hauteur du plan défini, alors on le met sur sa limite
    if (y > 100)
        y=100

    // Mise à jour de l'état pour actualisation du rendu
    this.setState({ x, y, r })
  }
  render () {
    return (

      <div style={{ height: "100%", width: "100%", position:'absolute' }}>
        { /* Traçage de l'axe horizontal au sommet de la parabole pour repère visuel */ }
        <div style ={{position : 'absolute', left : "0px", bottom : this.state.q + "%", width : "100%", borderTop : "1px dotted #888"}}></div>

        { /* Trçage de l'axe vertical, centre de symétrie de la parabole pour repère visuel */ }
        <div style ={{position : 'absolute', bottom : "0px", left : (this.state.m)/2 + "%", height : "100%", borderLeft : "1px dotted #888"}}></div>

        { /* Le missile, positionné sur le plan avec son orientation */ }
        <div style={{ height: "10px", width :"40px", borderRight: "2px solid blue", transform: "rotate("+this.state.r+"rad)", position:"absolute", left: this.state.x+"%", bottom : this.state.y+"%",   backgroundColor:"red"}} />
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
