var usuarios = [{"cedula":"111111111","clave":"1234","perfil":"alumno","matriculador":"true"},
                {"cedula":"222222222","clave":"1234","perfil":"profesor","matriculador":"false"},
                {"cedula":"333333333","clave":"1234","perfil":"administrador","matriculador":"true"}];
var usuarioSeleccionado;

function fillTable(data){
    document.getElementById('myTable').innerHTML = "";
    data.forEach(profe => createLine(profe))
 }
 function createLine(usuario){
  var table = document.getElementById('myTable')
  var matricula = "NO"
  if(usuario.matriculador == "true") {matricula = "SI"}
  var row = `<tr>
                    <td>${usuario.cedula}</td>
                    <td>${usuario.perfil}</td>
                    <td>${matricula}</td>
                    <td><button class="editbtn" onClick = "cargarEditarUsuario(this)">
                    Editar
                    </button></td>
                 </tr>`
     table.innerHTML += row;
 }
   function openForm() {
    document.getElementById("usuarioCedTxt").innerHTML = usuarioSeleccionado;
     document.getElementById("myForm").style.display = "block";
   }

   function closeForm() {
     document.getElementById("myForm").style.display = "none";
   }
 function busqueda(){
    var datoBusqueda = document.getElementById('busquedaText').value
    var filtroBusqueda = document.getElementById('ddlFiltro').value
    var datosFiltrados = usuarios.filter(function(item)
                     {
                        if(filtroBusqueda == 'cedula'){
                            return item.cedula.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }
                        if(filtroBusqueda == 'perfil'){
                            return item.perfil.toLowerCase().indexOf(datoBusqueda.toLowerCase()) !== -1
                        }

                     });

     fillTable(datosFiltrados)
 }
  function cargarEditarUsuario(row){
         var cedula;
         var usuarioActual;
         var array;
         var $row = $(row).closest("tr"),
         $tds = $row.find("td:nth-child(1)");
         $.each($tds, function() {
             cedula = $(this).text();
         });
        usuarioSeleccionado = cedula
        usuarioActual = usuarios.find(x => x.cedula ==cedula)
        if(usuarioActual.matriculador == 'true'){
            document.getElementById('matriculadorCheck').checked = true;
        }
        document.getElementById('claveTxt').value = usuarioActual.clave
        document.getElementById('perfilDdl').value = usuarioActual.perfil
        openForm()
     }

  function guardarEdit(){
        var nuevoPerfil = document.getElementById('perfilDdl').value
        var matriculador = document.getElementById('matriculadorCheck').checked.toString()
        var nuevaClave = document.getElementById('claveTxt').value
        usuarios.find(x => x.cedula == usuarioSeleccionado).perfil = nuevoPerfil
        usuarios.find(x => x.cedula == usuarioSeleccionado).matriculador = matriculador
        usuarios.find(x => x.cedula == usuarioSeleccionado).clave = nuevaClave

        closeForm()
        fillTable(usuarios)
  }
fillTable(usuarios)