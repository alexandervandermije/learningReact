import React, { Component } from 'react';

class Counter extends Component {
    constructor(props)
    {
    	super(props);
    	this.state = {
    		count: 5
    	}
    	this.changeCounter = this.changeCounter.bind(this);
    }
    changeCounter(value){
    	if(value == 'plus')
    	{
    		this.setState({
	      		count: this.state.count + 1
	    	});
    	}
    	else
    	{
    		this.setState({
    			count: this.state.count -1
    		})
    	}
	    
	}
    render() {
        return (
        <div>
        	<h1>{this.props.title}</h1>
        	<p>the count is: {this.state.count}</p>
        	<button type="button" onClick={() => this.changeCounter('plus')}>Increase Counter</button>
        	<button type="button" onClick={() => this.changeCounter('min')}>Decrease Counter</button>
        </div>
      );
    }
}

export default Counter;