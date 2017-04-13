import React from 'react'

import FNForm from './FNForm'
import FNList from './FNList'

export default React.createClass({
  getInitialState() {
  	return {
  		items: []
  	}
  },
  updateList(endevor){
  	this.setState({
  		items: [...this.state.items, {
  			title: endevor
  		}]
  	})
  },
  render() {
    return(
    	<div>
    		<h1>Fuckin' do this shit</h1>
    		<FNForm updateList={this.updateList}/>
    		<FNList items={this.state.items} />
    	</div>
    )
  }
})