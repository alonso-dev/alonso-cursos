var alumnos = [{"cedula": "116880486","nombre": "Alonso Calderón","telefono":"11111111","historial":[{"curso":"Progra I","nota":"80"}],"email":"a@gmail.com","fechaNac":"22-09-97","carrera":"Ing en Sistemas"},
               {"cedula": "116620535","nombre": "Natalia Álvarez","telefono":"22222222","historial":[],"email":"n@gmail.com","fechaNac":"17-12-96","carrera":"Veterinaria"},
               {"cedula": "114098765","nombre": "Alberto Suárez","telefono":"33333333","historial":[],"email":"as@gmail.com","fechaNac":"12-05-93","carrera":"Matematica"},
               {"cedula": "105640513","nombre": "Kevin Ruiz","telefono":"44444444","historial": [],"email":"kr@gmail.com","fechaNac":"11-02-95","carrera":"Administración"},
               {"cedula": "116990044","nombre": "Elvis Tec","telefono":"55555555","historial": [],"email":"et@gmail.com","fechaNac":"20-10-99","carrera":"Ing en Sistemas"}]

function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(alumno => createLine(alumno))
 }
 function findhistorialById(codigo){
    var historial;
    historial = alumnos.find(x => x.cedula == codigo).historial;
    return historial;
 }
 function createLine(alumno){
  var table = document.getElementById('myTable')
  var row = `<tr>
                    <td>${alumno.cedula}</td>
                    <td>${alumno.nombre}</td>
                    <td>${alumno.telefono}</td>
                    <td>${alumno.email}</td>
                    <td>${alumno.fechaNac}</td>
                    <td>${alumno.carrera}</td>
                    <td><button class="editbtn" onClick = "getTrInfo(this)">
                     historial
                   </button></td>
                 </tr>`
     table.innerHTML += row;
 }
 function busqueda(){
    var datoBusqueda = document.getElementById('busquedaText').value
    var filtroBusqueda = document.getElementById('ddlFiltro').value
    var datosFiltrados = alumnos.filter(function(item)
                     {
                        if(filtroBusqueda == 'nombre'){
                            return item.nombre.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }
                        if(filtroBusqueda == 'cedula'){
                            return item.cedula.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }
                        if(filtroBusqueda == 'carrera'){
                            return item.carrera.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }

                     });

     fillTable(datosFiltrados)
 }
 function openForm() {
   document.getElementById("myForm").style.display = "block";
 }

 function closeForm() {
   document.getElementById("myForm").style.display = "none";
 }
 function getTrInfo(row){
     var alumnoID;
     var array;
     var $row = $(row).closest("tr"),
     $tds = $row.find("td:nth-child(1)");

     $.each($tds, function() {
     alumnoID = $(this).text();
    });

    array = findhistorialById(alumnoID)
    fillCourseTable(array)
    openForm()
 }
function fillCourseTable(cursos){
     document.getElementById('historialTable').innerHTML = "";
     var table = document.getElementById('historialTable')
     cursos.forEach(function(element) {
              var row = `<tr>
                                <td>${element.curso}</td>
                                <td>${element.nota}</td>
                             </tr>`
                 table.innerHTML += row;
      })

}
fillTable(alumnos)