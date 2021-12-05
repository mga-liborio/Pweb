import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Login.css'

const [campos, setCampos] = useState({
    email: '',
    senha: ''
});

function handleInputChange(event){
    campos[event.target.name] = event.target.value;
    setCampos(campos);
}


function handleFormSubmit(event){
    event.preventDefault();
    console.log(campos);
}


function Login(){

    return(
        <Container id="main-container" className="d-grid h-100">
            <Form onSubmit={handleFormSubmit} id="sign-in-form"className="text-center w-100"> 
                <img
                className="mb-4 bootstrap-logo" 
                src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Foto-Carro-PNG.png"
                alt="Bootstrap 5" />
                <h1 className="mb-3 fs-3 fw-normal">login</h1>
                <Form.Group controlId="sign-in-email_adress">
                    <Form.Control onChange={handleInputChange} type="email" size="lg" placeholder="Email" autoComplete="username" className="position-relative"/>
                </Form.Group >
                <Form.Group controlId="sign-in-password" className="mb-3">
                    <Form.Control onChange={handleInputChange} type="senha" size="lg" placeholder="senha" autoComplete="current-password" className="position-relative" />
                </Form.Group>
                <Form.Group controlId="remember-me" className="d-flex justify-content-center mb-4">
                    <Form.Check label="Me lembre na próxima"/>
                </Form.Group>
                <div className="d-grid">
                    <button variante="primary" size="lg" type="submit">Logar</button>
                </div>
                <p className="mt-5 text-muted">&copy; 2021-2022 </p>
            </Form>

        </Container>
    );
}

export default Login;