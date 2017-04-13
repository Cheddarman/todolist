import React from 'react'

export default React.createClass({
  getDefaultProps() {
    return {
        items: []
    }
  },

  render() {
    return(
    	<ul>
        {this.props.items.map((item, i)=>(
          <li key={"i" + i}>
            <input type="checkbox" id={"i" + item.id} />
            <label htmlFor={"i" + item.id}>{item.title}</label>
            <button onClick={this.murder}>X</button>
          </li>
        ))}
      </ul>
    )
  }
}) 
