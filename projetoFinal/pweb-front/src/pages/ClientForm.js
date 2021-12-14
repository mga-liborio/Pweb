import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Api from '../ApiAxions'

function ClientForm(){

    const [campos, setCampos] = useState({
        name: '',
        email: '',
        cpf: '',
        rg: '',
        cnh: '',
        category_cnh: '',
        cnh_first_date: '',
        street: '',
        number: '',
        city: '',
        zip_code: '',
        state : '',
        country: '',
        profession: '',
        is_approved: ''
    });
    
    
    
    function handleInputChange(event){

        const target = event.target
        const name = target.name
        const value = target.type=="checkbox" ? target.checked : target.value

        campos[name] = value;
        setCampos(campos);
    }
	
    function handleFormSubmit(event){

        const config = {
            Authorization: {
              usaname: 'mga',
              password: '1234',
            },
          };

        event.preventDefault();
        console.log(campos);
        console.log(config);
        Api.post("/vehicles/",campos, config).then((res) => {
                                                        console.log(res.data)
                                                        }).catch((error) => {
                                                            console.log(error)
                                                        });
                                                    }

    return(
        <Container id="main-container" className="d-grid h-100">
            <form onSubmit={handleFormSubmit} id="info-car" initialState={{ input: '' }} className="text w-100">
                    <div className="col-md-8 m-auto">
                        <p className="lead text-center pt-5">Cadastro Veículos</p>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome completo:</label>
                            <Form.Control type="text" name ="name" size="lg" placeholder="Nome" autoComplete="name" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Email:</label>
                            <Form.Control type="email" name ="email" size="lg" placeholder="email" autoComplete="email" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Veículo:</label>
                            <Form.Control type="color-car" name ="color" size="lg" placeholder="cor do carro" autoComplete="color-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Veículo:</label>
                            <Form.Control type="brand-car" name ="brand" size="lg" placeholder="marca do carro" autoComplete="brand-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Ano:</label>
                            <Form.Control type="year" name ="year" size="lg" placeholder="Ano carro" autoComplete="year-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Chassis:</label>
                            <Form.Control type="chassis" name ="chassis" size="lg" placeholder="chassis" autoComplete="chassis-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Renavam:</label>
                            <Form.Control type="number" name ="renavam" size="lg" placeholder="Renavam" autoComplete="renavam-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Tamanho do tanque combustivel em litros:</label>
                            <Form.Control type="number" name ="tank" size="lg" placeholder="tamanho total tanque" autoComplete="tank-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">nivel combustivel em litros:</label>
                            <Form.Control type="number" name ="level_fuel" size="lg" placeholder="Nivel total tanque" autoComplete="level-fuel" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Km rodados:</label>
                            <Form.Control type="number" name ="km" size="lg" placeholder="km" autoComplete="km-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Categoria:</label>
                            <Form.Control type="text" name ="category" size="lg" placeholder="categoria" autoComplete="category" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form>
                            <div>
                                <label className="form-control-label" class="text-left pt-3">PCD : </label>
                                <input type="checkbox" name="is_for_pcd" defaultChecked={campos.is_for_pcd} onChange={handleInputChange}/>
                            </div>
                        </Form>
                        <Form>
                            <div>
                                <label className="form-control-label" class="text-left pt-3">GPS : </label>
                                <input type="checkbox" name="have_gps" defaultChecked={campos.have_gps} onChange={handleInputChange}/>
                            </div>
                        </Form>
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
                            <Form.Control type="number" name="price" size="lg" placeholder="km" autoComplete="price-car" className="position-relative" onChange={handleInputChange}/>
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
                            <button type="reset" class="submit button" onChange={handleInputChange}>Clear</button>
                        </div>
                    </div>
            </form>
        </Container>
    ) 
}

export default ClientForm;