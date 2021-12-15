import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'


//Pendências: botão limpar página

function EmployeeRegistrationForm() {

	const [campos, setCampos] = useState({
		name: '',
		email: '',
		cellphone: '',
		phone: '',
		cpf: '',
		address: '',
		is_staff: '',
		password: ''
	});

	function handleInputChange(event) {
		campos[event.target.name] = event.target.value;
		setCampos(campos);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		console.log(campos);
	}

	//Alterar "/checklists/"
	function handleFormSubmit(event) {
		event.preventDefault();
		console.log(campos);
		Api.post("/checklists/", campos).then((res) => {
			console.log(res.data);
		}).catch((error) => { console.log(error) });
	}

	return (
		<Container id="provider-main-container" className="d-grid h-100">
			<h1>Employee Registration</h1>
			<p>Employee information</p>
			<Form id="employee-registration-form" initialState={{ input: '' }} onSubmit={handleFormSubmit}>

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

				<Form.Group className="mb-3" controlId="cpf_field">
					<Form.Label>CPF</Form.Label>
					<Form.Control type="number" name="cpf" onInput={(e) => {
						e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
					}} className="textbox" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address_field">
					<Form.Label>Address</Form.Label>
					<Form.Control type="text" name="address" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="is_staff_field">
					<Form.Label>Is staff</Form.Label>
					<Form.Control as="select" name="is_staff" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
						<option>Open this select menu</option>
						<option value={true}>Yes</option>
						<option value={false}>No</option>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="password_field">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" name="password" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<button type="submit" class="submit button" onChange={handleInputChange}>Send</button>
				<button type="reset" class="submit button" onChange={handleInputChange}>Clear</button>
			</Form >
		</Container >
	)
}

export default EmployeeRegistrationForm;