//========================
//   WEATHER INPUT
//  gets zipcode input
//========================

import React from "react"

export default class WeatherInput extends React.Component {
	render() {
		return (
			<div id="search-container">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="enter 5-digit zip code" id="search-input"
						onChange={ this.props.change } />
      		<span className="input-group-btn">
        		<button className="btn btn-danger" type="button" onClick={this.props.change} >Go!</button>
      		</span>
				</div>
			</div>
		)
	}
}
