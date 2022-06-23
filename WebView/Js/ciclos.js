var ciclos = [{"annio": "2020","numero": "1ero","fechaInicio":"09-02-2020","fechaFin":"12-06-2020","activo":"false"},
                 {"annio": "2020","numero": "2do","fechaInicio":"12-06-2020","fechaFin":"30-11-2020","activo":"false"},
                 {"annio": "2021","numero": "1ero","fechaInicio":"15-02-2021","fechaFin":"28-06-2021","activo":"false"},
                 {"annio": "2021","numero": "2do","fechaInicio":"01-07-2021","fechaFin":"30-11-2021","activo":"false"},
                 {"annio": "2022","numero": "1ero","fechaInicio":"07-03-2022","fechaFin":"07-07-2022","activo":"false"},
                 {"annio": "2022","numero": "2do","fechaInicio":"15-07-2022","fechaFin":"30-11-2022","activo":"true"}]

function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(ciclo => createLine(ciclo))
 }
 function createLine(ciclo){
  var table = document.getElementById('myTable')
  var activo = "INACTIVO"
  if(ciclo.activo == "true") {activo = "ACTIVO"}
  var row = `<tr>
                    <td>${ciclo.annio}</td>
                    <td>${ciclo.numero}</td>
                    <td>${ciclo.fechaInicio}</td>
                    <td>${ciclo.fechaFin}</td>
                    <td>${activo}</td>
                 </tr>`
     table.innerHTML += row;
 }
 function busqueda(){
    var datoBusqueda = document.getElementById('busquedaText').value
    var filtroBusqueda = document.getElementById('ddlFiltro').value
    var datosFiltrados = ciclos.filter(function(item)
                     {
                        if(filtroBusqueda == 'annio'){
                            return item.annio.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }
                     });

     fillTable(datosFiltrados)
 }
 function cargarDdlCiclos(){
    var ddl = document.getElementById('ddlCiclos')
    ddl.innerHTML = `<option value="">seleccione un nuevo ciclo</option>`
    ciclos.forEach(function(item)
              {
              var value =  item.annio +'/'+item.numero
              var row = `<option value=${value}>${item.annio} ${item.numero}</option>`
                 ddl.innerHTML += row;
              });
 }

 function cambiarCiclo(){
    var datos = document.getElementById('ddlCiclos').value.split('/')
    var annio = datos[0]
    var numero = datos[1]
    var ciclo = ciclos.filter(x => x.annio == annio && x.numero == numero)[0]
    ciclos.forEach(x => x.activo = "false")
    ciclo.activo = "true"
    fillTable(ciclos)
 }

fillTable(ciclos)
cargarDdlCiclos()