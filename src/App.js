import React from 'react';
import './App.css';
// import KillItem from './Delete';


const FuckingList = React.createClass({
  

  getInitialState: function() {
    return {
      list: [],
      text: '',
      visible:{display:"block"}
    }
  },



  handleChange: function(e) {
    this.setState({
      text: e.target.value
    })
  },

//

  handleSubmit: function(e){
    e.preventDefault()
    this.setState ({
      list: [this.state.text,...this.state.list],
      text: ''
    })
  },

  handleMurder: function(e){
    e.preventDefault()
    this.setState ({
      visible:{display:"none"}
    })
  },
  render(){
    return (
      <div className="mainbit">
        <div className="list">
          <h1>whatitis</h1>
          <form onSubmit={this.handleSubmit}>
            <button id="arrowButton" /><input id="whattodo" type="text" onChange={this.handleChange} placeholder="What needs to be done?" value={this.state.text} />
          </form>
          <div key="i" className="listItem">
            {this.state.list.map(function(item, i){
              return <div clasName="thing">{item} <button onClick={this.handleMurder}>{i}</button></div>
            })}
          </div>
        </div>
      </div>
    );
  }
})







export default FuckingList;