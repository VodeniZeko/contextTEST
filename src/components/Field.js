import React from "react";
import LangContext from "../contexts/LangContext";

class Field extends React.Component {
	static contextType = LangContext;
	render() {
		const name = this.context === "english" ? "name" : "naam";
		return (
			<div className="ui field">
				<label>{name}</label>
				<input />
			</div>
		);
	}
}

export default Field;
