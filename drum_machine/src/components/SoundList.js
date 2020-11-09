import React from 'react';

class SoundList extends React.Component {
    render(){
        return(
            <div className="Bank">
                <h2>{this.props.title}</h2>
                <ul>
                    {this.props.items.map((item) => 
                        <li>
                        <p>{item.key}</p>
                        <p>{item.id}</p>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default SoundList;