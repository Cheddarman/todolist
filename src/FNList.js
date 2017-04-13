import React from 'react'
import FNListItem from './FNListItem'

export default React.createClass({
  getDefaultProps() {
    return {
        items: []
        
    }
  },

  render() {
    return(
    	<ul>
        {this.props.items.map((item)=>(
          <FNListItem murderItem={this.props.murderItem} {...item} />
        ))}
      </ul>
    )
  }
}) 
