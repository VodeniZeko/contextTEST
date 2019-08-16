import React from "react";
import LangContext from "../contexts/LangContext";

class Button extends React.Component {
	static contextType = LangContext;
	render() {
		const text = this.context === "english" ? "submit" : "voorlegen";
		return <button className="ui button primary">{text}</button>;
	}
}

export default Button;
