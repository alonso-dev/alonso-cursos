var usuarios = [{"cedula":"116880486","clave":"1234","perfil":"alumno","matriculador":"true"},
                {"cedula":"6666666","clave":"1234","perfil":"profesor","matriculador":"false"},
                {"cedula":"5555555","clave":"1234","perfil":"administrador","matriculador":"true"}];

/*
function getUsuario(user, password) {
    var URL = "http://localhost:8083/api/usuario?nombre=" + user + "&password=" + password;
    console.log(user);
    console.log(URL);
     $.ajax({type: "GET", url: "http://localhost:8083/api/usuario?nombre=" + user + "&password=" + password})
            .then((data) => {
                total(data);
            },
              (error) => {
               alert("usuario o password incorrecta");}
        );

} */


function validateUser() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    var usuario = usuarios.find(x => x.cedula == username && x.clave == password)

    if (usuario){
        localStorage.setItem('cedula', usuario.cedula);
        window.location.href = "file:///C:/Users/Alonso%20Calderon/Desktop/Semestre%20Actual/Moviles/LabMoviles/LabMoviles/src/cr/una/FE/WebView/Views/index.html"
    }
    else
        console.log('datos incorrectos')
}