import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function VehicleForm(){

    const [campos, setCampos] = useState({
        license_plate: '',
        model: '',
        color: '',
        brand: '',
        year: '',
        chassis: '',
        renavam: '',
        tank: '',
        level_fuel: '',
        km: '',
        pcd: '',
        gps: '',
        status: '',
        price: '',
        photo: ''
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
            <form onSubmit={handleFormSubmit} id="info-car" className="text w-100">
                    <div className="col-md-8 m-auto">
                        <p className="lead text-center pt-5">Cadastro Veículos</p>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Veículo:</label>
                            <Form.Control type="license_plate" size="lg" placeholder="Placa" autoComplete="license-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Modelo:</label>
                            <Form.Control type="model" size="lg" placeholder="Modelo do carro" autoComplete="model-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Veículo:</label>
                            <Form.Control type="color-car" size="lg" placeholder="cor do carro" autoComplete="color-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Veículo:</label>
                            <Form.Control type="brand-car" size="lg" placeholder="marca do carro" autoComplete="brand-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Ano:</label>
                            <Form.Control type="year" size="lg" placeholder="Ano carro" autoComplete="year-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Chassis:</label>
                            <Form.Control type="chassis" size="lg" placeholder="chassis" autoComplete="chassis-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Renavam:</label>
                            <Form.Control type="number" size="lg" placeholder="Renavam" autoComplete="renavam-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Tamanho do tanque combustivel em litros:</label>
                            <Form.Control type="number" size="lg" placeholder="tamanho total tanque" autoComplete="tank-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">nivel combustivel em litros:</label>
                            <Form.Control type="number" size="lg" placeholder="Nivel total tanque" autoComplete="level-fuel" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Km rodados:</label>
                            <Form.Control type="number" size="lg" placeholder="km" autoComplete="km-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">PCD:</label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="coupe"/>
                                <label class="form-check-label" for="inlineRadio1">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="hatche"/>
                                <label class="form-check-label" for="inlineRadio2">Não</label>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">GPS:</label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="coupe"/>
                                <label class="form-check-label" for="inlineRadio1">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="hatche"/>
                                <label class="form-check-label" for="inlineRadio2">Não</label>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label pt-3" class="text-left">Status Carro:</label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="available"/>
                                <label class="form-check-label" for="inlineRadio1">Disponível</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="rented"/>
                                <label class="form-check-label" for="inlineRadio2">Alugado</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="maintenance"/>
                                <label class="form-check-label" for="inlineRadio1">Manutenção</label>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Valor Basico por diaria:</label>
                            <Form.Control type="number" size="lg" placeholder="km" autoComplete="price-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <div class="form-group pt-3">
                                <label for="exempleFormControlFile">Carregue a foto do veículo:</label>
                                <br/>
                                <input type="file" class="form-control-file pt-2" id="FormControleFile"/>
                            </div>
                        </Form.Group>
                        <div className="row">
                            <input type="submit" name="aaa" className="btn btn-info btn-block mt-4"/>
                        </div>
                    </div>
            </form>
        </Container>
    ) 
}

export default VehicleForm;