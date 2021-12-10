import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

export default function Home() {

    return(

        <Container id="main-container" className="d-grid h-100">
            <Form id="sign-in-form"className="text-center w-100"> 
                <h1 className="mb-3 fs-3 fw-normal">HOME TEMPORARIA</h1>
            </Form>
        </Container>


            // <head>
            //     <meta charset="UTF-8"/>
            //     <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            //     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            //     <title>Projeto Locar</title>
            //     <link rel="shortcut icon" href="img/Imagens/favicon.ico" type="image/x-icon">
                
            //     {/* <!-- Google Fonts - Lato--> */}
            //     <link rel="preconnect" href="https://fonts.googleapis.com">
            //     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            //     <link 
            //         href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300;1,400;1,700&display=swap" 
            //         rel="stylesheet"/>
                
            //     {/* <!-- CSS Bootstrap--> */}
            //     <link
            //         href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
            //         rel="stylesheet" 
            //         integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
            //         crossorigin="anonymous">


            //     {/* <!-- Bootstrap icon--> */}
            //     <link rel="stylesheet" 
            //         href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
                
            //     {/* <!--CSS do Projeto--> */}
            //     <link rel="stylesheet" href="css/styless.css/styless.css">
                
                
            //     {/* <!--JavaScript Bootstrap--> */}
            //     <script 
            //         src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
            //         integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
            //         crossorigin="anonymous"
            //     ></script>
            // </head>
            // <body>
            //     {/* <!--NAVBAR--> */}
            //     <nav class="navbar navbar-expand-lg fixed-top bg-primary-color" id="navbar">
            //         <div class="container py-3">
            //             <a href="" class="nav-bland">
            //                 <img src= "img/Imagens/imovi-icon.png" alt = "Imovi"/>
            //                 <span>Imovi</span>
            //             </a>
            //             <button 
            //                 class="navbar toggler" 
            //                 type = "button" 
            //                 data-bs-toggle="colapse"
            //                 data-bs-target="#navbar-items"
            //                 aria-controls="navbar-items"
            //                 aria-expanded="false"
            //                 aria-label="Toggle navigation"
            //             >
            //                 <i class="bi bi-list"></i>
            //             </button>
            //             <div class="collapse navbar-collapse" id="navbar-items">
            //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            //                     <li class="nav-item">
            //                         <a href="#" class="nav-link active" aria-current="page">Home</a>
            //                     </li>
            //                     <li class="nav-item">
            //                         <a href="#" class="nav-link">Projetos</a>
            //                     </li>
            //                     <li class="nav-item">
            //                         <a href="#" class="nav-link">Imóveis</a>
            //                     </li>
            //                     <li class="nav-item">
            //                         <a href="#" class="nav-link active">Contatos</a>
            //                     </li>
            //                 </ul>
            //             </div>
            //         </div>
            //     </nav>
            //     {/* <!--SLIDER --> */}
            //     <div class="container" id="slider-container">

            //         <div class="carousel slide" id="slider" data-bs-ride="carousel">
            //             <div class="carosel-indicators">
            //                 <button
            //                     type="button" 
            //                     class="active" 
            //                     data-bs-target="#slider" 
            //                     data-bs-slider-to="0"
            //                     aria-current="true"
            //                     aria-label="Slide 1"    
            //                 ></button>
            //                 <button
            //                     type="button" 
            //                     data-bs-target="#slider" 
            //                     data-bs-slider-to="1"
            //                     aria-label="Slide 2"    
            //                 ></button>
            //                 <button
            //                     type="button"  
            //                     data-bs-target="#slider" 
            //                     data-bs-slider-to="2"
            //                     aria-label="Slide 3"    
            //                 ></button>
            //             </div>
            //             <div class="carousel-inner">
            //                 <div class="carousel-item active">
            //                     <img src="img/Imagens/banner-1.jpg" alt="Casa 1" class="d-block w-100">
            //                     <div class="carousel-caption">
            //                         <h5>Casas planejadas</h5>
            //                         <a href="#" class="btn btn-dark">Ver Projetos</a>
            //                     </div>
            //                 </div>
            //                 <div class="carousel-item">
            //                     <img src="img/Imagens/banner-2.jpg" alt="Casa 2" class="d-block w-100">
            //                     <div class="carousel-caption">
            //                         <h5>Projetos Complexos</h5>
            //                         <a href="#" class="btn btn-dark">Ver Projetos</a>
            //                     </div>
            //                 </div>
            //                 <div class="carousel-item">
            //                     <img src="img/Imagens/banner-3.jpg" alt="Casa 3" class="d-block w-100">
            //                     <div class="carousel-caption">
            //                         <h5>Projetos inovadores</h5>
            //                         <a href="#" class="btn btn-dark">Ver Projetos</a>
            //                     </div>
            //                 </div>
            //             </div>
            //             <button 
            //                 class="carousel-control-prev" 
            //                 type ="button" 
            //                 data-bs-target="#slider" 
            //                 data-bs-Slide = "prev"
            //             >
            //             <i class="bi bi-chevron-compact-left"></i>
            //             <span class="visually hidden">Previous</span>
            //             </button>
                        
            //             <button 
            //                 class="carousel-control-next" 
            //                 type ="button" 
            //                 data-bs-target="#slider" 
            //                 data-bs-Slide = "next"
            //             >
            //             <i class="bi bi-chevron-compact-right"></i>
            //             <span class="visually hidden">Next</span>
            //             </button>
            //         </div>
                
                
            //     </div>
            //     {/* <!--Mini Banners--> */}
            //     <div class="col-12 col-md-10 offset-md-1" id="mini-banners">
            //         <div class="row">
            //             <div class="col-12 col-md-4">
            //                 <div class="card text-center">
            //                     <i class="bi bi-box primary-color"></i>
            //                     <div class="card-body">
            //                         <h5 class="card-title primary-color">Você tem dinheiro</h5>
            //                         <p class="card-text secondar-color">Lorem ipsum dolor sit, amet 
            //                             consectetur adipisicing elit. Eaque nam enim dicta et rem vitae 
            //                             repellendus, facere, ipsa a laboriosam eos repudiandae atque 
            //                             voluptate ducimus perspiciatis error? Ea, nisi cumque!
            //                         </p>
            //                         <a href="#" class="btn btn-dark">Saber mais</a>
            //                     </div>
            //                 </div>
            //             </div> <div class="col-12 col-md-4">
            //                 <div class="card text-center">
            //                     <i class="bi bi-layers primary-color"></i>
            //                     <div class="card-body">
            //                         <h5 class="card-title primary-color">Projetos completos</h5>
            //                         <p class="card-text secondar-color">Lorem ipsum dolor sit, amet 
            //                             consectetur adipisicing elit. Eaque nam enim dicta et rem vitae 
            //                             repellendus, facere, ipsa a laboriosam eos repudiandae atque 
            //                             voluptate ducimus perspiciatis error? Ea, nisi cumque!
            //                         </p>
            //                         <a href="#" class="btn btn-dark">Saber mais</a>
            //                     </div>
            //                 </div>
            //             </div> <div class="col-12 col-md-4">
            //                 <div class="card text-center">
            //                     <i class="bi bi-lightning-charge primary-color"></i>
            //                     <div class="card-body">
            //                         <h5 class="card-title primary-color">Os melhores do IFBA</h5>
            //                         <p class="card-text secondar-color">Lorem ipsum dolor sit, amet 
            //                             consectetur adipisicing elit. Eaque nam enim dicta et rem vitae 
            //                             repellendus, facere, ipsa a laboriosam eos repudiandae atque 
            //                             voluptate ducimus perspiciatis error? Ea, nisi cumque!
            //                         </p>
            //                         <a href="#" class="btn btn-dark">Saber mais</a>
            //                     </div>
            //                 </div>
            //             </div>
                        
            //         </div>
            //     </div>
            //     {/* <!--Destaque--> */}
            //     <div class="container" id="features-conainer">
            //         <div class="col-12">
            //             <h2 class="title primary-color">Trabalhos em destaques</h2>
            //             <p class="subtitle secondary-color">
            //                 Conhheça nossos projetos desafiadores
            //             </p>
            //         </div>
            //         <div class="col-12" id = "featured-images">
            //             <div class="row g-4">
            //                 <div class="col-12 col-md-4">
            //                     <img src="img/Imagens/project-1.jpg" alt="Projeto 1" class= "img.fluid">
            //                     <div class="banner content">
            //                         <p class="secondary-color">Categoria</p>
            //                         <h3>Nome do projeto</h3>
            //                     </div>
            //                 </div>
                        
                            
            //                 <div class="col-12 col-md-4">
            //                     <img src="img/Imagens/project-2.jpg" alt="Projeto 2" class= "img.fluid">
            //                     <div class="banner content">
            //                         <p class="secondary-color">Categoria</p>
            //                         <h3>Nome do projeto</h3>
            //                     </div>
            //                 </div>
                            
            //                 <div class="col-12 col-md-4">
            //                     <img src="img/Imagens/project-3.jpg" alt="Projeto 3" class= "img.fluid">
            //                     <div class="banner content">
            //                         <p class="secondary-color">Categoria</p>
            //                         <h3>Nome do projeto</h3>
            //                     </div>
            //                 </div>
                            
            //                 <div class="col-12 col-md-4">
            //                     <img src="img/Imagens/project-4.jpg" alt="Projeto 4" class= "img.fluid">
            //                     <div class="banner content">
            //                         <p class="secondary-color">Categoria</p>
            //                         <h3>Nome do projeto</h3>
            //                 </div>
                            
            //                 <div class="col-12 col-md-4">
            //                     <img src="img/Imagens/project-5.jpg" alt="Projeto 5" class= "img.fluid">
            //                     <div class="banner content">
            //                         <p class="secondary-color">Categoria</p>
            //                         <h3>Nome do projeto</h3>
            //                     </div>
            //                 </div>
                            
            //                 <div class="col-12 col-md-4">
            //                     <img src="img/Imagens/project-6.jpg" alt="Projeto 6" class= "img.fluid">
            //                     <div class="banner content">
            //                         <p class="secondary-color">Categoria</p>
            //                         <h3>Nome do projeto</h3>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     {/* <!--INFO--> */}
            // <div class="container" id= "info-container">
            //     <div class="col-12">
            //         <h2 class="title primary-color">Descrição do produto</h2>
            //         <p class="subtitle secondary-color">
            //             Conhheça mais dos nossos serviços
            //         </p>
            //     </div>
            //     <div class="col-12">
            //         <div class="row">
            //             <div class="col-12 col-md-5"> id= "info-banners"
            //                 <img src="img/Imagens/infobanner.jpg" 
            //                     alt="Informações da Empresa" 
            //                     class = "img.fluid">
            //             </div>
            //             <div class="col-12 col-md-7 bg-secondary-color" id="info-content">
            //                 <div class="row">
            //                     <div class="col-12">
            //                         <h2 class="title primary-color">Estes dados fazem a diferença</h2>
            //                         <p class="subtitle secondary-color">
            //                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            //                             Alias rerum consequatur laborum recusandae velit quod minima 
            //                             vitae suscipit quo. Illum asperiores aliquam porro cupiditate 
            //                             dolore nostrum ducimus reprehenderit mollitia sed.
            //                         </p>
            //                     </div>
            //                     <div class="col-12" id="info-number">
            //                         <div class="row">
            //                             <div class="col-4">
            //                                 <h3 class="primary-color">18</h3>
            //                                 <p class="secondary-color">anos na construção civil</p>
            //                             </div>
            //                             <div class="col-4">
            //                                 <h3 class="primary-color">95</h3>
            //                                 <p class="secondary-color">Projetos executados</p>
            //                             </div>
            //                             <div class="col-4">
            //                                 <h3 class="primary-color">639</h3>
            //                                 <p class="secondary-color">Clientes</p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div class="col-12">
            //                         <a href="#" class="btn btn-dark">Saber Mais</a>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            //     {/* <!--FOOTER--> */}
            //     <footer class="container-fluid bg-dark-color" id="footer">
            //         <div class="container">
            //             <div class="row">
            //                 <!--FOOTER TOP-->
            //                 <div class="col-12" id="footer-top">
            //                     <div class="row justify-content-between">
            //                         <div class="col-4"><h2>IMovi</h2></div>
            //                         <div class="col-4" id="social-icons">
            //                             <i class="bi bi-facebook"></i>
            //                             <i class="bi bi-instagram"></i>
            //                             <i class="bi bi-youtube"></i>
            //                             <i class="bi bi-twitter"></i>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 {/* <!--FOOTER DETAILS--> */}
            //                 <div class="col-12" id="footer-details">
            //                     <div class="row">
            //                         <div class="col12 colmd4" id="newscontainer">
            //                             <h4>Fique por dentro das novidades</h4>
            //                             <p class="secondary-color">Inscreva-se para saber em primeira mão</p>
            //                             <form>
            //                                 <div class="mb-3">
            //                                     <input type="email" class="form-control" placeholder="Digite seu email">
            //                                 </div>
            //                                 <button class="btn btn-dark" type= "submit">Inscrever</button>
            //                             </form>
            //                         </div>
            //                         <div class="col-12 col-md-4" id="contact-container">
            //                             <h4>Formas de Contato</h4>
            //                             <p class="secondary-color">(71)3343-5622</p>
            //                             <p class="secondary-col">contato@locar.com.br</p>
            //                         </div>
            //                         <div class="col-12 col-md-4" id="links-container">
            //                             <div class="row">
            //                                 <h4>Você pode está procurando por:</h4>
            //                                 <div class="col-6">
            //                                     <ul class="list-unstyled">
            //                                         <li><a href="" class="secondary-color">Projetos</a>></li>
            //                                         <li><a href="" class="secondary-color">Imóveis</a>></li>
            //                                         <li><a href="" class="secondary-color">Vendas</a>></li>
            //                                     </ul>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 {/* <!--FOOTER BOOTTON--> */}
            //                 <div class="col-12" id="footer-bootton"></div>
            //             </div>
            //         </div>
            //     </footer>

            // </body>
    )
}