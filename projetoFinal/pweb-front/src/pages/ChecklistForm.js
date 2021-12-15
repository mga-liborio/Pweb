import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Col, Row } from "react-bootstrap"
import Api from '../ApiAxions'



function ChecklistForm() {

	const [campos, setCampos] = useState({
		paint_scratch: '',
		tires_good: '',
		kilometers: '',
		lights_working: '',
		panel_lights: '',
		brake_lights: '',
		seats: '',
		roof: '',
		is_clean: '',
		glasses: '',
		observations: '',
		gps_working: '',
		lock_working: '',
		fuel_liters: '',
		security_items: '',
		oil: '',
		water: '',
		brake_fluid: '',
		singed_customer: '',
		singed_employee: ''
	});

	function handleInputChange(event) {
		campos[event.target.name] = event.target.value;
		setCampos(campos);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		console.log(campos);
		Api.post("/checklists/", campos).then((res) => {
			console.log(res.data);
		}).catch((error) => { console.log(error) });
	}

	return (
		<Container id="checklist-main-container" className="d-grid h-100">
			<h1>Checklist Form</h1>
			<p>Check the fields below.</p>
			<Form id="checklist-in-form" initialState={{ input: '' }} onSubmit={handleFormSubmit}>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="paint_scratch">
							<Form.Label>Paint scratch</Form.Label>
							<Form.Control as="select" name="paint_scratch" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="tires_good">
							<Form.Label>Tires good</Form.Label>
							<Form.Control as="select" name="tires_good" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="sign-in-kilometers">
							<Form.Label>Kilometers</Form.Label>
							<Form.Control type="number" name="kilometers" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
						</Form.Group>                        </Col>
					<Col>
						<Form.Group className="mb-3" controlId="lights_working">
							<Form.Label>Lights working</Form.Label>
							<Form.Control as="select" name="lights_working" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="panel_lights">
							<Form.Label>Panel lights</Form.Label>
							<Form.Control as="select" name="panel_lights" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col>

						<Form.Group className="mb-3" controlId="brake_lights">
							<Form.Label>Brake lights</Form.Label>
							<Form.Control as="select" name="brake_lights" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="seats">
							<Form.Label>Seats</Form.Label>
							<Form.Control as="select" name="seats" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="roof">
							<Form.Label>Roof</Form.Label>
							<Form.Control as="select" name="roof" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="is_clean">
							<Form.Label>Is clean</Form.Label>
							<Form.Control as="select" name="is_clean" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="glasses">
							<Form.Label>Glasses</Form.Label>
							<Form.Control as="select" name="glasses" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
				</Row>
				<Form.Group className="mb-3" controlId="observations">
					<div class="form-group">
						<label for="exampleFormControlTextarea1">Observations</label>
						<textarea class="form-control" as="textarea" id="exampleFormControlTextarea1" style={{ height: '100px', width: '970px' }} name='observations' maxLength={500} rows="3" onChange={handleInputChange}></textarea>
					</div>
				</Form.Group >
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="gps_working">
							<Form.Label>GPS working</Form.Label>
							<Form.Control as="select" name="gps_working" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="lock_working">
							<Form.Label>Lock working</Form.Label>
							<Form.Control as="select" name="lock_working" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="fuel_liters">
							<Form.Label>Fuel liters</Form.Label>
							<Form.Control type="number" name="fuel_liters" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="security_items">
							<Form.Label>Security items</Form.Label>
							<Form.Control as="select" name="security_items" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="oil">
							<Form.Label>Oil</Form.Label>
							<Form.Control as="select" name="oil" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="water">
							<Form.Label>Water</Form.Label>
							<Form.Control as="select" name="water" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>

						<Form.Group className="mb-3" controlId="brake_fluid">
							<Form.Label>Brake fluid</Form.Label>
							<Form.Control as="select" name="brake_fluid" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="singed_customer">
							<Form.Label>Signed customer</Form.Label>
							<Form.Control as="select" name="singed_customer" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
				</Row>

				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="singed_employee">
							<Form.Label>Signed employee</Form.Label>
							<Form.Control as="select" name="singed_employee" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
								<option value={undefined}>Select</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Control>
						</Form.Group >
					</Col>
				</Row>

				<Form.Group className="mb-3" controlId="singed_employee">
					<Form.Label>Please check all fields before confirming</Form.Label>
				</Form.Group >
				<button type="submit" class="submit button" onChange={handleInputChange}>Send</button>
				<button type="reset" class="submit button" onChange={handleInputChange}>Clear</button>
			</Form >
		</Container >
	)
}

export default ChecklistForm;