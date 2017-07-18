import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component
{
	render()
	{
		return (
			<div>
				<h1>Card list</h1>
				<Card title="Card 1"/>
				<Card title="Card 2" />
			</div>
		);
	}
}
export default CardList;