import React, {useState} from "react";
import './App.css';

function App() {
  const[text, setText] = useState('');
  const[errorText, setErrorText] = useState('');
  const[select, setSelect] = useState('option3');
  const[checkbox, setCheckbox] = useState(false);
  const[radio, setRadio] = useState('');
  const[range, setRange] = useState(10);
  const[date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", e);

    const data = {
      text, select, checkbox, radio, range, date,

      
    };
    if(text===""){
            setErrorText("Text is required");
          }
    console.log(JSON.stringify(data));
    
    
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  }

  const hendleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  }

  const hendleRadioChange = (e) => {
    setRadio(e.target.value);
  }

  const hendleRangeChange = (e) => {
    setRange(e.target.value);
  }

  const hendleDateChenge = (e) => {
    setDate(e.target.value);
  }


  console.log('rendered App component');
  

  return (
    <div className="App">
      <div style={{maxWidth: "500px", margin: "0 auto"}}>
        <form onSubmit = {handelSubmit}>
          

        <label>
          Inpit text
          <input type = "text" value={text} onChange={handleChange}/>
          {errorText && <p style = {{color: 'red'}}>{errorText}</p>}
        </label>

        <select value = {select} onChange={handleSelectChange}>
          <option value ="option1">Option 1</option>
          <option value ="option2">Option 2</option>
          <option value ="option3">Option 3</option>
        </select>

        <label>
          Checkbox: 
          <input checked = {checkbox} type="checkbox" onChange = {hendleCheckboxChange} />
        </label>

        <label>
          Input Radio:
          <label>
            Radio one:
            <input checked = {radio === 'radio1'} onChange={hendleRadioChange} type = 'radio' value = 'radio1' name = 'radio' />
          </label>
          <label>
            Radio two:
            <input checked = {radio === 'radio2'} onChange={hendleRadioChange} type = 'radio' value = 'radio2' name = 'radio'/>
          </label>
        </label>

        <label>
          Range:
          <input onChange={hendleRangeChange} value={range} type="range" />
        </label>

        <label>
          Date:
          <input type="date" value={date} onChange={hendleDateChenge} />
        </label>


        <button >Submit</button>
        </form>
        
      </div>
      
    </div>
  );
}

export default App;
