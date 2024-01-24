import React from "react";
import { useState } from "react";


 const TestingMethod=()=>{

    const [selectedOption, setSelectedOption] = useState('');
  
    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
    };



    const runSmokeTest=(projectName)=>{
        console.log("projectName------>", projectName);

        fetchData(projectName);


    }


    const fetchData = async (val) => {
        let finalVal  = val;
        try {
          const response = await fetch('https://13.233.138.49:3000/smoke-test', {
            method: 'POST', // or 'GET', 'PUT', etc.
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if required
            },
            body: JSON.stringify({
              projectPath: finalVal
              // Add any data you want to send to the API
            }),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const result = await response.json();
          console.log("result ------>", result)
        } catch (error) {
            console.log("result error ------>", error)
        }
      };


    return(
        <div>
            <div> 
                <div>
                  <h3> <label > Select a project: </label></h3>
                </div>
      <select id="project" name="project" value={selectedOption} onChange={handleDropdownChange}>
        <option value="Satbet-sports">Satbet_sports</option>
        <option value="Satbet-WL">Satbet_WL</option>
        <option value="BB-WL">BB_WL</option>
      </select>
      <p>Selected car: {selectedOption}</p></div>
        <div> <button onClick={()=>{runSmokeTest(selectedOption)}}> Run the smoke test</button></div>
        </div>
    );
}

export default TestingMethod;