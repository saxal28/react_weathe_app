import React from "react"

export default class TemperatureBox extends React.Component {
	render() {
		return (
			<div className="well text-center">
				<h1>Today</h1>
				<h1>{this.props.temp} F</h1>
				<h3>{this.props.condition}</h3>
				<img src="http://downloadicons.net/sites/default/files/partly-cloudy-day-icon-61624.png" className="icon"/>
			</div>
		)
	}
}
