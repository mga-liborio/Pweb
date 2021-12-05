import React, {useState, useEffect} from 'react'

export default function VehicleForm(){

    const [campos, setCampos] = useState({
        name: '',
        model: '',
        year: '',
        chassis: ''

    });
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }
	
    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <fieldset>
                <div class="container mt-3">
                <label for="name">Manufacturer Name</label>
                <input type="name" name="name" id="name" onChange={handleInputChange} />
            </div>
            <div class="field">
                <label for="model">Model</label>
                <input type="model" name="model" id="model" onChange={handleInputChange} />
            </div>
            <div class="field">
            <label for="year">Year</label>
            <input type="year" name="year" id="year" onChange={handleInputChange} />
            </div>
            <div class="field">
            <label for="chassis">Chassis Number</label>
            <input type="chassis" name="chassis" id="chassis" onChange={handleInputChange} />
            </div>
            <label for="function">Model Car</label>
            <select id='idModelFunction'>
            <option value="" >Select Model</option>
            <option value="cop" >Coupé</option>
            <option value="hat" >Hatche</option>
            <option value="sed" >Sedan</option>
            <option value="suv" >SUV</option>
            </select>
            <label for="function">Status Car</label>
            <select id='idStatusFunction'>
            <option value="" >Select Status</option>
            <option value="ava" >Available</option>
            <option value="ren" >Rented</option>
            <option value="mnt" >Maintenance</option>
            </select>
            <button type="submit" class="submit button">Send</button>
            </fieldset>
        </form>
    ) 
}