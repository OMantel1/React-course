import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
        <MarkdownEditor/>
        <MarkdownPreview />
      </header>

    </div>
  );
}

class MarkdownEditor extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div><h2>My editor</h2></div>
    )
  }
}
class MarkdownPreview extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div><p>My preview</p></div>
    )
  }
}
export default App;
