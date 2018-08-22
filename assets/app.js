$(document).ready(function() {
  //se oculta todas las demas vistas menos la de inicio al cargar la pagina
  $('.about-us').hide();
  $('.contact-us').hide();
  $('.validation').hide();
  
  //al hacer click en el boton inicio, se ocultan las demas vistas
  $('.btn-init').click(function() {
    $('.init').show();
    $('.contact-us').hide();
    $('.about-us').hide();
    $('.validation').hide();
  });
  //al hacer click en el boton valida tu web, se ocultan las demas vistas
  $('.btn-validation').click(function() {
    $('.validation').show();
    $('.init').hide();
    $('.about-us').hide();
    $('.contact-us').hide();
  });
  //al hacer click en el boton sobre nosotros, se ocultan las demas vistas
  $('.btn-about').click(function() {
    $('.about-us').show();
    $('.contact-us').hide();
    $('.init').hide();
    $('.validation').hide();
  
  });
  //al hacer click en el boton contacto, se ocultan las demas vistas
  $('.btn-contac').click(function() {
    $('.contact-us').show();
    $('.init').hide();
    $('.about-us').hide();
    $('.validation').hide();
  });

  
 
  
  
/*
$(document).ready(function() {
  $('.search').click(function(e) {
    let url = ($('.info-search').val());
    $('.info-search').val('');
    getUrl(url);
    e.preventDefault();
    console.log(url);
  });
});

function getUrl(url) {
  $.ajax({
    url: `http://observatorioweb.ups.edu.ec/oaw/srv/wcag/json/conformidad/?url=https://${url}&key=4c693cb3-c9c2-4eea-bd01-548aee390bf1`,
    type: 'GET', // aca va si sube o baja get o post
    datatype: 'json'
  })
    .done(function(resultado) { // parametro
       console.log(resultado);
      //showInfo(response);
    })
    .fail(function() {
      console.log('error en conexión a API');
    });
  }
  */
});

$('.search').click(function(){
  let url = ($('.info-search').val());
  console.log(url);
  if($('.info-search').val().length <= 0){
    alert('URL no puede estar vacía')
    $('.search').disable();
  } else {
   
  //fetch('http://observatorioweb.ups.edu.ec/oaw/srv/wcag/json/conformidad/?url=http://' + url + '&key=4c693cb3-c9c2-4eea-bd01-548aee390bf1' )
  //.then(function(response) {
    // Turns the the JSON into a JS object
 //   return response.json();
 // })
  /*
  iv class="price_table_row cost warning-bg"><strong>${data.oaw.resultado.resumen.totalPerceptible}</strong></div>
  */
 // .then(function(data){
 //   console.log(data.oaw.resultado.resumen);
    $('.analizator').hide()
    $('.data').append(`
    <div>
      <h3 class="text-center my-5">Resumen de Análisis</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center"><strong class="text-danger">13</strong>&nbsp;&nbsp; PROBLEMAS</h5>
              <h6 class="card-subtitle mb-2 text-muted text-center">Necesarias Correcciones</h6>
              <ul class="list-unstyled m-3">
                <li>Perceptible &nbsp; : &nbsp; <strong>6</strong></li>
                <li>Operable &nbsp; : &nbsp; <strong>1</strong></li>
                <li>Comprensible &nbsp; : &nbsp; <strong>3</strong></li>
                <li>Robusto &nbsp; : &nbsp; <strong>3</strong></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center"><strong class="text-warning">12</strong>&nbsp;&nbsp;ADVERTENCIAS</h5>
              <h6 class="card-subtitle mb-2 text-muted text-center">Revisar Manualmente</h6>
              <ul class="list-unstyled m-3">
                <li>Perceptible &nbsp; : &nbsp; <strong>4</strong></li>
                <li>Operable &nbsp; : &nbsp; <strong>6</strong></li>
                <li>Comprensible &nbsp; : &nbsp; <strong>2</strong></li>
                <li>Robusto &nbsp; : &nbsp; <strong>0</strong></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center"><strong class="text-info">43</strong>&nbsp;&nbsp;NO VERIFICADOS</h5>
              <h6 class="card-subtitle mb-2 text-muted text-center">Comprovación Completamente Manual</h6>
              <ul class="list-unstyled m-3">
                <li>Perceptible &nbsp; : &nbsp; <strong>30</strong></li>
                <li>Operable &nbsp; : &nbsp; <strong>6</strong></li>
                <li>Comprensible &nbsp; : &nbsp; <strong>6</strong></li>
                <li>Robusto &nbsp; : &nbsp; <strong>1</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center my-3"><strong>URL &nbsp;: &nbsp;</strong>www.msn.cl &nbsp; &nbsp;<strong>Fecha &nbsp;: &nbsp;</strong>22/08/2018 &nbsp; &nbsp;<strong>Pautas &nbsp;:</strong> &nbsp; WCAG 2.0 &nbsp; &nbsp;<strong>Nivel de Análisis &nbsp;:</strong> &nbsp; AAA</p>
      <div class="input-group mb-3">
        <input type="text" class="form-control send-email" placeholder="EMAIL" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="send">Recibir Informe Detallado</button>
        </div>
      </div>
    </div>`)}
    $('#send').click(function(){
      console.log('enviando');
      if($('.send-email').val().length <= 0){
        alert('Email no puede estar vacía')
        $('#send').disable()
      } else {
      $('.data').hide();
      $('.reload').show();
      $('.sending').append(`<h1 class='text-center my-5'>INFORME ENVIADO</h1>`)
      }
    });
        
  })
//  .catch(function(error){
  //  console.log('error en conexión a API')
   /* $('.error').append(`<div class="alert alert-danger" role="alert">
    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
    <span class="sr-only">Error:</span>
    Ingrese una url valida
    </div>`)*/
    
 // })
//});


