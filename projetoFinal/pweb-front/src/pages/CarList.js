import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Car from "./Car"
import Api from '../ApiAxions'


function CarList() {

  const [campos, setCampos] = useState([]);

  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
  }

  useEffect( () => {
    (async () => {
      Api.get('/categories/').then( response => {
        setCampos(response.data);
        console.log(campos);
      });
    })();
  }, []);

  return (
    <Container id="select-car" className="d-grid h-100">
      <h1>Select  the car type</h1>
      <p>Choose an option below.</p>
      <Form id="checklist-in-form" onSubmit={handleFormSubmit}>

        <Form.Group className="mb-3" controlId="car_type">
          <Form.Control as="select" name="car_type" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
            {
              campos.map((result) => (<option text={result.id}>{result.name}</option>))
            }
          </Form.Control>
        </Form.Group>

        <button type="submit" class="submit button" onChange={handleInputChange}>Send</button>
        <button type="submit" class="submit button" onChange={handleInputChange}>Clear</button>
        
      </Form >
    </Container >
  )
}

export default CarList;