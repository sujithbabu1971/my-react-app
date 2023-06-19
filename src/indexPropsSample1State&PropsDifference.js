import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
    //this.state.size= this.props.size;

  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color from state is {this.state.favoritecolor} ,
      It is the same as FavColor from props which is {this.props.favcol}
       since I  have a getDerivedStateFromProps method that
      assigns the favoritecolor in state to the favcol in props.
      Favorite Color from props is {this.props.favoritecolor}.
       The size from state is {this.state.size} & size from props
      is {this.props.size}. If you uncomment<br/> //this.state.size= this.props.size;
      <br/>in constructor they become the same. </h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="yellow" color="red" size="100"/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
