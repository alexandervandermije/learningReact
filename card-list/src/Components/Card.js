import React, { Component } from 'react';

class Card extends Component
{
	render()
	{
		return (
			<div>
				<h2>{this.props.title}</h2>
			</div>
		);
	}
}
export default Card;