//this is the main javascript file

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import $ from "jquery";

//components
import WeatherInput from "./components/WeatherInput";
import TemperatureBox from "./components/TemperatureBox";
import NextDayConditionsBox from "./components/NextDayConditionsBox";

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//=======================================
//					CONTAINER COMPONENT
//			this container renders all components
//=======================================

class WeatherBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			zipcode: "0",
			full_location: "Belleville, IL",
			temp: "",
			condition: "",
			search: "",
			coord: ""
		}
	}
	componentWillMount() {

		var link = "http://api.wunderground.com/api/e9f795d54303e612/conditions/q/" + "62220" + ".json";
		var ojb = this;

			$.ajax({
							url: link,
							type: 'GET',
							//see the use of context (refers back to react object)
							context: ojb,
							async: true,
							dataType: "json",
							success: function (data) {
									console.log(data)
									let current_location = data.current_observation.display_location.full;
									let temp = data.current_observation.temp_f;
									let condition = data.current_observation.weather;
									console.log(current_location);
									this.setState({full_location: current_location, temp:temp, condition:condition});
									console.log(this.state.full_location);
							}
					});
	 };

	handleZipChange(e) {
		if (this.state.search.length >= 4) {
			this.setState({search: e.target.value})
				var zipcode = this.state.search;
				console.log(this.state.seach)
				var link = "https://api.wunderground.com/api/e9f795d54303e612/conditions/q/" + zipcode + ".json";
				var full_location;
				var temp;

        // THIS GETS THE WEAHER INFO FROM API;
				$.ajax({
								url: link,
								type: 'GET',
								//see the use of context (refers back to react object)
								context: this,
								async: true,
								dataType: "json",
								success: function (data) {
										console.log(data.current_observation);
										full_location = data.current_observation.display_location.full;
										temp = data.current_observation.temp_f;
										let condition = data.current_observation.weather;
										this.setState({full_location: full_location, zipcode: zipcode, temp: temp, condition: condition});
								}
						});
		} else {
			 this.setState({search: e.target.value})
		}
	}


	handleChange(e) {
		this.setState({search: e.target.value})
	}

	render() {
	var link = "http://api.wunderground.com/api/e9f795d54303e612/conditions/q/" + this.state.zipcode + ".json";
		return (
			<div className="container">
				<h1 className="text-center">Weather for: {this.state.search}</h1>
				<h3 className="text-center">{this.state.full_location}</h3>
				<WeatherInput change={this.handleZipChange.bind(this)} onChange={this.handleChange.bind(this)} zipcode={this.state.zipcode}/>
				<div className="row">
					<div className="col-md-6">
							<TemperatureBox temp={this.state.temp} condition={this.state.condition} />
					</div>
					<div className="col-md-6">
							<NextDayConditionsBox />
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
  <WeatherBox />
  , document.querySelector('#container')
);
