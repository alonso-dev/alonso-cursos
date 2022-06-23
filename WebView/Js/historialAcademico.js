var cedula = localStorage.getItem('cedula')
var alumnos = [{"cedula": "116880486","nombre": "Alonso Calderón","carrera":{"nombre":"Ing en sistemas"},
                "historial":[{"ciclo":{"anno":"2020","numero":"1ero"},"curso":{"nombre":"Progra I"},"nota":"80"},
                {"ciclo":{"anno":"2020","numero":"2ero"},"curso":{"nombre":"Progra II"},"nota":"85"}]}]
function cargarEstudiante(){
    var estudiante = alumnos.find(x => x.cedula == cedula)
    document.getElementById('nombretxt').innerHTML = estudiante.nombre
    document.getElementById('cedulatxt').innerHTML = estudiante.cedula
    document.getElementById('carreraTxt').innerHTML = estudiante.carrera.nombre
    fillTable(estudiante.historial)

}
function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(x => createLine(x))
 }
 function createLine(matricula){
  var table = document.getElementById('myTable')
  var ciclo = matricula.ciclo.anno +'/'+ matricula.ciclo.numero
  var row = `<tr>
                    <td>${ciclo}</td>
                    <td>${matricula.curso.nombre}</td>
                    <td>${matricula.nota}</td>
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
cargarEstudiante()