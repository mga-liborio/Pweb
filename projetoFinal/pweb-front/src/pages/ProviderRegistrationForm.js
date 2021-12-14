import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

//Pendências: mascara do cnpj

function ProviderRegistrationForm() {

	const [campos, setCampos] = useState({
		name: '',
		email: '',
		email2: '',
		email3: '',
		cellphone: '',
		phone: '',
		cnpj: '',
		address: '',
		services: ''
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
		<Container id="provider-main-container" className="d-grid h-100">
			<h1>Provider Registration</h1>
			<p>Provider information</p>
			<Form id="provider-registration-form" initialState={{ input: '' }} onSubmit={handleFormSubmit}>

				<Form.Group className="mb-3" controlId="name_field">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" maxLength={60} name="name" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email_field">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" name="email" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email_field2">
					<Form.Label>Email 02</Form.Label>
					<Form.Control type="email" name="email2" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email_field3">
					<Form.Label>Email 03</Form.Label>
					<Form.Control type="email" name="email3" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="cellphone_field">
					<Form.Label>Cellphone</Form.Label>
					<Form.Control type="number" name="cellphone" onInput={(e) => {
						e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
					}} size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phone_field">
					<Form.Label>Phone</Form.Label>
					<Form.Control type="number" name="phone" onInput={(e) => {
						e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
					}} size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="cnpj_field">
					<Form.Label>CNPJ</Form.Label>
					<Form.Control type="number" name="cnpj" onInput={(e) => {
						e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 18)
					}} className="textbox" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address_field">
					<Form.Label>Address</Form.Label>
					<Form.Control type="text" name="address" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="services_field">
					<Form.Label>Services</Form.Label>
					<Form.Control type="text" name="services" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<button type="submit" class="submit button" onChange={handleInputChange}>Send</button>
				<button type="reset" class="submit button" onChange={handleInputChange}>Clear</button>
			</Form >
		</Container >
	)
}

export default ProviderRegistrationForm;