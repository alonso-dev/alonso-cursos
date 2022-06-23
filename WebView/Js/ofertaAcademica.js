var carreras = [{"codigo": "EIF","nombre": "Ingeniería en Sistemas","titulo":"Licenciatura","cursos":
                 [ {"codigo": "EIF-001","nombre": "Programación 1","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-002","nombre": "Programación 2","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-005","nombre": "Paradigmas de programación","creditos":"5","horasSemanales":"21"}]},
                 {"codigo": "MAT","nombre": "Matemática Pura","titulo":"Licenciatura","cursos":
                 [{"codigo": "EIF-006","nombre": "Diseño y programación de plataformas móviles","creditos":"4","horasSemanales":"12"}]},
                 {"codigo": "VET","nombre": "Veterinaria","titulo":"Licenciatura","cursos":
                 [{"codigo": "EIF-006","nombre": "Diseño y programación de plataformas móviles","creditos":"4","horasSemanales":"12"}]},
                 {"codigo": "ART","nombre": "Arte","titulo":"Licenciatura","cursos":
                 [{"codigo": "EIF-006","nombre": "Diseño y programación de plataformas móviles","creditos":"4","horasSemanales":"12"}]},
                 {"codigo": "MUS","nombre": "Música","titulo":"Bachillerato","cursos":
                 [{"codigo": "EIF-006","nombre": "Diseño y programación de plataformas móviles","creditos":"4","horasSemanales":"12"}]}]

var ciclos = [{"annio": "2020","numero": "1ero","fechaInicio":"09-02-2020","fechaFin":"12-06-2020","activo":"false"},
                 {"annio": "2020","numero": "2do","fechaInicio":"12-06-2020","fechaFin":"30-11-2020","activo":"false"},
                 {"annio": "2021","numero": "1ero","fechaInicio":"15-02-2021","fechaFin":"28-06-2021","activo":"false"},
                 {"annio": "2021","numero": "2do","fechaInicio":"01-07-2021","fechaFin":"30-11-2021","activo":"false"},
                 {"annio": "2022","numero": "1ero","fechaInicio":"07-03-2022","fechaFin":"07-07-2022","activo":"false"},
                 {"annio": "2022","numero": "2do","fechaInicio":"15-07-2022","fechaFin":"30-11-2022","activo":"true"}]

var cursos = [{"codigo": "EIF-001","nombre": "Programación 1","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-002","nombre": "Programación 2","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-003","nombre": "Programación 3","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-004","nombre": "Programación 4","creditos":"4","horasSemanales":"12"},
                 {"codigo": "EIF-005","nombre": "Paradigmas de programación","creditos":"5","horasSemanales":"21"},
                 {"codigo": "EIF-006","nombre": "Diseño y programación de plataformas móviles","creditos":"4","horasSemanales":"12"}]
var grupos = [{"ciclo":{"annio": "2022","numero": "2do","fechaInicio":"15-07-2022","fechaFin":"30-11-2022","activo":"true"},
                "curso": {"codigo": "EIF-001","nombre": "Programación 1","creditos":"4","horasSemanales":"12"},
                "numGrupo":"001","horario":"L-J 9:00AM","profesor":{"cedula": "6666666","nombre": "Jurgen Klopp","telefono":"88573123","email":"jk@gmail.com"},
                "alumnos":[]}]

var profesores = [{"cedula": "12345","nombre": "Alonso Calderón","telefono":"40000000","email":"alonso@gmail.com"},
                 {"cedula": "67890","nombre": "Natalia Álvarez","telefono":"41234098","email":"nar@gmail.com"},
                 {"cedula": "222222","nombre": "Mo Salah","telefono":"40938543","email":"momo@gmail.com"},
                 {"cedula": "1111111","nombre": "Sádico Mané","telefono":"40991212","email":"ohmanemane@hotmail.com"},
                 {"cedula": "9999999","nombre": "Steven Gerrard","telefono":"52230987","email":"sg@hotmail.com"},
                 {"cedula": "6666666","nombre": "Jurgen Klopp","telefono":"88573123","email":"jk@gmail.com"}]

var cursoActual;
var grupoSeleccionado;

