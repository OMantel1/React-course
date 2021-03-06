import React from 'react';
import SoundList from './SoundList';
import DrumPad from './DrumPad';
import Display from './Display';

class DrumMachine extends React.Component {
    constructor(props){
      super(props)
   
      this.state= {
        soundBank:[
          {id:"Kick 1", key:"Q", sound:"audio/Kick 1.wav"},
          {id:"Kick 2", key:"W", sound:"audio/Kick 2.wav"},
          {id:"HitHat 2", key:"E", sound:"audio/Open Hi Hat 1.wav"},
          {id:"Snare 1", key:"A", sound:"audio/Snare 1.wav"},
          {id:"Snare 2", key:"S", sound:"audio/Snare 2.wav"},
          {id:"Snare 3", key:"D", sound:"audio/Snare 3.wav"},
          {id:"Click 1", key:"Z", sound:"audio/Click 1.wav"},
          {id:"Click 2", key:"X", sound:"audio/Click 2.wav"},
          {id:"Crash 1", key:"C", sound:"audio/Crash 1.wav"},
        ],
        display: "...waiting sample"
      };
    }

    componentDidMount(){
      document.addEventListener("keydown", this.handleKeydown)
    }

    handleDisplay = (display) => this.setState({ display })
    handleKeydown = (event) => {
      let bank = this.state.soundBank.filter(x => x.key.charCodeAt() === event.keyCode);
      if (bank.length !== 0) {
        let audioSrc = document.getElementById(bank[0].key).firstElementChild;
        audioSrc.play();
        audioSrc.currentTime = 0;
        this.setState({
          display: bank[0].id
        })

      } else {
        console.log("Try another key")
        this.setState({
          display: "Try another key"
        })
      }
    }

    render(){
      return(
        <div id="drum-machine">
         <div className="drum-machine__pads">

          {this.state.soundBank.map((pad)=> 
            <DrumPad 
              id={pad.id}
              key={pad.id}
              keyName={pad.key}
              sound={pad.sound}
              handleDisplay={this.handleDisplay}
            />
         )}
         </div> 

         <div className="drum-machine__board">
            <Display text={this.state.display}/>
            <SoundList items={this.state.soundBank} title="Soundbank"/>
          </div>

        </div>
      )
    }
  }

  export default DrumMachine;