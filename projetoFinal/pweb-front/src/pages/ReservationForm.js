import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function RegistrationForm(){

  const [campos, setCampos] = useState({
      employee: '',
      customer: '',
      vehicle: '',
      insurance: '',
      rent_checklist: '',
      returned_checklist: '',
      rent_date: '',
      return_date: '',
      is_approved: '',
      total_price: '',
      is_returned: ''
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
    <Container id="main-container" className="d-grid h-100">
        <h1>Reservation Form</h1>
        <p>Fill in the fields below.</p>
        <Form id="registration-in-form" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="sign-in-employee">
            <Form.Label>Employee</Form.Label>
            <Form.Control type="employee" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-customer">
            <Form.Label>Customer</Form.Label>
            <Form.Control type="customer" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-vehicle">
            <Form.Label>Vehicle</Form.Label>
            <Form.Control type="vehicle" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-ini-nsurance">
            <Form.Label>Insurance</Form.Label>
            <Form.Control type="insurance" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-rent-checklist">
            <Form.Label>Rent checklist</Form.Label>
            <Form.Control type="rent_checklist" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="returned_checklist">
            <Form.Label>Returned checklist</Form.Label>
            <Form.Control type="returned_checklist" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-rent_date">
            <Form.Label>Rent date</Form.Label>
            <Form.Control type="rent_date" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-return-date">
            <Form.Label>Return date</Form.Label>
            <Form.Control type="return_date" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="is_approved">
            <Form.Label>Returned checklist</Form.Label>
            <Form.Control type="is_approved" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="total_price">
            <Form.Label>Total price</Form.Label>
            <Form.Control type="total_price" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="is_returned">
            <Form.Label>Is returned</Form.Label>
            <Form.Control type="is_returned" size="lg" style={{ width: '400px' }} onChange={handleInputChange}/>
          </Form.Group>
          <button type="submit" class="submit button">Send</button>
        </Form>
    </Container>
  )
}

export default RegistrationForm;