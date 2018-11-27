import React, { Component } from 'react';
import {connect} from 'react-redux'

class CommentList extends Component {
	renderComments(){
		return this.props.comments.map(comment=>{
			return <li key={comment}>{comment}</li>
		})
	}
  render() {
	console.log(this.props.comments)
	   
	   
    return (
      <div >
	      <h4>CommentList</h4>
	      <ul>
	        {this.renderComments()}
	      </ul>
      </div>
    );
  }
}
const mapStateToProps=state=>{
	return{
		comments:state.comments
	}
}

export default connect(mapStateToProps)(CommentList);