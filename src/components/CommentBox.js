import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
	state={
		comment:''
	}
	
	handleChange=(ev)=>{
		this.setState({
			comment:ev.target.value
		})
	}
	handleSubmit=ev=>{
		ev.preventDefault()
		this.props.saveComment(this.state.comment)
		this.setState({
			comment:''
		})
	}
  render() {
	
	   
	   
    return (
	  <div>
      <form onSubmit={this.handleSubmit}>
	  <h4>Add comment</h4>
	  
	  <textarea value={this.state.comment} 
	            onChange={this.handleChange}/>
	  
	  <div>
	     <button>
		    submit content
		 </button>
	  </div>
      
      </form>
	     <button className="fetch-comments" onClick={this.props.fetchComments}>
		   fetch comments
		 </button>
	  
	  </div>
    );
  }
}



export default connect(null,actions)( CommentBox)