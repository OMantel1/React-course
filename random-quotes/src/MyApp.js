import './MyApp.css';
import React from 'react';
import { quoteList } from './data'

function MyApp(props) {
    return ( 
    <Quotes />
)
};

class Quotes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ...quoteList[0],
            animationClass: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){

        let randomNumber = Math.floor(Math.random() * Math.floor(quoteList.length));
        let newQuote = quoteList[randomNumber];

        this.setState({
            ...newQuote,
            animationClass: true,
        })        
        setTimeout(()=> {
            this.setState({
                animationClass: false
            })
        }, 200)
    }
    render() {
      return (
        <div id="MyApp" className="container">
            <h1 className="title">Random Quotes</h1>
            <div id = "quote-box" className="quote-box"> 
                <p id="text" className={'text ' + (this.state.animationClass? "animation-opacity" : "") } >"{this.state.quote}"</p>
                <p id="author" className={'author ' + (this.state.animationClass? "animation-opacity" : "") }> <i>{this.state.author}</i> </p>    
                <div className="links">
                    <Share />
                    <button  id="new-quote" className="new-quote  btn" onClick={this.handleClick}>New quote</button>
                </div>
            </div>
        </div>
      );
    }
  }


function Share(props){
    return(
        <a href="twitter.com/intent/tweet" id="tweet-quote" className="tweet-quote btn">Tweet this quote</a>
    )
}
export default MyApp;

