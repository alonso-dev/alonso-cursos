var carreras = [{"codigo": "EIF","nombre": "Ingeniería en Sistemas","titulo":"Licenciatura","cursos":
                 [{"curso":"Programación I","annio":"1","ciclo":"1"},{"curso":"Programación II","annio":"1","ciclo":"2"},
                 {"curso":"Calculo","annio":"1","ciclo":"1"},{"curso":"Calculo","annio":"1","ciclo":"1"}]},
                 {"codigo": "MAT","nombre": "Matemática Pura","titulo":"Licenciatura","cursos":
                 [{"curso":"Calculo I","annio":"1","ciclo":"1"},{"curso":"Calculo II","annio":"1","ciclo":"2"}]},
                 {"codigo": "VET","nombre": "Veterinaria","titulo":"Licenciatura","cursos":
                 [{"curso":"Calculo","annio":"1","ciclo":"1"},{"curso":"Calculo 2","annio":"1","ciclo":"2"}]},
                 {"codigo": "ART","nombre": "Arte","titulo":"Licenciatura","cursos":
                 [{"curso":"Calculo","annio":"1","ciclo":"1"},{"curso":"Calculo 2","annio":"1","ciclo":"2"}]},
                 {"codigo": "MUS","nombre": "Música","titulo":"Bachillerato","cursos":
                 [{"curso":"Calculo","annio":"1","ciclo":"1"},{"curso":"Calculo 2","annio":"1","ciclo":"2"}]}]

function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(carrera => createLine(carrera))
 }
 function findCursoById(codigo){
    var cursos;
    cursos = carreras.find(x => x.codigo == codigo).cursos;
    return cursos;
 }
 function createLine(carrera){
  var table = document.getElementById('myTable')
  var row = `<tr>
                    <td>${carrera.codigo}</td>
                    <td>${carrera.nombre}</td>
                    <td>${carrera.titulo}</td>
                   <td><button class="editbtn" onClick = "getTrInfo(this)">
                       <i class="fa fa-cogs"></i>
                   </button></td>
                 </tr>`
     table.innerHTML += row;
 }
 function busqueda(){
    var datoBusqueda = document.getElementById('busquedaText').value
    var filtroBusqueda = document.getElementById('ddlFiltro').value
    var datosFiltrados = carreras.filter(function(item)
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
 function openForm() {
   document.getElementById("myForm").style.display = "block";
 }

 function closeForm() {
   document.getElementById("myForm").style.display = "none";
 }
 function getTrInfo(row){
     var cursoID;
     var array;
     var $row = $(row).closest("tr"),
     $tds = $row.find("td:nth-child(1)");

     $.each($tds, function() {
     cursoID = $(this).text();
    });
    array = findCursoById(cursoID)
    fillCourseTable(array)
    openForm()
 }
function fillCourseTable(cursos){
     document.getElementById('cursosTable').innerHTML = "";
     var table = document.getElementById('cursosTable')
     cursos.forEach(function(element) {
              var row = `<tr>
                                <td>${element.curso}</td>
                                <td>${element.annio}</td>
                                <td>${element.ciclo}</td>
                             </tr>`
                 table.innerHTML += row;
      })

}
fillTable(carreras)