var cedula = localStorage.getItem('cedula')
var usuarios = [{"cedula":"116880486","clave":"1234","perfil":"alumno","matriculador":"true"},
                {"cedula":"6666666","clave":"1234","perfil":"profesor","matriculador":"false"},
                {"cedula":"5555555","clave":"1234","perfil":"administrador","matriculador":"true"}];
var usuario = usuarios.find(x => x.cedula == cedula)

function cargarIndex(){
    document.getElementById('listaFuncionalidades').innerHTML = ""
    var listado = document.getElementById('listaFuncionalidades')
    var rows
    switch(usuario.perfil){
        case 'alumno':
           rows =  `<li>
                       <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/historialAcademico.html">Historial Academico</a>
                    </li>`
            listado.innerHTML += rows;
            break;
        case 'profesor':
            rows =  `<li>
                        <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/registroNotas.html">Registro de notas</a>
                     </li>`
            listado.innerHTML += rows;

            break;
        case 'administrador':
            rows =  `<li>
                        <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/cursosMant.html">Mantenimiento de Cursos</a>
                      </li>
                      <li>
                         <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/carrerasMant.html">Mantenimiento de Carreras</a>
                      </li>
                      <li>
                          <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/profesoresMant.html">Mantenimiento de Profesores</a>
                      </li>
                      <li>
                          <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/alumnosMant.html">Mantenimiento de Alumnos</a>
                      </li>
                      <li>
                           <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/ciclosMant.html">Mantenimiento de Ciclos</a>
                      </li>
                      <li>
                            <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/ofertaAcademica.html">Oferta Académica</a>
                      </li>
                      <li>
                             <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/historialAcademico.html">Historial</a>
                      </li>
                      <li>
                              <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/seguridad.html">Seguridad</a>
                      </li>`
             listado.innerHTML += rows;

            break;
    }
    if(usuario.matriculador == 'true'){
         listado.innerHTML += `<li>
                      <a href= "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/ofertaAcademica.html">Matricula</a>
                        </li>`
    }
}

cargarIndex()