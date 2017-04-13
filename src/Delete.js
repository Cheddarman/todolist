const TaskList = React.createClass({
	
    deleteElement:function(){
        console.log("remove");
    },

    render: function(){
    
        var displayTask  = function(task, taskIndex){
            console.log("NEW ADDED TASK"+task);
    
            return <li>
                {task}
                <button onClick= {this.deleteElement}> Delete </button>
            </li>;
        };
    
        return <div>
            {this.props.items.map((task, taskIndex) => 
                <div key={taskIndex}>
                    {task}
                    <button onClick={this.props.deleteTask} value={taskIndex}> Delete </button>
                </div>
            )}
        </div>;
    }
 });





//  const KillItem = React.createClass({
  
//   // getInitialState:function(){
//   // 	return{
//   // 		visible:{display:"block"}
//   // 	}
//   // },
  

//   deleteItem:function(){
//   	this.setState({visible:{display:"none"}})
//   }
// }

// //   askDeleteChild:function(){
// //     this.setState({visible:{display:"inline-block", marginLeft:20}})
// //   },
// //   deleteChild:function(e){
// //     deleteChild(e)
// //   },
// //   render: function () {
// //     return (
// //       <li style={{fontSize:24}}><p style={{display:"inline-block",width:"33%"}}>{(this.props.name).toUpperCase()}</p>  <RaisedButton style={{marginLeft:30}} title=":...(" onTouchTap={this.askDeleteChild} label="Remove Child"/> <RaisedButton style={this.state.visible} title=":...(" onTouchTap={(e) => this.deleteChild(this.props.id)} label="Yes"/></li>
// //     )
// //   }
// // })


// export default KillItem;