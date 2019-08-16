import React from "react";
import UserCreate from "./UserCreate";
import LangContext from "../contexts/LangContext";

class App extends React.Component {
	state = { lang: "english" };

	onLangChange = lang => {
		this.setState({ lang: lang });
	};
	render() {
		return (
			<div className="ui container">
				<div>
					Select the lang:
					<i
						className="flag us"
						onClick={() => this.onLangChange("english")}
					/>
					<i
						className=" flag nl"
						onClick={() => this.onLangChange("dutch")}
					/>
				</div>
				<LangContext.Provider value={this.state.lang}>
					<UserCreate />
				</LangContext.Provider>
			</div>
		);
	}
}

export default App;
