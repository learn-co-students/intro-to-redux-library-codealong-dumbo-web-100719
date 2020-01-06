import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
}

// MAPSTATETOPROPS IS RESPONSIBLE FOR PASSING STATES FROM REDUCER TO OUR COMPONENT
const mapStateToProps = state => {
	// HERE THE ITEMS STATE IS MADE AVAILABLE TO APP
	return {
		items: state.items
	};
};

// MAPDISPATCHTOPROPS IS RESPONSIBLE FOR RUNNING OUR DISPATCHES IN A  COMPONENT
const mapDispatchToProps = dispatch => {
	return {
		// OUR ACTION INCREASE_COUNT IS RUN
		increaseCount: () => dispatch({ type: "INCREASE_COUNT" })
	};
};

// CONNECT FUNCTIONS GIVES THE APP COMPONENT ACESS TO THE STORE
// HIGHER LEVEL FUNCTION
export default connect(mapStateToProps, mapDispatchToProps)(App);