function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(curso => createLine(curso))
 }

  function findGruposByCurso(codigo){
     var result;
     result = grupos.filter(x => x.curso.codigo == codigo);
     document.getElementById('Cursotxt').innerHTML = codigo;
     return result;
  }

 function createLine(curso){
  var table = document.getElementById('myTable')
  var row = `<tr>
                    <td>${curso.codigo}</td>
                    <td>${curso.nombre}</td>
                    <td>${curso.creditos}</td>
                    <td>${curso.horasSemanales}</td>
                    <td><button class="editbtn" onClick = "getTrInfo(this)">
                     Ver grupos
                    </button></td>
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
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function openForm2() {
      document.getElementById("myFormGrupos").style.display = "block";
  }

  function closeForm2() {
      document.getElementById("myFormGrupos").style.display = "none";
  }
  function cargarDdlCiclos(ddl){
     var ddl = document.getElementById(ddl)
     ddl.innerHTML = `<option value="">Ciclo</option>`
     ciclos.forEach(function(item)
               {
               var value =  item.annio +'/'+item.numero
               var row = `<option value=${value}>${item.annio} ${item.numero}</option>`
                  ddl.innerHTML += row;
               });
  }
    function cargarDdlCarreras(){
       var ddl = document.getElementById('ddlCarreras')
       ddl.innerHTML = `<option value="">Carrera</option>`
       carreras.forEach(function(item)
                 {
                 var row = `<option value=${item.codigo}>${item.nombre}</option>`
                    ddl.innerHTML += row;
                 });
    }
    function cargarDdlProfesores(ddl){
           var ddl = document.getElementById(ddl)
           ddl.innerHTML = `<option value="">Profesores</option>`
           profesores.forEach(function(item)
                     {
                     var row = `<option value=${item.cedula}>${item.nombre}</option>`
                        ddl.innerHTML += row;
                     });
        }
    function busqueda(){
    var carrera = document.getElementById('ddlCarreras').value
    if(carrera == ""){
        fillTable(cursos)
    }else
     fillTable(carreras.find(c => c.codigo == carrera  ).cursos)
    }

     function getTrInfo(row){
         var cursoID;
         var array;
         var $row = $(row).closest("tr"),
         $tds = $row.find("td:nth-child(1)");

         $.each($tds, function() {
         cursoID = $(this).text();
        });

        cursoActual = cursoID;
        array = findGruposByCurso(cursoID)
        fillGroupTable(array)
        openForm()
     }
    function fillGroupTable(grupos){
     document.getElementById('gruposTable').innerHTML = "";
     var table = document.getElementById('gruposTable')
     grupos.forEach(function(element) {
              var row = `<tr>
                                <td>${element.numGrupo}</td>
                                <td>${element.profesor.nombre}</td>
                                <td>${element.horario}</td>
                                <td>${element.ciclo.annio} ${element.ciclo.numero}</td>
                                <td><button class="editbtn" onClick = "editarGrupo(this)">
                                Editar
                                </button></td>
                                </td>
                             </tr>`
                 table.innerHTML += row;
      })

    }
    function crearGrupo(){
        var table = document.getElementById('gruposTable')
        var row = `<tr>
                                        <td>
                                            <input type="text" id="numeroGrupo" size="10"></td>
                                        <td>
                                            <select name="ddlProfesores" id="ddlProfesores">
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" id="horarioCurso" size="20"></td>
                                        </td>
                                        <td>
                                            <select name="ddlCiclos2" id="ddlCiclos2">
                                            </select>
                                        </td>
                                        <td><button class="editbtn" onClick = "guardarGrupo(this)">
                                        Guardar
                                        </button></td>
                                        </td>
                                     </tr>`
                         table.innerHTML += row;
    cargarDdlCiclos('ddlCiclos2')
    cargarDdlProfesores('ddlProfesores')

    }
    function guardarGrupo(row){
        var numGrupo = document.getElementById('numeroGrupo').value
        var horario = document.getElementById('horarioCurso').value
        var nuevoGrupo = new Object();
        var cicloDatos = document.getElementById('ddlCiclos2').value.split('/')
        var profesorCedula = document.getElementById('ddlProfesores').value
        var ciclo = ciclos.find(x => x.annio ==  cicloDatos[0] && x.numero == cicloDatos[1])
        var curso = cursos.find(x => x.codigo ==  cursoActual)
        var profesor = profesores.find(x => x.cedula ==  profesorCedula)
        nuevoGrupo.ciclo = ciclo
        nuevoGrupo.curso = curso
        nuevoGrupo.numGrupo = numGrupo
        nuevoGrupo.horario = horario
        nuevoGrupo.profesor = profesor
        nuevoGrupo.alumnos = new Array()


        grupos.push(nuevoGrupo)
        array = findGruposByCurso(cursoActual)
        fillGroupTable(array)
    }
    function editarGrupo(row){
        var numGrupo;
        var grupoActual;
        var array;
        var $row = $(row).closest("tr"),
        $tds = $row.find("td:nth-child(1)");
        $.each($tds, function() {
            numGrupo = $(this).text();
        });
       grupoSeleccionado = numGrupo
       grupoActual = grupos.find(x => x.numGrupo ==numGrupo)
       document.getElementById('groupNumTxt').innerHTML = numGrupo
       document.getElementById('horarioTxtEdit').value = grupoActual.horario
       cargarDdlCiclos('ddlCiclos3')
       cargarDdlProfesores('ddlProfesor2')
       closeForm()
       openForm2()
    }

  function guardarEdit(){
    var cicloDatos = document.getElementById('ddlCiclos3').value.split('/')
    var profesorCedula = document.getElementById('ddlProfesor2').value
    var nuevoCiclo = ciclos.find(x => x.annio ==  cicloDatos[0] && x.numero == cicloDatos[1])
    var nuevoProfesor = profesores.find(x => x.cedula ==  profesorCedula)
    var nuevoHorario = document.getElementById('horarioTxtEdit').value
    grupos.find(x => x.numGrupo == grupoSeleccionado).ciclo = nuevoCiclo
    grupos.find(x => x.numGrupo == grupoSeleccionado).profesor = nuevoProfesor
    grupos.find(x => x.numGrupo == grupoSeleccionado).horario = nuevoHorario

    closeForm2()
  }
  cargarDdlCiclos('ddlCiclos')
  cargarDdlCarreras()
