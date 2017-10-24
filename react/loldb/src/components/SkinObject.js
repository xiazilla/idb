import React, { Component } from 'react';


class SkinObject extends Component {

	render () {

		let url = ("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/").concat(this.props.name + "_" + this.props.index + ".jpg");
		let name = this.props.thisSkin.name;
		console.log(url);

		return (
			<div className="col-sm-3 ">
				<img src={url} className="skinImg img-responsive" height={150} width={250}/> 
				<p><strong>{name}</strong></p>
			</div>	

	     );

	}

}

export default SkinObject;