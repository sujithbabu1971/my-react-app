import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Car( props) {
	var blah='x';
  return <li>I am a { props.brand1 } at index { props.key1 }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key1={car.id} brand1={car.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);