import React, { Component } from "react";
import Field from "./Field";


export default class Game extends Component {

	render(){
		return <div className="game-container">
			<div className="game">
				<Field />
				<Field />
				<Field />
				<Field />
				<Field />
				<Field />
				<Field />
				<Field />
				<Field />
			</div>
		</div>
	}
}