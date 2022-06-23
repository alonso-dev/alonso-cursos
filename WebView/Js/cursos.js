var cursosCarrera = [{"codigo": "EIF-001","nombre": "Programación 1","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-002","nombre": "Programación 2","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-003","nombre": "Programación 3","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-004","nombre": "Programación 4","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-005","nombre": "Paradigmas de programación","creditos":"5","horasSemanales":"21"},
                 {"codigo": "EIF-006","nombre": "Diseño y programación de plataformas móviles","creditos":"4","horasSemanales":"12"}]

function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(curso => createLine(curso))
 }
 function createLine(curso){
  var table = document.getElementById('myTable')
  var row = `<tr>
                    <td>${curso.codigo}</td>
                    <td>${curso.nombre}</td>
                    <td>${curso.creditos}</td>
                    <td>${curso.horasSemanales}</td>
                 </tr>`
     table.innerHTML += row;
 }
 function busqueda(){
    var datoBusqueda = document.getElementById('busquedaText').value
    var filtroBusqueda = document.getElementById('ddlFiltro').value
    var datosFiltrados = cursos.filter(function(item)
                     {
                        if(filtroBusqueda == 'nombre'){
                            return item.nombre.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }
                        if(filtroBusqueda == 'codigo'){
                            return item.codigo.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }

                     });

     fillTable(datosFiltrados)
 }
fillTable(cursos)