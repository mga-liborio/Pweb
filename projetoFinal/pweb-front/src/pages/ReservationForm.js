import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ReservationForm() {


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

  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
  }

  return (
    <Container id="main-container" className="d-grid h-100">
      <h1>Reservation Form</h1>
      <p>Fill in the fields below.</p>
      <Form id="registration-in-form" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="sign-in-employee">
          <Form.Label>Employee</Form.Label>
          <Form.Control type="text" name="employee" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-customer">
          <Form.Label>Customer</Form.Label>
          <Form.Control type="text" name="customer" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-vehicle">
          <Form.Label>Vehicle</Form.Label>
          <Form.Control type="text" name="vehicle" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-ini-nsurance">
          <Form.Label>Insurance</Form.Label>
          <Form.Control type="text" name="insurance" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-rent-checklist">
          <Form.Label>Rent checklist</Form.Label>
          <Form.Control type="text" name="rent_checklist" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="returned_checklist">
          <Form.Label>Returned checklist</Form.Label>
          <Form.Control type="text" name="returned_checklist" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-rent_date">
          <Form.Label>Rent date</Form.Label>
          <Form.Control type="date" name="rent_date" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-return-date">
          <Form.Label>Return date</Form.Label>
          <Form.Control type="date" name="return_date" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>
        
        <Form.Label>Is approved</Form.Label>
        <Form.Select className="mb-3" controlId="is_approved">
          <option>Open this select menu</option>
          <option type="text" name="is_approved" value="y" size="lg" onChange={handleInputChange}>Yes</option>
          <option type="text" name="is_approved" value="n" size="lg" onChange={handleInputChange}>No</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="total_price">
          <Form.Label>Total price</Form.Label>
          <Form.Control type="text" name="total_price" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="is_returned">
          <Form.Label>Is returned</Form.Label>
          <Form.Control type="text" name="is_returned" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>
        <button type="submit" class="submit button" onChange={handleInputChange}>Send</button>
        <button type="submit" class="submit button" onChange={handleInputChange}>Clear</button>
      </Form>
    </Container>
  )
}

export default ReservationForm;