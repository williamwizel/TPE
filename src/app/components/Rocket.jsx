import React from 'react'; // import de ka librairie react
import { connect } from 'react-redux' // import de la librairie de partage de donné

var img_explosion = require("../../img/explosion.png")
class Rocket extends React.Component { //Définition de du missile en élément react.js
  constructor(props) { //Première fonction appelée lors de la création du missile
    super(props)

    this.state = { //Définition des etats de notre missile
      x: 0, // Point d'orgine du missile
      y: 0, //point d'origine du missile
      v: 100, // Vitesse du missile
      q : 75,  //sommet de la parabole
      m : 90,   // point d'atterissage
      r : 0, // orientation du missile en radian,
      isExplosed: false
    }
  }
  componentWillReceiveProps(nextProps) {
    //récupération de la variable de temps
    var t = parseInt(nextProps.t)

    // On récupère l'état du missile
    var isExplosed = this.state.isExplosed

    // On vérifie si le missile n'a pas explosé, si oui on arrète l'algo
    if(isExplosed)
      return;

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
      isExplosed = true // on déclare le missile comme explosé
    }

    // Si le missile depasse la hauteur du plan défini, alors on le met sur sa limite
    if (y > 100)
        y=100

    // Mise à jour de l'état pour actualisation du rendu
    this.setState({ x, y, r, isExplosed })
  }
  render () {
    return (

      <div style={{ height: "100%", width: "100%", position:'absolute' }}>
        { /* Traçage de l'axe horizontal au sommet de la parabole pour repère visuel */ }
        <div style ={{position : 'absolute', left : "0px", bottom : this.state.q + "%", width : "100%", borderTop : "1px dotted #888"}}></div>

        { /* Trçage de l'axe vertical, centre de symétrie de la parabole pour repère visuel */ }
        <div style ={{position : 'absolute', bottom : "0px", left : (this.state.m)/2 + "%", height : "100%", borderLeft : "1px dotted #888"}}></div>

        { /* Le missile, positionné sur le plan avec son orientation */ }
        <div style={{ height: "20px", width :"20px", position:"absolute", left: this.state.x+"%", bottom : this.state.y+"%",   backgroundColor:"red"}} />

      { /* Condition d'affichage pour savoir si l'état du missile est explosé => image sinon on indique la cible */ }
        { this.state.isExplosed ? (
          <div style={{ height: "60px", width :"80px", marginLeft: "-40px", position:"absolute", left: this.state.m+"%", bottom : "0%", textAlign: "center", color: "red" }}>
            <img src={ img_explosion } width= "80px" />
          </div>
        ) : (
          <div style={{ height: "20px", width :"50px", marginLeft: "-20px", position:"absolute", left: this.state.m+"%", bottom : "0%", border: "1px dashed #000", textAlign: "center", color: "red" }}>CIBLE</div>
        ) }
        
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
