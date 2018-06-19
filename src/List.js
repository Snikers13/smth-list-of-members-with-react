import React, { Component } from 'react';


export default class Ren extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		console.log('inside');
		fetch(`./clients.json`, {
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					items: result,
				});
			},

			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}

	render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {console.log(error.message)}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((items,index) => (
            <li key={index}>
              {`${items.general.firstName} ${items.general.lastName}`} {items.price}
            </li>
          ))}
        </ul>
      );
    }
  }

}