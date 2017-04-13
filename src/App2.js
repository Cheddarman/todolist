import React from 'react'

import FNForm from './FNForm'
import FNList from './FNList'
import uuid from 'uuid'

export default React.createClass({
  getInitialState() {
  	return {
  		items: []
  	}
  },
  updateList(endevor){
  	this.setState({
  		items: [...this.state.items, {
  			title: endevor,
  			id: "id" + uuid()
  		}]
  	})
  },
  murderItem(id){
  	this.setState({
  		items: this.state.items.filter(item=>{
  			return item.id !== id
  		})
  	})
  },
  render() {
    return(
    	<div>
    		<h1>Fuckin' do this shit</h1>
    		<FNForm updateList={this.updateList}/>
    		<FNList murderItem={this.murderItem} items={this.state.items} />
    	</div>
    )
  }
})