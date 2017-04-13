import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      endevor:''
    }
  },

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateList(this.state.endevor)
    this.setState({
      endevor:''
    })
  },

  handleChange(e) {
    this.setState({
      endevor:e.target.value
    })
  },

  render() {
    return(
    	<form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="What you gotts to do, son?" value={this.state.endevor} onChange={this.handleChange} />
      </form>
    )
  }
})