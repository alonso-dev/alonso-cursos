var grupos = [{"ciclo":{"annio": "2022","numero": "2do","fechaInicio":"15-07-2022","fechaFin":"30-11-2022","activo":"true"},
                "curso": {"codigo": "EIF-001","nombre": "Programación 1","creditos":"4","horasSemanales":"12"},
                "numGrupo":"001","horario":"L-J 9:00AM","profesor":{"cedula": "6666666","nombre": "Jurgen Klopp","telefono":"88573123","email":"jk@gmail.com"},
                "alumnos":[{"cedula":"116880486","nombre":"Alonso Calderon","historial":[{"nota":"85","curso":{"codigo":"EIF-001"}}]}]}]
var cedula = localStorage.getItem('cedula')
var cursoActual;
var grupoActual;


var gruposProfe = grupos.filter(x => x.profesor.cedula == cedula)

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function fillStudentTable(data){
    document.getElementById('alumnosTable').innerHTML = "";
    data.forEach(x => createLineStudent(x))
}

function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(grupo => createLine(grupo))
 }
 function getTrInfo(row){
      var grupoID;
      var $row = $(row).closest("tr"),
      $tds = $row.find("td:nth-child(2)");

      $.each($tds, function() {
          grupoID = $(this).text();
      });
      grupoActual = grupoID

      var cursoID;
      var $row = $(row).closest("tr"),
      $tds = $row.find("td:nth-child(1)");
      $.each($tds, function() {
          cursoID = $(this).text();
      });
      cursoActual = cursoID


      var array = grupos.find( x => x.numGrupo == grupoActual && x.curso.codigo == cursoActual).alumnos

      fillStudentTable(array)

      openForm()
 }

 function createLine(grupo){
  var table = document.getElementById('myTable')
  var row = `<tr>
                    <td>${grupo.curso.codigo}</td>
                    <td>${grupo.numGrupo}</td>
                    <td>${grupo.horario}</td>
                    <td><button onClick = "getTrInfo(this)">
                         Ver alumnos
                    </button></td>
                 </tr>`
     table.innerHTML += row;
 }

  function createLineStudent(alumno){
   var table = document.getElementById('alumnosTable')
   var nota = alumno.historial.find( x => x.curso.codigo == cursoActual).nota
   var row = `<tr>
                     <td>${alumno.cedula}</td>
                     <td>${alumno.nombre}</td>
                     <td><input id="notaTxtEdit" type="text" placeholder="Nota.." ></td>
                     <td><button onClick = "guardarNota(this)">
                        Guardar
                     </button></td>
                  </tr>`
      table.innerHTML += row;

      document.getElementById('notaTxtEdit').value = nota
  }

 function guardarNota(row){
      var alumnoID;
      var $row = $(row).closest("tr"),
      $tds = $row.find("td:nth-child(1)");
      $.each($tds, function() {
          alumnoID = $(this).text();
      });

      var alumno =  grupos.find( x => x.numGrupo == grupoActual && x.curso.codigo == cursoActual).alumnos.find(x => x.cedula == alumnoID)
      alumno.historial.find( x => x.curso.codigo == cursoActual).nota = document.getElementById('notaTxtEdit').value

      closeForm()
 }


fillTable(gruposProfe)