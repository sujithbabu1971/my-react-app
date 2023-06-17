import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
	  if(this.state.color === "red"){
    this.setState({color: "blue"});
	  }else{

		   this.setState({color: "red"});
	  }
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p style={{backgroundColor:this.state.color}}>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
export default Car;