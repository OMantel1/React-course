import React from 'react';

class DrumPad extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(event){
        this.audio.play()
        console.log(this.audio)
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id)
      }

    render(){
        return(
            <button className="drum-pad" id={this.props.keyName} onClick={this.handleClick}>
                {this.props.keyName}
                <audio 
                    ref = {ref => this.audio = ref}
                    className='clip' 
                    id={this.props.keyName} 
                    src={this.props.sound} >
                </audio>
            </button>

        )
    }
}

export default DrumPad;