import React from 'React'
import {mount} from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(()=>{
	moxios.install()
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
		status:200,
		response:[{name:'Fetch #1'},{name:'Fetch #2'}]
	})
})
afterEach(()=>{
	moxios.uninstall()
})



it('can fetch a list of comments and dipslay li',(done)=>{
	//attempt to show the entire app
	
	
	const wrapped=mount(
	  <Root>
	     <App/>
	  </Root>
	)
	//find the fetchComments button and click it
	wrapped.find('.fetch-comments').simulate('click')
	
	
	//intruduce a TINY little pause
	moxios.wait(()=>{
		wrapped.update()
		expect(wrapped.find('li').length).toEqual(2)
		done()
		wrapped.unmount()
	})
	
	//expect to find a list of comments
	//expect(wrapped.find('li').length).toEqual(2)
	
})