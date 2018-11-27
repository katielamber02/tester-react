import React from 'react';
import CommentBox from 'components/CommentBox'
import {mount} from 'enzyme'
import Root from 'Root'

let wrapped
beforeEach(()=>{
	wrapped=mount(
	 <Root>
	<CommentBox/>
	</Root>
	)
})
afterEach(()=>{
	wrapped.unmount()
})
it('has a text area and a two buttons and a form',()=>{
	expect(wrapped.find('textarea').length).toEqual(1)
	expect(wrapped.find('button').length).toEqual(2)
       
})
describe('the text are',()=>{
	beforeEach(()=>{
		wrapped.find('textarea').simulate('change',{
		target:{value:'new comment'}
	})
	wrapped.update()
	})

it('has a text area that users can type in',()=>{
	expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})
it('clears the textarea after submit button is clicked',()=>{
    wrapped.find('form').simulate('submit')
	wrapped.update()
	expect(wrapped.find('textarea').prop('value')).toEqual('')
})
})
