import React from 'react';

class SoundList extends React.Component {
    render(){
        return(
            <li>
                <p>{this.props.item.key}</p>
                <p>{this.props.id}</p>
            </li>
        )
    }
}

export default SoundList;