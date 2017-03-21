import React from 'react';
import { connect } from 'react-redux'
import Grid from './Grid.jsx'

var chrono = null
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      t: 0,
      speed : 3
    }

  }
  onTimeChange() {
    this.setState({ t: (this.refs.time.value) })
  }
  onPlay(){
    this.setState({t: this.state.t + 1 }) //Suite arithmétique le temps est stocké là haut
     chrono = setTimeout(this.onPlay.bind(this), 1000/this.state.speed)
    console.log("play")
  }
  onStop (){
    console.log("stop")
 clearTimeout(chrono)
  }
  onReset (){
    this.onStop()
    this.setState({t: 0})
    console.log("reset")

  }
  render () {
    return (
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <Grid t={ this.state.t } />
        <div style={{ position: "absolute", backgroundColor: "#ccc", top: 0, right: 0, width: "200px", height: "70px", padding: "10px" }}>
          <div>Temps: <input type="text" value={ this.state.t } ref="time" onChange={ () => this.onTimeChange() }/></div>
          <div>
            <button onClick = {()=> this.onPlay()}>play</button>
            <button onClick = {()=> this.onStop()}>stop</button>
            <button onClick = {()=> this.onReset()}>reset</button>
          </div>
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
