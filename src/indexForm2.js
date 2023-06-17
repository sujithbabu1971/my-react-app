import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("");
const [myCar, setMyCar] = useState("");



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
		setMyCar(value);
  }
const handleChangeSelect = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
		setMyCar(value);
  }

	 const handleChangeTextArea = (event) => {
    setTextarea(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
	
	alert("Select MyCar Value-->"+myCar);
	alert("Text Area Value-->"+textarea);
	
	alert("inputs -->"+inputs);
    alert("inputs username -->"+inputs.username);
	alert("inputs age -->"+inputs.age);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>

			<label>Text Area Sample:
       			<textarea value={textarea} name="tss" onChange={handleChangeTextArea} />
        </label>

<label> CAR:
				<select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select></label>



        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);