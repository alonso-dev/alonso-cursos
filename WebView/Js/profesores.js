var profes = [{"cedula": "12345","nombre": "Alonso Calderón","telefono":"40000000","email":"alonso@gmail.com"},
                 {"cedula": "67890","nombre": "Natalia Álvarez","telefono":"41234098","email":"nar@gmail.com"},
                 {"cedula": "222222","nombre": "Mo Salah","telefono":"40938543","email":"momo@gmail.com"},
                 {"cedula": "1111111","nombre": "Sádico Mané","telefono":"40991212","email":"ohmanemane@hotmail.com"},
                 {"cedula": "9999999","nombre": "Steven Gerrard","telefono":"52230987","email":"sg@hotmail.com"},
                 {"cedula": "6666666","nombre": "Jurgen Klopp","telefono":"88573123","email":"jk@gmail.com"}]

function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(profe => createLine(profe))
 }
 function createLine(profe){
  var table = document.getElementById('myTable')
  var row = `<tr>
                    <td>${profe.cedula}</td>
                    <td>${profe.nombre}</td>
                    <td>${profe.telefono}</td>
                    <td>${profe.email}</td>
                 </tr>`
     table.innerHTML += row;
 }
 function busqueda(){
    var datoBusqueda = document.getElementById('busquedaText').value
    var filtroBusqueda = document.getElementById('ddlFiltro').value
    var datosFiltrados = profes.filter(function(item)
                     {
                        if(filtroBusqueda == 'nombre'){
                            return item.nombre.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }
                        if(filtroBusqueda == 'cedula'){
                            return item.cedula.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }

                     });

     fillTable(datosFiltrados)
 }
fillTable(profes)