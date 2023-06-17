import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
	this.state.size= this.props.size;

  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor} with size from state {this.state.size} & size from props {this.props.size} </h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="yellow" color="red" size="100"/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
