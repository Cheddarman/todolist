import React from 'react'

export default React.createClass({
	handleClick(e){
		e.preventDefault()
		this.props.murderItem(this.props.id)
	},
  render() {
    return(
    	<li key={this.props.id}>
        <input className='check' type="checkbox" id={this.props.id} />
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <button onClick={this.handleClick}>X</button>
      </li>
    )
  }
})