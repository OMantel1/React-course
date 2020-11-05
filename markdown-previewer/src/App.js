import logo from './logo.svg';
import React from 'react';
import './App.css';
import marked from 'marked';

let markdown  = "# Hello \n## write your markdown here \n```\nconst markdown = true\n``` \n>This is a **blockquote** \n1. one \n2. two \n3.tree \n\n[my portfolio](omantel1.github.io/Portfolio) link \n\n![Tux, the Linux mascot](http://lorempixel.com/output/cats-q-c-60-60-9.jpg) \n\n `code line`"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
      </header>
      <Markdown/>

    </div>
  );
}

class Markdown extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      content: markdown
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let content = marked;
    this.setState({
      content: event.target.value
    });
  }
  render(){
    return(
      <div className="markdown">
        <textarea id="editor" className="editor" onChange = {this.handleChange.bind(this)}>{this.state.content}</textarea>
        <div id="preview" className="preview" dangerouslySetInnerHTML={{__html:marked(this.state.content)}}></div>
      </div>
    )
  }
}
// class MarkdownPreview extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <div id="preview" className="preview">{this.state.content} </div>
//     )
//   }
// }
export default App;
