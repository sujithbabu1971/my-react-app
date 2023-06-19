import React from 'react'
import ReactDOM from 'react-dom/client'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  // Because of this method, the colour always remain yellow as
  // it is the one passed. Even when user clicks changeColor
  // buton, the color does not change
  // Refer getDerivedStateFromProps from
  // https://www.w3schools.com/REACT/react_class.asp
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="yellow" />);
