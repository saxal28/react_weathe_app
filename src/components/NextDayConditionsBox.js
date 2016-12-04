import React from 'react';

export default class NextDayConditionsBox extends React.Component{
	render() {
		return (
			<div>
			   <div className="col-xs-6">
						<div className="well text-center">
							<h1>Tuesday</h1>
							<h1>21 F</h1>
							<h3> Rainy </h3>
							<img src="http://downloadicons.net/sites/default/files/partly-cloudy-day-icon-61624.png" className="icon"/>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="well text-center">
							<h1>Wednesday</h1>
							<h1>21 F</h1>
							<h3> Rainy </h3>
							<img src="http://downloadicons.net/sites/default/files/partly-cloudy-day-icon-61624.png" className="icon"/>
						</div>
					</div>
				</div>
		)
	}
}
