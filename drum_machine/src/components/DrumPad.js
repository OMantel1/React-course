import React from 'react';

class DrumPad extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick(event){
        let elementIdClicked = event.target.querySelector("audio").id
        let audioSrc = document.getElementById(elementIdClicked)
        audioSrc.play()
        audioSrc.currentTime = 0;
        this.props.handleDisplay(this.props.id)

      }
    render(){
        return(
            <button className="drum-pad" onClick={this.handleClick}>
                {this.props.keyName}
                <audio 
                    className='clip' 
                    id={this.props.id} 
                    src={this.props.sound} >
                </audio>
            </button>

        )
    }
}

export default DrumPad;